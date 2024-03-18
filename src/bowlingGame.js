class Game {
  constructor() {
    this.score = 0;
    this.rolls = [];
    this.currentRoll = 0;
  }

  roll(pins) {
    this.score += pins;
    this.rolls[this.currentRoll++] = pins;
  }

  getScore() {
    score = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      score += this.rolls[i];
    }
    return this.score;
  }
}


export default Game;
