//Create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unqiue guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }

  calculateStatus() {
    const finished = this.word.every(
      letter => this.guessedLetters.includes(letter) || letter === " "
    );

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }

  get statusMessage() {
    if (this.status === "playing") {
      return `Playing -> Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try, the word was "${this.word.join("")}"`;
    } else {
      return "Great work, you guessed it!";
    }
  }

  get Puzzle() {
    let puzzle = "";

    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status != "playing") {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }

    this.calculateStatus();
  }
}

export { Hangman as default };
