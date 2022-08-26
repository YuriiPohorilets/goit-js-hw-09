const refs = {
  start: document.querySelector('[data-start'),
  stop: document.querySelector('[data-stop'),
};

const INTERVAL_DURATION = 1_000;
let timerlId = null;
refs.stop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnClickStart() {
  refs.start.disabled = true;
  refs.stop.disabled = false;

  timerlId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DURATION);
}

function onBtnClickStop() {
  refs.start.disabled = false;
  refs.stop.disabled = true;

  clearInterval(timerlId);
}

refs.start.addEventListener('click', onBtnClickStart);
refs.stop.addEventListener('click', onBtnClickStop);
