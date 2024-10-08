import { Participant } from './participant.model.js';

class Dealer extends Participant {
  constructor() {
    super();
  }

  getCard(card) {
    if (this.checkCanDraw()) {
      super.getCard(card);
    }
  }

  checkCanDraw() {
    return this.cards.score <= 16;
  }

  checkIsBust() {
    return super.checkIsBust();
  }
}

export { Dealer };
