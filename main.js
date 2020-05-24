const { app, BrowserWindow } = require('electron');
const TrayGenerator = require('./TrayGenerator');

const gotTheLock = app.requestSingleInstanceLock();

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('index.html');

  // mainWindow.webContents.openDevTools();
}

if (!gotTheLock) {
  app.quit();
} else {
  app.whenReady().then(() => {
    createWindow();
    const Tray = new TrayGenerator(mainWindow);
    Tray.createTray();
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
