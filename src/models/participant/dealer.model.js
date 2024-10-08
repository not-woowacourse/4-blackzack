import { Cards } from '@/models/card/cards.model';

class Dealer {
  #cards;

  constructor() {
    this.#cards = new Cards();
  }

  addCard(card) {
    this.#cards.add(card);
  }

  addCards(cards) {
    cards.forEach((card) => this.addCard(card));
  }

  checkIsBust() {
    return this.#cards.checkIsBust();
  }

  checkCanDraw() {
    return this.#cards.score <= 16;
  }

  resetCards() {
    this.#cards.reset();
  }

  get cards() {
    return this.#cards.cards;
  }

  get score() {
    return this.#cards.score;
  }
}

export { Dealer };
