import { Cards } from '@/models/card/cards.model.js';

class Participant {
  cards;

  constructor() {
    this.cards = new Cards();
  }

  addCard(card) {
    this.cards.add(card);
  }

  resetCard() {
    this.cards.reset();
  }

  checkIsBust() {
    return this.cards.checkIsBust();
  }

  get score() {
    return this.cards.score;
  }
}
export { Participant };
