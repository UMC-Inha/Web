- border vs outline의 차이점 🍠
    
    border는 element에서 공간 차지, outline은 element에서 공간을 차지하지 않음

relative / absolute 🍠
    relative 실습
    -> relatvie실습.html 파일 첨부
    absolute 실습
    -> absolute실습.html 파일 첨부

정렬 방법
    키워드 정리 🍠

    - text-align
        
        텍스트 정렬 방향 의미
        
        - `left`: 왼쪽 정렬
        - `right`: 오른쪽 정렬
        - `center`: 중앙 정렬
        - `justify`: 양쪽 정렬
    - margin
        
        border와 이웃하는 element 사이의 간격인 margin 영역 크기 설정
        
        - `margin-top`
        - `margin-right`
        - `margin-bottom`
        - `margin-left`
    - flex
        
        display 속성 중 하나로 parent element 크기에 맞춰 child element가 일정한 비율을 유지하며 정렬
        
        - `display : flex` **:** *flex 레이아웃을 적용*
        - `flex-direction` : 내부 요소들의 정렬방향 설정
            - row : 가로방향 정렬
            - column : 세로 방향 정렬
            - row-reverse : 가로방향으로 반대부터 정렬
            - column-reverse : 세로방향으로 반대부터 정렬
    - translate
        
        element를 이동 시킬 때 사용
        
        transform : translate (x축기준 이동시킬 값 , y축 기준 이동 시킬 값)
        
        형식으로 사용
        
    - grid
        
        2차원으로 수평 수직을 동시에 영역을 나눌 수 있음
        
        - `grid-template-columns` : grid 아이템들의 가로열 크기를 지정
        - `grid-template-rows` : grid 아이템들의 세로열 크기를 지정


 반응형 background 🍠
    - background-image
        
        태그와 상관없이 이미지 삽입 가능
        
    - background-repeat
        
        배경 이미지를 어떻게 반복할 지 결정,
        
        이미지가 tag 사이즈보다 작은 경우 repeat됨
        
    - background-position
        
        배경 이미지의 위치 설정
        
    - background-size
        
        배경 이미지의 크기 설정
        
    - 축약형
        
        background : color image repeat position / size;

transform 🍠
    -아래 키워드를 실습한 사진과 코드를 남겨주세요!
        ->transform학습.html 파일 첨부

transition 🍠

        - transition-property
            트랜지션을 줄 속성 선택 ex) color, background-color, width…
        
        - transition-duration
            트랜지션에 걸리는 시간 설정
            - transition-timing-function
    
        -트랜지션 효과 변화 흐름 설정     
            value로는 linear,ease, ease-in, ease-out, ease-in-out, …
        
        - transition-delay
            트랜지션까지 대기하는 시간 설정

        - transition-behavior
            
            normal과 allow-discrete 속성이 존재, allow-discrete 사용 시 불연속 전환을 가능하게 하는 요소

    실습  🍠

        transition 키워드를 학습한 후, 해당 키워드와, transform에서 배운 특정 키워드를 활용하여, 아래와 같은 영상과 비슷하게 만들어주세요! (똑같을 필요는 없고, 기능만 같으면 됩니다.)
        단, transition 축약형을 사용해주세요!

        ->transition실습.html 파일 첨부

- animation 🍠
    
    - animation-name
        
        애니메이션 이름 설정
        
    - animation-duration
        
        애니메이션을 한번 재생하는데 걸리는 시간
        
    - animation-delay
        
        애니메이션을 시작하는데 걸리는 대기 시간
        
    - animation-direction
        
        애니메이션의 재생 방향
        
        - **`normal`** : 애니메이션 순방향 재생
        - **`alternate`** : 순방향으로 시작해 역방향과 순방향 번갈아 재생, 홀수 번째 순방향 짝수번째 역방향
        - **`reverse`**: 역방향 재생
        - **`alternate-reverse`**: 역방향으로 시작해 순방향과 역방향 번갈아 재생, 홀수 번째 역방향 짝수번째 순방향
    - animation-iteration-count
        
        애니메이션 재생 횟수
        
        - **`infinite`** : 무한반복
    - animation-play-state
        
        애니메이션의 재생 여부
        
        - **`running`  :** 애니메이션을 재생
        - **`paused` :** 애니메이션을 정지
    - animation-timing-function
        
        애니메이션의 키프레임 사이의 재생 속도 조절
        
    - animation-fill-mode
        
        애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정
        
    - @keyframes
        
        애니메이션의 중간 상태를 정의해줄 수 있음
        
        0%와 100% 사이에 여러 중간값(%)을 설정해 프레임 작성 가능
        
    - 축약형
        
        animation: animation-name animation-duration animation-delay animation-iteration-count animation-timing-function animation-direction fill-mode play-state;

    실습  🍠

        animation 키워드를 학습한 후, 아래와 비슷한 영상을 만들어주세요!
        단, animation 축약형을 사용해주세요!

        ->animation실습.html 파일 첨부

