# 📝 학습 목표

---

1. **`Tanstack Query` 의** `useQuery`**에 대해 학습합니다.**
2. **`Tanstack Query`**의 **`useInfiniteQuery`**에 대해 학습합니다.
3. **`InfiniteScroll`**에 대해 학습합니다.
4. **`Pagination`**에 대해 학습합니다.

# ⚠️  스터디 진행 방법

---

1. 스터디를 진행하기 전, 워크북 내용들을 모두 채우고 스터디에서 서로 모르는 내용들을 스터디원과 함께 공유해 주세요.
2. 실습과 미션은 워크북 내용들을 모두 완료한 후, 스터디 전에 진행해 오세요!
    - 1주 차 스터디 이전에 1주 차 워크북을 완성한 후 스터디를 진행해 주세요.
3. 스터디 시간에는 각자 해 온 미션들을 공유하고, 아래의 과정을 진행합니다.
    1. 스터디원과 함께 코드 리뷰 진행.
    2. 코드 리뷰 이후, 본인의 코드의 문제가 있는 경우 리팩토링 진행.
    3. 팀원들과, 조금 더 코드를 깔끔하게 작성할 수 있는 개선점이 있을지 고민 후, 리팩토링 진행.
    4. 각자 미션을 진행하면서 해결하지 못한 이슈를 공유 후, 해당 이슈를 도움받아 해결.
4. 매주 주어진 미션을 성실하게 제출합니다.
5. 🍠 이모지가 붙어있는 곳은, 직접 여러분들이 채워 넣으셔야 하는 부분입니다. 꼭 Google을 통한 검색을 하시고, VSCode를 활용하여, 실행 결과를 눈으로 보시면서 정리해 주세요!

# 📸 잠깐 ! 스터디 인증샷은 찍으셨나요?📸

---

* 스터디리더께서 대표로 매 주차마다 한 장 남겨주시면 좋겠습니다!🙆💗
 (사진을 저장해서 이미지 임베드를 하셔도 좋고, 복사+붙여넣기해서 넣어주셔도 좋습니다!)

[]()

# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

### 키워드 정리 🍠

- Tanstack-Query 🍠
    - Tanstack-Query 초기 세팅 방법
        
        Tanstack Query를 사용하려면, 프로젝트에 `@tanstack/react-query`를 설치하고 `QueryClient`와 `QueryClientProvider`를 설정합니다. `QueryClientProvider`로 애플리케이션을 감싸면 Tanstack Query 기능을 사용할 수 있습니다.
        
    - Query-DevTools?
        
        Tanstack Query에서 제공하는 개발 도구로, 쿼리 상태와 데이터를 시각적으로 확인하고 디버깅하는 데 유용합니다. `@tanstack/react-query-devtools`를 설치하고 `ReactQueryDevtools` 컴포넌트를 추가해 사용합니다.
        
    - useQuery
        
        서버에서 데이터를 가져와 React 컴포넌트에 사용할 때 `useQuery` 훅을 사용합니다. 데이터와 로딩 상태를 관리해주는 훅으로, `queryKey`와 `fetching function`을 인자로 받아 데이터를 불러옵니다.
        
    - useInfiniteQuery
        
        페이지네이션 없이 스크롤을 통해 데이터를 계속 불러오는 경우에 사용하는 훅입니다. 스크롤이 바닥에 도달할 때마다 `fetchNextPage` 함수로 다음 데이터를 가져옵니다.
        
    - queryKey
        
        데이터를 캐싱하고 불러올 때 사용하는 고유 키입니다. 캐시된 데이터를 효율적으로 관리할 수 있도록 쿼리를 식별합니다.
        
