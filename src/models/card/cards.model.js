import { sum } from 'es-toolkit';

import { BLACKJACK_RULE } from '@/lib/constants/blackjack-rule.constant';

class Cards {
  #cards;
  #score;

  constructor() {
    this.#cards = [];
    this.#score = 0;
  }

  #calculateScore({ initialScore, aceCount }) {
    // 너무 절차지향적인 로직이야 ... ㅜㅜ
    let aceLeft = aceCount;
    let score = initialScore;

    while (score >= BLACKJACK_RULE.BUST_MINIMUM_THRESHOLD && aceLeft > 0) {
      score -= BLACKJACK_RULE.ACE_VALUE - BLACKJACK_RULE.ACE_VALUE_WHEN_BUST;
      aceLeft -= 1;
    }

    return score;
  }

  #updateScore() {
    const aceCount = this.cards.filter((card) => card.isAce()).length;
    const initialScore = sum(this.cards.map((card) => card.value));

    this.#score = this.#calculateScore({ initialScore, aceCount });
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
    return this.#score >= BLACKJACK_RULE.BUST_MINIMUM_THRESHOLD;
  }
}

export { Cards };
