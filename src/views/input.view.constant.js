import { USER_INPUT } from '@/lib/constants/user-input.constant';

const INPUT_MESSAGE = Object.freeze({
  DRAW_CARD: `카드를 더 받으시겠습니까? (${USER_INPUT.YES}/${USER_INPUT.NO}) : `,
  CONTINUE_GAME: `게임을 계속하시겠습니까? (${USER_INPUT.YES}/${USER_INPUT.NO}) : `,
});

export { INPUT_MESSAGE };
