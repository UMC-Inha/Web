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
        
        ### **1. TanStack Query 초기 세팅 방법**
        
        - **설치**:
            
            ```bash
            
            npm install @tanstack/react-query
            npm install @tanstack/react-query-devtools  # DevTools(Optional)
            
            ```
            
        - **초기 설정**:
            - React Query를 사용하려면 `QueryClient`와 `QueryClientProvider`를 설정해야 합니다.
            
            ```jsx
            jsx
            코드 복사
            import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
            
            const queryClient = new QueryClient();
            
            function App() {
              return (
                <QueryClientProvider client={queryClient}>
                  <YourApp />
                </QueryClientProvider>
              );
            }
            
            ```
            
    - Query-DevTools?
        - Query 캐싱 상태 확인.
        - Query 요청/갱신 기록 확인.
        
        등의 기능을 시각적으로 보여주는 추가적인 도구
        
    - useQuery
        
        데이터를 가져오는 훅입니다, 우리가 fetch나 axios로 데이터를 가져오면서 해주었던 여러가지 처리 뿐 아니라 캐싱 같은 것들도 전부 혼자 다 해줍니다.
        
    - useInfiniteQuery
        
        무한 스크롤같은 페이지네이션을 직접 만들어보면 추가적인 작업을 해줘야 하는데 대신 해줍니다
        
    - queryKey
        - **Query를 고유하게 식별하는 키**로, React Query의 핵심 기능 중 하나입니다.
        - 같은 `queryKey`를 가진 Query는 동일한 캐싱 데이터를 공유합니다.
        - 배열 형태로 사용하는 것이 권장됩니다:
            
            ```jsx
            jsx
            코드 복사
            useQuery(['todos'], fetchTodos);             // 단일 키
            useQuery(['todos', { userId: 1 }], fetchTodos); // 키 + 파라미터
            
            ```
            
        - 활용:
            - 조건에 따라 캐시를 공유하거나 분리.
            - `queryKey`를 기반으로 `invalidateQueries`를 호출하여 데이터 갱신.
- Pagination 🍠
    - Pagination은 무엇인가요?
        
        데이터를 보여주는 방식입니다,
        
        게시글을 보여줄 때도, 모든 게시글을 한 번에 줄 수 없으니, 페이지를 단위로 나눠 전달하는 방식입니다.
        
    - Pagination을 어떠한 방식으로 구현할 수 있을까요?
        
        무한스크롤을 할 수도 있고, 버튼으로 페이지를 이동시킬 수도 있습니다. 
        
    - Pagination의 장점과 단점에 대해 정리해주세요.
        
        사용자의 ux경험 향상 그리고, 너무 많은 데이터를 처리하면 로딩이 오래걸릴 수 있는데 이를 방지해줍니다.
        
        일단 개발자가 해야할 일이 늘어납니다. 구현 자체는 직접하든, react-query를 쓰든 상관 없지만 신경쓸 부분이 늘어납니다, 사용자가 페이지 이동을 1초에 수백 수천번씩 시도할 수도 있는 거고, skeleton ui도 넣을지 말지 등등 일이 늘어납니다.
        
- Infinite Scroll 🍠
    - Intersection Observer는 무엇인가요?
        
        스크롤 이벤트를 간편하게 만든 api입니다.
        
        과거에는 현재 브라우저의 스크롤 길이를 계산해와서 view port에 보여지는 화면이 맨 아래로 내려오면 추가 로드 하거나 등등 수작업을 해야했는데
        
        intersection observer api를 사용하면 특정 요소를 observe 하여 해당 요소가 화면에 들어왔을 때 flag가 on/off 되도록 해줍니다 
        
    - Infinite Scroll은 무엇일까요?
        
        페이지네이션의 방식으로 게시글 같은 데이터를 한번에 다 가져오는 게 아니라 화면에 담길 정도만 가져와서 스크롤을 내릴 때마다 추가로드해서 무한 스크롤이 되게 하는 겁니다. 
        
    - Inifinite Scroll은 어떻게 구현할까요?
        
        위에서 설명한 것 처럼, 직접 하드코딩 vs intersection observer 사용 크게 2가지로 나뉘는데
        
        이부분은 하드코딩 해보면 로직 자체는 심플하지만 매우 오래걸리고 귀찮습니다.
        
        보통 intersection observer를 씁니다.
        
    - Infinite Scroll의 장점과 단점에 대해 정리해주세요.
        
        생각해보면 데이터를 바꾸는 게 아니라, 스크롤 하면서 추가로 붙입니다. 구현이 더 오래걸립니다. 역으로 올라갈 때 데이터를 지우게도 하고 싶다면 더 많은 시간이 필요하고, 해보면 loading상태도 좀 더 생각해야 할 부분이 생깁니다.
        
        데이터가 서버와 클라이언트 사이에서 오고가며 보여지게 관리하는 부분이 어려워집니다.
        
        하지만 react-query를 쓰면 한 줄이면 됩니다.
        

