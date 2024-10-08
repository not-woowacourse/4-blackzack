import { PLAYING_CARD_SUIT } from '@/lib/constants/playing-card.constant';

const KOREAN_PLAYING_CARD_SUIT = Object.freeze({
  SPADE: '스페이드',
  CLUB: '클로버',
  HEART: '하트',
  DIAMOND: '다이아몬드',
});

const convertSuitToKoreanString = (suit) => {
  switch (suit) {
    case PLAYING_CARD_SUIT.SPADE:
      return KOREAN_PLAYING_CARD_SUIT.SPADE;
    case PLAYING_CARD_SUIT.CLUB:
      return KOREAN_PLAYING_CARD_SUIT.CLUB;
    case PLAYING_CARD_SUIT.HEART:
      return KOREAN_PLAYING_CARD_SUIT.HEART;
    case PLAYING_CARD_SUIT.DIAMOND:
      return KOREAN_PLAYING_CARD_SUIT.DIAMOND;
    default:
      throw new Error('지원하지 않는 문양입니다.');
  }
};

export { convertSuitToKoreanString, KOREAN_PLAYING_CARD_SUIT };
