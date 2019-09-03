import getPuzzle from "./requests";
import validator from "validator";

console.log(uuidv4());
console.log(uuidv4());

const email = "kiendanggmail.com";

console.log(validator.isEmail(email));

const word = document.querySelector("#word");
const guessesLeft = document.querySelector("#guesses-left");
let Game1;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  Game1.makeGuess(guess);
  render();
});

const render = () => {
  word.innerHTML = "";
  guessesLeft.textContent = Game1.statusMessage;

  Game1.Puzzle.split("").forEach(letter => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    word.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  Game1 = new Hangman(puzzle, 5);

  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
