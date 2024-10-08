import { josa } from '@toss/hangul';

const CANDIDATE = Object.freeze({
  DEFAULT_PLAYER_NAME: '플레이어',
  DEALER_NAME: '딜러',
});

const OUTPUT_MESSAGE = Object.freeze({
  RECEIVE_CARD: ({ name, cardString }) =>
    `${josa(name, '이/가')} 받은 카드는 ${cardString}입니다.`,
  ACTION: ({ name, action }) => `${josa(name, '이/가')} ${action}하였습니다.`,
  BUST: (name) => `${josa(name, '이/가')} 버스트입니다.`,
  SUM_OF_CARDS: ({ name, sum }) => `${name} 카드의 합은 ${sum}입니다.`,
  START_GAME: '블랙잭 게임을 시작합니다.',
  PLAYER_WIN: 'WINNER WINNER CHICKEN DINNER 🍗',
  PLAYER_DRAW: '무승부입니다.',
  PLAYER_LOSE: (name) => `${josa(name, '이/가')} 패배하였습니다 😭`,
  END_GAME: '블랙잭 게임을 종료합니다.',
  FINAL_RESULT: ({ totalGameCount, winCount, drawCount, loseCount }) =>
    `총 ${totalGameCount}판하였으며, ${winCount}승 ${drawCount}무 ${loseCount}패입니다.`,
});

export { CANDIDATE, OUTPUT_MESSAGE };
