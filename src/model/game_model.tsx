export enum Gamestate {
  init,
  playing,
  over,
}

export enum GuesType {
  Lesser,
  Greater,
}
export class GuessGame {
  guessNumber: number | null;
  gameState: Gamestate;
  numberofGuess: number[];

  constructor() {
    this.guessNumber = null;
    this.gameState = Gamestate.init;
    this.numberofGuess = [];
  }
  reset() {
    this.guessNumber = null;
    this.gameState = Gamestate.init;
    this.numberofGuess = [];
  }
  gameOver() {
    this.gameState = Gamestate.over;
  }
  play(guessNumber: number) {
    this.guessNumber = guessNumber;
    this.gameState = Gamestate.playing;
  }
  checkWinner(guess: number): boolean {
    if (this.guessNumber == guess) {
      return true;
    } else {
      return false;
    }
  }
}
