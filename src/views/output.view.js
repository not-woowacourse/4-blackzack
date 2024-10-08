import { GAME_RESULT } from '@/lib/constants/game-result.constant';
import { Console } from '@/lib/utils/console';

import { OUTPUT_MESSAGE } from './output.view.constant';

class OutputView {
  static #print(message) {
    Console.print(message);
  }

  // useless?
  static #printAction(name, action) {
    this.#print(OUTPUT_MESSAGE.ACTION({ name, action }));
  }

  static #printPlayerWin() {
    this.#print(OUTPUT_MESSAGE.PLAYER_WIN);
  }

  static #printPlayerDraw() {
    this.#print(OUTPUT_MESSAGE.PLAYER_DRAW);
  }

  static #printPlayerLose(name) {
    this.#print(OUTPUT_MESSAGE.PLAYER_LOSE(name));
  }

  static printStartGame() {
    this.#print(OUTPUT_MESSAGE.START_GAME);
  }

  static printReceiveCards(name, cards) {
    const cardString = cards.map((card) => card.toKoreanString()).join(', ');

    this.#print(OUTPUT_MESSAGE.RECEIVE_CARD({ name, cardString }));
  }

  static printActionHit(name) {
    this.#printAction(name, '히트');
  }

  static printActionStand(name) {
    this.#printAction(name, '스탠드');
  }

  static printBust(name) {
    this.#print(OUTPUT_MESSAGE.BUST(name));
  }

  static printSumOfCards({ name, sum }) {
    this.#print(OUTPUT_MESSAGE.SUM_OF_CARDS({ name, sum }));
  }

  static printPlayerResult({ name, result }) {
    switch (result) {
      case GAME_RESULT.WIN:
        this.#printPlayerWin();
        break;
      case GAME_RESULT.DRAW:
        this.#printPlayerDraw();
        break;
      case GAME_RESULT.LOSE:
        this.#printPlayerLose(name);
        break;
      default:
        throw new Error('지원하지 않는 결과 값입니다.');
    }
  }

  static printEndGame() {
    this.#print(OUTPUT_MESSAGE.END_GAME);
  }

  static printFinalResult(winCount, drawCount, loseCount) {
    const totalGameCount = winCount + drawCount + loseCount;

    this.#print(
      OUTPUT_MESSAGE.FINAL_RESULT({
        totalGameCount,
        winCount,
        drawCount,
        loseCount,
      }),
    );
  }
}

export { OutputView };