- Pagination 🍠
    - Pagination은 무엇인가요?
        
        서버로부터 데이터를 일정 개수씩 나눠서 가져오는 방식입니다. 페이지 버튼을 통해 이전 페이지나 다음 페이지로 이동할 수 있어 한 번에 많은 데이터를 로드하지 않아도 됩니다.
        
    - Pagination을 어떠한 방식으로 구현할 수 있을까요?
        
        클라이언트 측 페이지네이션과 서버 측 페이지네이션으로 나눌 수 있습니다. 클라이언트 측은 모든 데이터를 가져와 화면에서 나눠 보여주는 방식이고, 서버 측은 페이지 번호나 오프셋 값을 서버에 전달해 특정 페이지 데이터만 가져옵니다.
        
    - Pagination의 장점과 단점에 대해 정리해주세요.
        - **장점**: 한 번에 불러오는 데이터가 적어져 성능이 개선되며, 사용자가 필요한 데이터에 빠르게 접근할 수 있습니다.
        - **단점**: 페이지 이동 시마다 서버 요청이 발생해 로드 시간이 필요하며, 사용자 경험이 다소 단절될 수 있습니다.
- Infinite Scroll 🍠
    - Intersection Observer는 무엇인가요?
        
        DOM 요소의 가시성을 추적하여, 요소가 특정 영역에 진입하거나 벗어날 때 이벤트를 발생시키는 API입니다. 주로 무한 스크롤에서 다음 데이터를 불러올 시점 판단에 사용됩니다.
        
    - Infinite Scroll은 무엇일까요?
        
        스크롤을 통해 끝까지 이동하면 자동으로 추가 데이터를 불러오는 방식입니다. 데이터가 계속 추가되므로 페이지 이동이 없고, 긴 목록을 자연스럽게 탐색할 수 있습니다.
        
    - Inifinite Scroll은 어떻게 구현할까요?
        
        Intersection Observer를 사용해 특정 요소가 뷰포트에 들어오면 서버에 요청을 보내 데이터를 추가로 가져오는 방식으로 구현할 수 있습니다.
        
    - Infinite Scroll의 장점과 단점에 대해 정리해주세요.
        - **장점**: 사용자 경험이 매끄러워서 스크롤하면서 끊김 없이 콘텐츠를 탐색할 수 있습니다.
        - **단점**: 특정 위치로 돌아가거나, 페이지를 나누어 접근하기 어렵고, 많은 데이터를 불러오면 성능에 영향을 줄 수 있습니다.

# 🔥 미션 1.  Project에 useQuery 를 활용하기.

<aside>
💡

강의 영상을 의존하지 마시고, 본인이 직접 먼저 구현해본 후, 아래 영상을 진행해주세요.

아래 영상을 참고하여, **`Tanstack-Query` 의 `useQuery`, `useInfiniteQuery`**를 활용하여, 기존 코드를 변경해봅시다.

🔥 미션 1과 🔥 미션 2를 아래 영상을 보시며, 수행해주시면 됩니다.

- UMC 7th 중앙 Web 파트장 매튜/김용민 -

</aside>

- [ ]  지금까지, **`custom-hook`**을 활용하여, 불러온 `get 요청`의 데이터들을 먼저 **`useQuery`** 를 활용한 데이터 호출로 변경해주세요.
    - [ ]  now-playing 페이지
    - [ ]  popular 페이지
    - [ ]  up-coming 페이지
    - [ ]  top-rated 페이지
    - [ ]  내 정보를 불러오는 API
    - [ ]  영화 상세 페이지
    - [ ]  영화 상세 페이지 Credit
- [ ]  단, **`queryKey`**를 명확하게 설정해주세요.
- [ ]  **`useQuery`**의 반환 값을 활용하여, **`loading`**과 **`error`** 처리를 진행해주세요.
    - [ ]  로딩 처리는 Skeleton UI를 활용해주세요.

### 🔥 미션 1. 제출 (useQuery)

- 깃허브 주소
- 실행 영상

# 🔥 미션 2.  Project에 useInfiniteQuery 를 활용하기.

[화면 기록 2024-09-30 오전 1.36.38.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/62b28844-27af-428a-abe2-e3d62287fcb9/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.36.38.mov)

