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
        
        ```cpp
        import {
          QueryClient,
          QueryClientProvider,
          useQuery,
        } from '@tanstack/react-query'
        
        const queryClient = new QueryClient()
        
        export default function App() {
          return (
            <QueryClientProvider client={queryClient}>
              <Example />
            </QueryClientProvider>
          )
        }
        ```
        
        queryClientProvider로 react-query 사용하는곳에 감싸야 한다.
        
    - Query-DevTools?
        
        ```cpp
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        ```
        
        해당 컴포넌트를 사용하면 하단에 react-query icon이 생기고 현재 state 를 알 수 있다.
        
    - useQuery
        
        ```cpp
        function Example() {
          const { isPending, error, data } = useQuery({
            queryKey: ['repoData'],
            queryFn: () =>
              fetch('https://api.github.com/repos/TanStack/query').then((res) =>
                res.json(),
              ),
          })
        
          if (isPending) return 'Loading...'
        
          if (error) return 'An error has occurred: ' + error.message
        
          return (
            <div>
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <strong>👀 {data.subscribers_count}</strong>{' '}
              <strong>✨ {data.stargazers_count}</strong>{' '}
              <strong>🍴 {data.forks_count}</strong>
            </div>
          )
        }
        ```
        
        queryKey에 primary key값을 넣고, queryFn에 실행시킬 콜백 함수를 넣으면 된다.
        
        return 값으로 server 로딩 상태를 관리할 수 있다.
        
    - useInfiniteQuery
        
        ```cpp
        const {
          fetchNextPage,
          fetchPreviousPage,
          hasNextPage,
          hasPreviousPage,
          isFetchingNextPage,
          isFetchingPreviousPage,
          ...result
        } = useInfiniteQuery({
          queryKey,
          queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
          ...options,
          getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
          getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
        })
        ```
        
        fetchNext_page, fetchPreviousPage로 가져온다. 
        
        getNextPageParam의 lastPage는 이전에 불러온 data, allPages는 지금까지 불러온 데이터들이다.
        
    - queryKey
        
        데이터를 페칭하는 메소드
        
- Pagination 🍠
    - Pagination은 무엇인가요?
        
        페이지 별로 데이터를 fetching. api query값에 page값을 넣어 페이지 수를 제한하여 가져온다.
        
    - Pagination을 어떠한 방식으로 구현할 수 있을까요?
        
        react-query의 queryKey의 data를 이용해서 구현할 수 있다.
        
        api query string에 page값을 넣어 데이터 순서대로 fetching
        
    - Pagination의 장점과 단점에 대해 정리해주세요.
- Infinite Scroll 🍠
    - Intersection Observer는 무엇인가요?
        
        ref로 지정된 component가 유저 시야에 있는지 확인
        
    - Infinite Scroll은 무엇일까요?
        
        무한스크롤로, 추가적인 action없이 내리기만으로 data를 fetching하여 사용자에게 자연스럽게 data를 보여줄 수 있다.
        
    - Inifinite Scroll은 어떻게 구현할까요?
        
        ref를 이용하여 마지막 component를 지정하고, 만약 intersection Observer로 유저에 시야에 들어오면 pagination으로 data를 fetching한다.
        
    - Infinite Scroll의 장점과 단점에 대해 정리해주세요.