import { Dealer } from '../models/participant/dealer.model.js';
import { Player } from '../models/participant/player.model.js';
import { OutputView } from '../views/output.view.js';
import { InputView } from '../views/input.view.js';
import { DeckManager } from '../models/card/deckmanager.model.js';

class BlackjackController {
  #wantstoplay;
  dealer;
  player;
  deckmanager;

  constructor() {
    this.#wantstoplay = true;
    this.dealer = new Dealer();
    this.player = new Player();
    this.deckmanager = new DeckManager();
  }
  /*
    #calculateScore(player, dealer){
        if (player > dealer) return 'win'; 
        else if (player == dealer) return 'draw'; 
        else return 'lose'; 
    }*/

  // 1 game cycle
  async #playeOneRound() {
    this.player.resetCard();
    this.dealer.resetCard();

    // phase 1
    OutputView.GameStart();

    // phase 2
    let card1 = this.deckmanager.drawCard();
    let card2 = this.deckmanager.drawCard();
    this.player.addCard(card1);
    this.player.addCard(card2);
    OutputView.InitializeCard('플레이어', card1, card2);

    let card3 = this.deckmanager.drawCard();
    let card4 = this.deckmanager.drawCard();
    this.dealer.addCard(card3);
    this.dealer.addCard(card4);
    OutputView.InitializeCard('딜러', card3, card4);

    // phase 3
    while (await InputView.askMoreAction('draw')) {
      const newCard = this.deckmanager.drawCard();
      this.player.addCard(newCard);

      if (this.player.checkIsBust()) {
        OutputView.Action('플레이어', 'bust', newCard, this.player.score); //bust
        OutputView.loseGame();
        return 'lose';
      } else {
        OutputView.Action('플레이어', 'hit', newCard, this.player.score); //hit
      }
    }
    OutputView.Action('플레이어', 'stand', false, this.player.score); //stand

    //phase 4
    while (true) {
      if (this.dealer.score <= 16) {
        // hit
        const newCard = this.deckmanager.drawCard();
        this.dealer.addCard(newCard);

        if (this.dealer.checkIsBust()) {
          OutputView.Action('딜러', 'bust', newCard, this.dealer.score);
          OutputView.winGame();
          return 'win';
        } else {
          OutputView.Action('딜러', 'hit', newCard, this.dealer.score);
        }
      } else {
        // stand
        OutputView.Action('딜러', 'stand', false, this.dealer.score);
        break;
      }
    }

    //phase 5
    if (this.player.score > this.dealer.score) {
      OutputView.winGame();
      return 'win';
    } else if (this.player.score < this.dealer.score) {
      OutputView.loseGame();
      return 'lose';
    } else {
      OutputView.drawGame();
      return 'draw';
    }
  }

  async run() {
    while (this.#wantstoplay) {
      const result = await this.#playeOneRound();

      this.player.recordScore(result);

      this.#wantstoplay = await InputView.askMoreAction('moregame');
      OutputView.GameEnd(
        this.player.winCount,
        this.player.drawCount,
        this.player.loseCount,
      );
    }
  }
}

export { BlackjackController };
