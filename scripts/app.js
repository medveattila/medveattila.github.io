const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editPlayer1Btnelement = document.getElementById("edit-player-1-btn");
const editPlayer2Btnelement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById("game-board");

editPlayer1Btnelement.addEventListener("click", openPlayerConfig); //Tudunk definialni dologkat különböző fájlokban, és máshol használni, és csak az index.html-ben kell linkelni
editPlayer2Btnelement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig); //jobb ha a konkrét submit eseményt nézzük és nem a gombnyomást

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField);