# 🔥 미션 1.  Project에 useQuery 를 활용하기.

<aside>
💡

강의 영상을 의존하지 마시고, 본인이 직접 먼저 구현해본 후, 아래 영상을 진행해주세요.

아래 영상을 참고하여, **`Tanstack-Query` 의 `useQuery`, `useInfiniteQuery`**를 활용하여, 기존 코드를 변경해봅시다.

🔥 미션 1과 🔥 미션 2를 아래 영상을 보시며, 수행해주시면 됩니다.

- UMC 7th 중앙 Web 파트장 매튜/김용민 -

</aside>

- [x]  지금까지, **`custom-hook`**을 활용하여, 불러온 `get 요청`의 데이터들을 먼저 **`useQuery`** 를 활용한 데이터 호출로 변경해주세요.
    - [x]  now-playing 페이지
    - [x]  popular 페이지
    - [x]  up-coming 페이지
    - [x]  top-rated 페이지
    - [x]  내 정보를 불러오는 API
    - [x]  영화 상세 페이지
    - [x]  영화 상세 페이지 Credit
- [x]  단, **`queryKey`**를 명확하게 설정해주세요.
- [x]  **`useQuery`**의 반환 값을 활용하여, **`loading`**과 **`error`** 처리를 진행해주세요.
    - [x]  로딩 처리는 Skeleton UI를 활용해주세요.

### 🔥 미션 1. 제출 (useQuery)

- 깃허브 주소
- 실행 영상

# 🔥 미션 2.  Project에 useInfiniteQuery 를 활용하기.

[화면 기록 2024-09-30 오전 1.36.38.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/62b28844-27af-428a-abe2-e3d62287fcb9/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.36.38.mov)

- [x]  지금까지, 미션 1에서 **`useQuery`**를 활용하여, 불러온 `get 요청`의 데이터들을 먼저 **`useInfiniteQuery`** 를 활용한 데이터 호출로 변경해주세요.
    - [x]  now-playing 페이지
    - [x]  popular 페이지
    - [x]  up-coming 페이지
    - [x]  top-rated 페이지
- [x]  단, **`queryKey`**를 명확하게 설정해주세요.
- [x]  **`useQuery`**의 반환 값을 활용하여, **`loading`**과 **`error`** 처리를 진행해주세요.
    - [x]  로딩 처리는 `Skeleton UI`를 활용해주세요.
    - [x]  `Loading Spinner` 또한 활용해주세요.
    
    now-playing, popular, up-coming, top-rated 카테고리별 페이지와
    
    검색페이지까지, ui가 거의 똑같습니다.
    
    커스텀훅, useParam 을 통해 파일을 적절히 분리하여 하나의 컴포넌트로 묶었고
    
    무한스크롤을 적용한 api는 react-query를 쓰지 않고 하드코딩 했습니다.
    
    useInfiniteQuery도 좋지만, 공부가 중요하니까 직접 해보는 게 좋은 것 같습니다.
    

### 🔥 미션 2. 제출 (useInfiniteQuery)

- 깃허브 주소
    
    https://github.com/RyuDongHo/UmcWeb
    
- 실행 영상
    
    [20241117-1105-58.2773862.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/94c530e1-862e-45fd-b607-b4f389c1f16e/20241117-1105-58.2773862.mp4)
    

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

- [x]  위의 영상과 동일하게, **`Pagination`**을 구현해주세요.
- [x]  **`0 page`**는 데이터가 존재하지 않으므로, 사용자가 **`0 page`**를 가지 못하게, Button을 **`disabled`** 처리를 해주세요.
    - [x]  스타일링 또한, 같이 진행해주세요.
- [x]  단, **`queryKey`**를 명확하게 설정해주세요.

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
    
    https://github.com/RyuDongHo/UmcWeb
    
- 실행 영상
    
    [20241117-1125-03.9139235.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5c54f4d0-1ccc-49d8-9ed5-cf96d5a8b56c/20241117-1125-03.9139235.mp4)