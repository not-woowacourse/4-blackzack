import { BLACKJACK_OPTION } from '@/lib/constants/blackjack-rule.constant';
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
    OutputView.printReceiveCards(player.name, playerCards);

    const dealerCards = deckManager.drawMultiple(2);
    dealer.addCards(dealerCards);
    OutputView.printReceiveCards(dealer.name, dealerCards);

    // Phase 3. 플레이어 동작
    while (player.checkCanDraw()) {
      const wantsToHit = await InputView.askHitOrStand();

      if (!wantsToHit) {
        break;
      }

      const newCard = deckManager.draw();
      player.addCards([newCard]);
      OutputView.printReceiveCards(player.name, [newCard]);
    }

    if (player.checkIsBust()) {
      OutputView.printBust(player.name);
      OutputView.printPlayerResult({
        name: player.name,
        result: GAME_RESULT.LOSE,
      });
      return GAME_RESULT.LOSE;
    }

    OutputView.printSumOfCards({ name: player.name, sum: player.score });

    // Phase 4. 딜러 동작
    while (!dealer.checkIsBust()) {
      const wantsToHit = dealer.checkCanDraw(); // 딜러가 히트하였습니다 / 딜러가 스탠드하였습니다 띄우려면 ... 이게 최선인가?

      if (!wantsToHit) {
        OutputView.printActionStand(dealer.name);
        break;
      }

      OutputView.printActionHit(dealer.name);
      const newCard = deckManager.draw();
      dealer.addCards([newCard]);
      OutputView.printReceiveCards(dealer.name, [newCard]);
    }

    if (dealer.checkIsBust()) {
      OutputView.printBust(dealer.name);
      OutputView.printPlayerResult({
        name: player.name,
        result: GAME_RESULT.WIN,
      });
      return GAME_RESULT.WIN;
    }

    // Phase 5. 엔딩
    OutputView.printSumOfCards({ name: dealer.name, sum: dealer.score });

    const result = this.#calculateResult(player.score, dealer.score);

    OutputView.printPlayerResult({ name: player.name, result });
    return result;
  }

  async run() {
    const dealer = new Dealer();
    const deckManager = new DeckManager(BLACKJACK_OPTION.DECK_COUNT); // 게임 옵션을 여기서 상수로 넣는게 맞나? 뭔가 DeckManager 자체를 의존성으로 받아야 할 거 같은데 아닌가?

    const playerName = await InputView.askPlayerName();
    const player = new Player(playerName);

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
