const BLACKJACK_RULE = Object.freeze({
  BLACKJACK: 21, // XXX: not implemented yet
  BUST_MINIMUM_THRESHOLD: 22,
  DEALER_HIT_MAXIMUM_THRESHOLD: 16, // 16 이하일 때는 무조건 히트
  ACE_VALUE: 11,
  ACE_VALUE_WHEN_BUST: 1,
  FACE_CARD_VALUE: 10,
  NUMBER_CARD_VALUE: (numberString) => parseInt(numberString, 10),
});

const BLACKJACK_OPTION = Object.freeze({
  DECK_COUNT: 4,
});

export { BLACKJACK_OPTION, BLACKJACK_RULE };
