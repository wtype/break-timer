const main = document.querySelector('main');
const time = document.querySelector('#time');
const heading = document.querySelector('h1');
let seconds = 0;
const breakInterval = 10;
const breakAmount = 25000;

function fadeInWindow() {
  main.style.background = 'rgba(100, 100, 100, 0.4)';
  heading.innerText = 'Take a break';
}

function fadeOutWindow() {
  heading.innerText = '';
  main.style.background = 'transparent';
}

const updateSeconds = () => {
  seconds += 1;
};

setInterval(() => {
  updateSeconds();
  if (seconds === breakInterval) {
    fadeInWindow();
    setTimeout(() => {
      fadeOutWindow();
      seconds = 0;
    }, breakAmount);
  }
}, 1000);
