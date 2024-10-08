# 구현과제 4. Blackzack

> 이 과제는 [우아한테크코스 웹 프론트엔드 프리코스 미션 - 숫자 야구](https://github.com/woowacourse-precourse/javascript-baseball-6), [우아한테크코스 백엔드 미션 - 블랙잭](https://github.com/woowacourse/java-blackjack)을 모티브로 제작되었습니다.

> 해당 구현과제의 문제는 [여기](https://github.com/not-woowacourse/4-blackzack)에서 볼 수 있어요.

# 기술 스택

- Vanila JavaScript
- Jest
- es-toolkit
- @toss/hangul (`josa` 함수를 사용하기 위해서)
- prettier, eslint, 플러그인들 ... (`package.json`을 참고해주세요!)

# 구현한 기능

과제로 주어진 구현사항을 모두 구현하였고, 추가 구현한 기능은 다음과 같습니다.

- Ace의 가치를 1과 11 중 유리한 쪽으로 계산하도록 하였다.
- 게임 시작 이전에 플레이어 이름을 받도록 하였다.
- 잘못된 사용자 입력에 대하여 `ValidationError`를 `throw`하도록 하였다.

_딜러 카드 비공개_, _블랙잭_, _베팅_ 까지 구현하려 하였으나 시간 관계상 구현하지 못하였네요 ... (아쉽) (추후 구현해놓겠습니다 ㅎㅎ)

# 내 코드에서 강조할 부분

MVC 패턴을 처음으로 사용해봤습니다.

- 모델과 뷰는 대충 알 거 같은데, 컨트롤러는 사실 아직도 잘 모르겠습니다. 현재 코드에서는 뭔가 게임 실행 로직을 다 넣은 경향이 있네요 ...

상수화를 진행하였습니다.

- 지엽적으로(e.g., 단일 파일 내)만 사용되는 상수의 경우 굳이 전역 단위의 폴더에 위치시키지 않고 **colocate**하려고 노력했습니다.

Validator 클래스를 제작하였습니다.

`deepFreeze` 함수를 만들어보았습니다. (es-toolkit에 없어서)

# 내 코드에서 부족한 부분 (+ 궁금한 점)

Model 내에서 `InputView`, `OutputView`를 사용해도 될지에 대하여 의문이 있습니다.

- 현재 `DeckManager`로부터 카드를 뽑는 행위 / `Player`에 카드를 추가하는 행위 / `OutputView`를 통해 `카드를 받았다`라는 메세지를 띄우는 행위 모두 컨트롤러에서 별도로 실행하고 있는데, 이렇게 짜는게 맞는지 모르겠네요.
