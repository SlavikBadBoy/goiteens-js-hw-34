const input = document.querySelector("#input");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
let timerId;

const startHandler = () => {
  if (input.value !== "") {
    const interval = parseFloat(input.value) * 1000;

    if (timerId) {
      clearInterval(timerId);
    }

    timerId = setInterval(() => {
      alert(`Пройшло ${input.value}s`);
    }, interval);
  }
};

const stopHandler = () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
};

startButton.addEventListener("click", startHandler);
stopButton.addEventListener("click", stopHandler);
