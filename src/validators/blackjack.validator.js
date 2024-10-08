import { ERROR_MESSAGE } from '@/lib/constants/error-message.constant';
import { USER_INPUT } from '@/lib/constants/user-input.constant';

import { ValidationError } from './validation-error';

class BlackjackValidator {
  // can i hide this method?
  static isValidYesOrNo(input) {
    return input === USER_INPUT.YES || input === USER_INPUT.NO;
  }

  static validateYesOrNo(input) {
    if (!this.isValidYesOrNo(input)) {
      throw new ValidationError(ERROR_MESSAGE.INVALID_YES_OR_NO);
    }
  }
}

export { BlackjackValidator };
