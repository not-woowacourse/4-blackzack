import { Participant } from './participant.model.js';

class Player extends Participant {
  constructor() {
    super();
    this.win = 0;
    this.draw = 0;
    this.lose = 0;
  }
  checkCanDraw() {
    return !this.cards.checkIsBust();
  }

  recordScore(result) {
    switch (result) {
      case 'win':
        this.win++;
        break;
      case 'draw':
        this.draw++;
        break;
      case 'lose':
        this.lose++;
        break;
      default:
        throw new Error('Invalid result value');
    }
  }

  get winCount() {
    return this.win;
  }

  get drawCount() {
    return this.draw;
  }

  get loseCount() {
    return this.lose;
  }
}

export { Player };