- [ ]  지금까지, 미션 1에서 **`useQuery`**를 활용하여, 불러온 `get 요청`의 데이터들을 먼저 **`useInfiniteQuery`** 를 활용한 데이터 호출로 변경해주세요.
    - [ ]  now-playing 페이지
    - [ ]  popular 페이지
    - [ ]  up-coming 페이지
    - [ ]  top-rated 페이지
- [ ]  단, **`queryKey`**를 명확하게 설정해주세요.
- [ ]  **`useQuery`**의 반환 값을 활용하여, **`loading`**과 **`error`** 처리를 진행해주세요.
    - [ ]  로딩 처리는 `Skeleton UI`를 활용해주세요.
    - [ ]  `Loading Spinner` 또한 활용해주세요.

### 🔥 미션 2. 제출 (useInfiniteQuery)

- 깃허브 주소
- 실행 영상

### ⚠️ 혼자 반드시 먼저, 해보신 후 아래 영상을 활용해주세요! ⚠️

https://www.youtube.com/watch?v=77TLFKauKTY

https://www.youtube.com/watch?v=77TLFKauKTY

# 🔥 미션 3. Pagination 기능 구현.

<aside>
💡

아래 영상을 참고하여, **`Tanstack-Query` 의 `useQuery`**를 활용하여 **`Pagination`**을 구현해주세요!

**- UMC 7th 중앙 Web 파트장 매튜/김용민 -**

</aside>

[화면 기록 2024-09-30 오전 2.07.09.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e259bf30-211a-4bae-94ce-cf56c973ffa3/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.07.09.mov)

https://tanstack.com/query/v4/docs/framework/react/guides/paginated-queries

위 공식 문서를 참고해서, **`Pagination`**을 구현해주세요.

- [ ]  위의 영상과 동일하게, **`Pagination`**을 구현해주세요.
- [ ]  **`0 page`**는 데이터가 존재하지 않으므로, 사용자가 **`0 page`**를 가지 못하게, Button을 **`disabled`** 처리를 해주세요.
    - [ ]  스타일링 또한, 같이 진행해주세요.
- [ ]  단, **`queryKey`**를 명확하게 설정해주세요.

<aside>
🍠

혹시라도, **`Page 기반 Pagination`**에 관심이 있는 경우, 위의 영상을 참고해주세요!
현재, 저희 TMDB 데이터에는 적용되지 않음을 유의해주세요!

- UMC 7th 중앙 Web 파트장 매튜/김용민 -

</aside>

https://www.youtube.com/watch?v=HlNwcVYZpwk

https://www.youtube.com/watch?v=HlNwcVYZpwk

### 🔥 미션 3. 제출 (Pagination)

- 깃허브 주소
- 실행 영상

# ⚡ 트러블 슈팅

---

<aside>
💡 실습하면서 생긴 문제들 또는 어려웠던 내용에 대해서, **이슈 - 문제 - 해결** 순서로 작성해주세요.

</aside>

- ⚡이슈 No.1 (예시, 서식만 복사하시고 지워주세요.)
    
    **`이슈`**
    
    👉 앱 실행 중에 노래 다음 버튼을 누르니까 앱이 종료되었다.
    
    **`문제`**
    
    👉 노래클래스의 데이터리스트의 Size를 넘어서 NullPointException이 발생하여 앱이 종료된 것이었다. 
    
    **`해결`**
    
    👉  노래 다음 버튼을 눌렀을 때 데이터리스트의 Size를 검사해 Size보다 넘어가려고 하면 다음으로 넘어가는 메서드를 실행시키지 않고, 첫 노래로 돌아가게끔 해결
    
    **`참고레퍼런스`**
    
    - 링크

# 📢 학습 후기

---

- 이번 주차 워크북을 해결해보면서 어땠는지 회고해봅시다.
- 핵심 키워드에 대해 완벽하게 이해했는지? 혹시 이해가 안 되는 부분은 뭐였는지?

<aside>
📢

</aside>

# 🤔 참고 자료

---

Copyright © 2024 Kim Yongmin (Matthew) All rights reserved.