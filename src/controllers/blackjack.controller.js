import { GAME_RESULT } from '@/lib/constants/game-result.constant';
import { DeckManager } from '@/models/deck/deck-manager.model';
import { Dealer } from '@/models/participant/dealer.model';
import { Player } from '@/models/participant/player.model';
import { InputView } from '@/views/input.view';
import { OutputView } from '@/views/output.view';

class BlackjackController {
  #wantsToPlay;

  constructor() {
    this.#wantsToPlay = true;
  }

  #calculateResult(playerScore, dealerScore) {
    if (playerScore > dealerScore) {
      return GAME_RESULT.WIN;
    }

    if (playerScore < dealerScore) {
      return GAME_RESULT.LOSE;
    }

    return GAME_RESULT.DRAW;
  }

  // deckManager, dealer, player를 다 인자로 받는데 이 메서드가 이 클래스 내부에 있을 필요가 있을까?
  // 그냥 property로 바꿔서 initialize를 constructor에서 할까...
  async #playOneRound(deckManager, dealer, player) {
    player.resetCards();
    dealer.resetCards();

    // Phase 1. 오프닝
    OutputView.printStartGame();

    // Phase 2. 최초 분배
    const playerCards = deckManager.drawMultiple(2);
    player.addCards(playerCards);
    OutputView.printPlayerReceiveCards(playerCards);

    const dealerCards = deckManager.drawMultiple(2);
    dealer.addCards(dealerCards);
    OutputView.printDealerReceiveCards(dealerCards);

    // Phase 3. 플레이어 동작
    while (player.checkCanDraw()) {
      const wantsToHit = await InputView.askHitOrStand();

      if (!wantsToHit) {
        break;
      }

      const newCard = deckManager.draw();
      player.addCard(newCard);
      OutputView.printPlayerReceiveCards([newCard]);
    }

    if (player.checkIsBust()) {
      OutputView.printPlayerBust();
      OutputView.printPlayerResult(GAME_RESULT.LOSE);
      return GAME_RESULT.LOSE;
    }

    OutputView.printSumOfPlayerCards(player.score);

    // Phase 4. 딜러 동작
    while (!dealer.checkIsBust()) {
      const wantsToHit = dealer.checkCanDraw(); // 딜러가 히트하였습니다 / 딜러가 스탠드하였습니다 띄우려면 ... 이게 최선인가?

      if (!wantsToHit) {
        OutputView.printDealerActionStand();
        break;
      }

      OutputView.printDealerActionHit();
      const newCard = deckManager.draw();
      dealer.addCard(newCard);
      OutputView.printDealerReceiveCards([newCard]);
    }

    if (dealer.checkIsBust()) {
      OutputView.printDealerBust();
      OutputView.printPlayerResult(GAME_RESULT.WIN);
      return GAME_RESULT.WIN;
    }

    // Phase 5. 엔딩
    OutputView.printSumOfDealerCards(dealer.score);

    const result = this.#calculateResult(player.score, dealer.score);

    OutputView.printPlayerResult(result);
    return result;
  }

  async run() {
    const dealer = new Dealer();
    const player = new Player();
    const deckManager = new DeckManager();

    while (this.#wantsToPlay) {
      const result = await this.#playOneRound(deckManager, dealer, player);

      // playOneRound 내에서 updateResult를 하는게 맞지 않나?
      // 이렇게 하면 print 시점과 점수 변경 시점이 다른데...
      // 그런데 단판 게임에서 여러판 게임으로 요구사항이 변경된 경우라면 이렇게 갱신하는 게 맞긴 함.
      player.updateResult(result);

      this.#wantsToPlay = await InputView.askContinueToPlay();
    }

    OutputView.printEndGame();

    OutputView.printFinalResult(
      player.winCount,
      player.drawCount,
      player.loseCount,
    );
  }
}

export { BlackjackController };
