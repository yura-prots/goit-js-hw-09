const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let interval = null;

refs.startBtn.addEventListener('click', () => setRandomBG());
refs.stopBtn.addEventListener('click', () => stopRandomBG());

function setRandomBG() {
  interval = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  refs.startBtn.disabled = true;
}

function stopRandomBG() {
  clearInterval(interval);

  refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
