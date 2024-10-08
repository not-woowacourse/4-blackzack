import { BLACKJACK_RULE } from '@/lib/constants/blackjack-rule.constant';
import { CANDIDATE } from '@/views/output.view.constant';

import { Participant } from './participant.abstract-class';

class Dealer extends Participant {
  constructor() {
    super(CANDIDATE.DEALER_NAME);
  }

  checkCanDraw() {
    return this.score <= BLACKJACK_RULE.DEALER_HIT_MAXIMUM_THRESHOLD; // player.checkCanDraw랑 정녕 같은 역할을 한다고 할 수 있을까?
  }
}

export { Dealer };
