let upTime = 0;

function notifyUser(message) {
  const body =
    message === 1 ? `Uptime: ${message} minute` : `Uptime: ${message} minutes`;
  const notification = new Notification('Break Timer Notification', {
    body,
  });
  notification.onclick = () => {
    console.log('Notification clicked');
  };
}

setInterval(() => {
  upTime += 1;
  notifyUser(upTime);
}, 60e4);
