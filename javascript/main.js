let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
var navbar = document.getElementById("navbar");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
  navbar.style.backgroundColor = "blue";
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", "disabled");
  navbar.style.backgroundColor = "red";
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Launch Games
function launchAsteroids() {
  window.location = "./Asteroids/index.html";
}

function launchBomberman() {
  window.location = "./Bomberman/index.html";
}

function launchBrickBreaker() {
  window.location = "./Brick-Breakerindex.html";
}

function launchCentipede() {
  window.location = "./Centipede/index.html";
}

function launchFlappyBird() {
  window.location = "./Flappy-Bird/index.html";
}

function launchFrogger() {
  window.location = "./Frogger/index.html";
}

function launchFruitNinja() {
  window.location = "./Fruit-Ninja/index.html";
}

function launchMinesweeper() {
  window.location = "./Minesweeper/index.html";
}

function launchPacman() {
  window.location = "./Pacman/index.html";
}

function launchPong() {
  window.location = "./Pong/index.html";
}

function launchSnake() {
  window.location = "./Snake/index.html";
}

function launchSpaceInvaders() {
  window.location = "./Space-Invaders/index.html";
}

function launchTetris() {
  window.location = "./Tetris/index.html";
}

function launchSpace() {
  window.location = "./Google-Space.html";
}

function launchGravity() {
  window.location = "./Google-Gravity.html";
}

function launchWaveform() {
  window.location = "./waveform.html";
}
