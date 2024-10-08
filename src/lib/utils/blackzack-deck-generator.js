import { shuffle } from 'es-toolkit';

import { PLAYING_CARD } from './playing-card.constant';

class BlackzackDeckGenerator {
  static #getBlackzackDeck() {
    return PLAYING_CARD.SUIT.flatMap((suit) =>
      PLAYING_CARD.RANK.map((rank) => ({ suit, rank })),
    );
  }

  static generateNewBlackzackDeck() {
    const newBlackzackDeck = this.#getBlackzackDeck();

    const shuffledNewBlackzackDeck = shuffle(newBlackzackDeck);

    return shuffledNewBlackzackDeck;
  }

  /**
   * 1덱이 아닌 여러 덱으로 플레이하고 싶은 경우 사용합니다.
   */
  static generateNewBlackzackDeckMultiple(count) {
    const newBlackzackDecks = Array.from({ length: count }, () =>
      this.#getBlackzackDeck(),
    );

    const shuffledNewBlackzackDeckMultiple = shuffle(newBlackzackDecks.flat());

    return shuffledNewBlackzackDeckMultiple;
  }
}

export { BlackzackDeckGenerator };
