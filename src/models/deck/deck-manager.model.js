import { BlackzackDeckGenerator } from '@/lib/utils/blackzack-deck-generator';
import { Card } from '@/models/card/card.model';

class DeckManager {
  /**
   * 통상적으로 카드 카운팅을 어렵게 하기 위하여 4 ~ 8덱을 동시에 셔플하여 사용한다.
   * @See {@link https://yopark.notion.site/112e2b27d9bc80bb91d6cd2b99900a9b}
   */
  #deckCount;
  #deck;

  constructor(deckCount) {
    this.#deckCount = deckCount;
    this.#deck = this.#generateNewDeck();
  }

  #generateNewDeck() {
    const newBlackzackDeck =
      BlackzackDeckGenerator.generateNewBlackzackDeckMultiple(this.#deckCount);

    return this.#convertBlackzeckDeckToDeck(newBlackzackDeck);
  }

  #convertBlackzeckDeckToDeck(blackzackDeck) {
    return blackzackDeck.map(({ suit, rank }) => new Card(rank, suit));
  }

  draw() {
    if (this.#deck.length === 0) {
      this.#deck = this.#generateNewDeck();
    }

    return this.#deck.pop();
  }

  drawMultiple(count) {
    return Array.from({ length: count }, () => this.draw());
  }
}

export { DeckManager };
