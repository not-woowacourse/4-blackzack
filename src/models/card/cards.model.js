import { sum } from 'es-toolkit';

class Cards {
  #cards;
  #score;

  constructor() {
    this.#cards = [];
    this.#score = 0;
  }

  #updateScore() {
    this.#score = sum(this.cards.map((card) => card.value));
  }

  add(card) {
    this.cards.push(card);
    this.#updateScore();
  }

  reset() {
    this.#cards = [];
    this.#score = 0;
  }

  get cards() {
    return this.#cards;
  }

  get score() {
    return this.#score;
  }

  checkIsBust() {
    return this.#score > 21;
  }
}

export { Cards };
