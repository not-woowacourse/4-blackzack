import { USER_INPUT } from '@/lib/constants/user-input.constant';

const ERROR_MESSAGE = Object.freeze({
  INVALID_YES_OR_NO: `잘못된 입력입니다. ${USER_INPUT.YES} 또는 ${USER_INPUT.NO}를 입력해주세요.`,
});

export { ERROR_MESSAGE };
