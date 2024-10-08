import { GAME_RESULT } from '@/lib/constants/game-result.constant';
import { Console } from '@/lib/utils/console';
import { CANDIDATE, OUTPUT_MESSAGE } from '@/views/output.view.constant';

class OutputView {
  static #print(message) {
    Console.print(message);
  }

  static #printReceiveCards(name, cards) {
    const cardString = cards.map((card) => card.toKoreanString()).join(', ');

    this.#print(OUTPUT_MESSAGE.RECEIVE_CARD({ name, cardString }));
  }

  // useless?
  static #printAction(name, action) {
    this.#print(OUTPUT_MESSAGE.ACTION({ name, action }));
  }

  static #printBust(name) {
    this.#print(OUTPUT_MESSAGE.BUST(name));
  }

  static #printSumOfCards(name, sum) {
    this.#print(OUTPUT_MESSAGE.SUM_OF_CARDS({ name, sum }));
  }

  static #printPlayerWin() {
    this.#print(OUTPUT_MESSAGE.PLAYER_WIN);
  }

  static #printPlayerDraw() {
    this.#print(OUTPUT_MESSAGE.PLAYER_DRAW);
  }

  static #printPlayerLose() {
    this.#print(OUTPUT_MESSAGE.PLAYER_LOSE);
  }

  static printStartGame() {
    this.#print(OUTPUT_MESSAGE.START_GAME);
  }

  static printPlayerReceiveCards(cards) {
    this.#printReceiveCards(CANDIDATE.PLAYER, cards);
  }

  static printDealerReceiveCards(cards) {
    this.#printReceiveCards(CANDIDATE.DEALER, cards);
  }

  static printDealerAction(action) {
    this.#printAction(CANDIDATE.DEALER, action);
  }

  static printDealerActionHit() {
    this.printDealerAction('히트');
  }

  static printDealerActionStand() {
    this.printDealerAction('스탠드');
  }

  static printPlayerBust() {
    this.#printBust(CANDIDATE.PLAYER);
  }

  static printDealerBust() {
    this.#printBust(CANDIDATE.DEALER);
  }

  static printSumOfDealerCards(sum) {
    this.#printSumOfCards(CANDIDATE.DEALER, sum);
  }

  static printSumOfPlayerCards(sum) {
    this.#printSumOfCards(CANDIDATE.PLAYER, sum);
  }

  static printPlayerResult(result) {
    switch (result) {
      case GAME_RESULT.WIN:
        this.#printPlayerWin();
        break;
      case GAME_RESULT.DRAW:
        this.#printPlayerDraw();
        break;
      case GAME_RESULT.LOSE:
        this.#printPlayerLose();
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
