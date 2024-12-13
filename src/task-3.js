const gameContainer = document.querySelector("#game-container");
const scoreDisplay = document.querySelector("#score");
const startButton = document.querySelector("#start-btn");

let score = 0;
let gameInterval;
let gameDuration = 10000;

function createTarget() {
  const target = document.createElement("div");
  target.classList.add("target");
  const x = Math.random() * (gameContainer.offsetWidth - 50);
  const y = Math.random() * (gameContainer.offsetHeight - 50);
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = `Очки: ${score}`;
    gameContainer.removeChild(target);
  });

  gameContainer.appendChild(target);

  setTimeout(() => {
    if (gameContainer.contains(target)) {
      gameContainer.removeChild(target);
    }
  }, 1500);
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = "Очки: 0";

  gameInterval = setInterval(createTarget, 800);

  setTimeout(() => {
    clearInterval(gameInterval);
    alert(`Гра закінчена! Ваш рахунок: ${score}`);
  }, gameDuration);
}

startButton.addEventListener("click", startGame);
