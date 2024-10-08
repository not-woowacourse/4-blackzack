import { DeckManager } from '@/models/deck/deck-manager.model';
import { Dealer } from '@/models/participant/dealer.model';
import { Player } from '@/models/participant/player.model';
import { InputView } from '@/views/input.view';
import { OutputView } from '@/views/output.view';

class BlackzackController {
  #wantsToPlay;

  constructor() {
    this.#wantsToPlay = true;
  }

  #calculateResult(playerScore, dealerScore) {
    if (playerScore > dealerScore) {
      return 'win';
    }

    if (playerScore < dealerScore) {
      return 'lose';
    }

    return 'draw';
  }

  async #playOneRound(deckManager, dealer, player) {
    player.resetCards();
    dealer.resetCards();

    OutputView.printStartGame();

    const playerCards = deckManager.drawMultiple(2);
    player.addCards(playerCards);
    OutputView.printPlayerReceiveCards(playerCards);

    const dealerCards = deckManager.drawMultiple(2);
    dealer.addCards(dealerCards);
    OutputView.printDealerReceiveCards(dealerCards);

    while (player.checkCanDraw()) {
      const wantsToDraw = await InputView.askWantsToDraw();

      if (!wantsToDraw) {
        break;
      }

      const newCard = deckManager.draw();
      player.addCard(newCard);
      OutputView.printPlayerReceiveCards([newCard]);
    }

    if (player.checkIsBust()) {
      OutputView.printPlayerBust();
      OutputView.printPlayerResult('lose');
      return 'lose';
    }

    OutputView.printSumOfPlayerCards(player.score);

    while (!dealer.checkIsBust()) {
      const wantsToDraw = dealer.checkCanDraw();

      if (!wantsToDraw) {
        OutputView.printDealerAction('스탠드');
        break;
      }

      OutputView.printDealerAction('히트');
      const newCard = deckManager.draw();
      dealer.addCard(newCard);
      OutputView.printDealerReceiveCards([newCard]);
    }

    if (dealer.checkIsBust()) {
      OutputView.printDealerBust();
      OutputView.printPlayerResult('win');
      return 'win';
    }

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
      player.updateResult(result);

      this.#wantsToPlay = await InputView.askWantsToPlay();
    }

    OutputView.printEndGame();

    OutputView.printFinalResult(
      player.winCount,
      player.drawCount,
      player.loseCount,
    );
  }
}

export { BlackzackController };
