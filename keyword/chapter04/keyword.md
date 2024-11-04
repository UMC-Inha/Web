# 📝 학습 목표

---

1. **`useNavigate`** Hook에 대해 학습합니다.
2. **`useLocation`** Hook에 대해 학습합니다.
3. **`useParams`** Hook에 대해 학습합니다.
4. **`custom-hook`**을 활용하여, 데이터 통신을 효율적으로 관리하는 방법에 대해 알아봅니다.

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

- `useEffect`  🍠
    - **정의**: `useEffect`는 리액트의 함수형 컴포넌트에서 사이드 이펙트(외부 시스템과의 상호작용)를 수행할 때 사용하는 훅입니다.
    - **용도**: 데이터 fetch, DOM 조작, 타이머 설정 등 컴포넌트가 렌더링될 때나 특정 상태나 props가 변경될 때 실행해야 하는 작업들을 설정할 수 있습니다.
    - mission1에서의 사용 예시
        
        ```jsx
        useFetchMovies.js
        
        //커스텀 훅을 사용한 리팩토링
        import { useState, useEffect } from "react";
        import axios from "axios";
        
        const APIurl = {
            "now-playing": "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
            "popular": "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
            "top-rated": "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
            "up-coming": "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1"
        };
        
        // 매개변수로 category를 받아, 
        // 이 값을 기반으로 영화 데이터를 가져옴
        export const useFetchMovies = (category) => {
            const [movies, setMovies] = useState([]);
            const [error, setError] = useState(null);
        
            useEffect(() => {
                const getMovies = async () => {
                    // try, catch문을 활용한 에러 처리
                    try {
                        const response = await axios.get(APIurl[category], {
                            headers: {
                                Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
                            }
                        });
                        setMovies(response.data.results);
                    } catch (err) {
                        setError("Failed to fetch movies. Please try again later.");
                        console.error(err);
                    }
                };
        
                if (category) {
                    getMovies();
                }
            }, [category]);
        
            return { movies, error };
        };
        
        ```
        
        이 코드에서 `useEffect`는 `category` 값이 변경될 때마다 영화 데이터를 가져오기 위한 비동기 작업을 수행하도록 설정되었습니다.
        
        ### 1. 의존성 배열 설정
        
        `useEffect`의 두 번째 매개변수로 `[category]`를 전달하여, `category` 값이 변경될 때마다 이 `useEffect` 훅이 실행됩니다. 이는 `category`가 업데이트되면 새로운 영화 데이터를 불러와야 하기 때문입니다.
        
        ```jsx
        useEffect(() => { /* 실행될 함수 */ }, [category]);
        ```
        
        ### 2. 비동기 함수 정의 및 실행
        
        `useEffect` 내부에서는 `getMovies`라는 비동기 함수를 정의하고 이를 호출합니다. 이 함수는 `category`에 맞는 영화 데이터를 `axios`를 통해 가져옵니다.
        
        1. **영화 데이터 요청**: `category` 값을 기준으로 `APIurl` 객체에서 URL을 선택하고, `axios`를 통해 해당 URL로 요청을 보냅니다.
        2. **Authorization Header 설정**: `Authorization` 헤더에 API 액세스 토큰을 포함하여 인증된 요청을 보냅니다.
        3. **성공 시 데이터 저장**: 요청이 성공하면, 응답 데이터의 `results`를 `setMovies`를 사용해 `movies` 상태에 저장합니다.
        4. **오류 처리**: `try-catch` 블록을 사용해, 요청 중 오류가 발생할 경우 `setError`를 통해 오류 메시지를 저장하고 콘솔에 오류를 출력합니다.
        
- `try, catch, finally` 구문  🍠
    - **정의**: 오류가 발생할 가능성이 있는 코드를 안전하게 실행하기 위한 JavaScript의 예외 처리 구문입니다.
    - **구조**:
        
        ```jsx
        javascript
        코드 복사
        try {
          // 시도할 코드
        } catch (error) {
          // 오류가 발생했을 때 실행할 코드
        } finally {
          // 오류 여부와 관계없이 마지막에 항상 실행할 코드
        }
        ```
        
- `axios`  🍠
    - **정의**: HTTP 요청을 보내기 위한 JavaScript 라이브러리로, 비동기식으로 데이터를 쉽게 요청하고 응답을 받을 수 있습니다.
    - **장점**:
        - JSON 데이터 자동 변환
        - 요청 및 응답을 가로채는 기능
        - 기본 URL 및 헤더 설정 가능
    - mission1에서의 사용 예시
        
        ```jsx
        const getMovies = async () => {
            // try, catch문을 활용한 에러 처리
            try {
                const response = await axios.get(APIurl[category], {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
                    }
                });
                setMovies(response.data.results);
            } catch (err) {
                setError("Failed to fetch movies. Please try again later.");
                console.error(err);
            }
        };
        ```
        
        이 코드에서 `axios`는 `get` 요청을 보내 영화 데이터를 가져오는 데 사용되었습니다. 자세히 보면, `axios`가 사용된 방식은 다음과 같습니다:
        
        1. **요청 보내기**: `axios.get()` 메서드를 사용하여 API 요청을 보냅니다. 이 경우 `APIurl[category]`에 지정된 URL로 요청을 보내 영화 데이터를 받아옵니다.
        2. **헤더 설정**: `axios.get` 메서드의 두 번째 인수로 `headers` 객체가 포함된 옵션을 전달하여 요청 헤더를 설정합니다. 여기서는 `Authorization` 헤더에 `Bearer` 토큰을 설정하여 API에 인증을 추가합니다. 이 토큰 값은 환경 변수인 `VITE_TMDB_ACCESS_TOKEN`에서 가져옵니다.
            - 헤더를 설정하는 이유?
                
                헤더를 설정하는 이유는 주로 **인증과 요청 정보 전달** 때문입니다. 여기서는 `Authorization` 헤더를 설정하여 API 요청에 인증 정보를 추가하고 있습니다. 
                
        3. **데이터 처리**: `axios.get` 요청이 성공하면 `response` 객체가 반환됩니다. `response.data.results`를 사용해 응답 데이터에서 필요한 영화 목록을 꺼내고, 이를 `setMovies` 함수를 사용해 컴포넌트의 상태로 저장합니다.
        4. **에러 처리**: `try...catch`문을 사용하여 오류가 발생했을 때 이를 처리합니다. 요청이 실패할 경우, `setError` 함수를 통해 에러 메시지를 설정하고 `console.error`로 콘솔에 오류 내용을 출력합니다.
- `fetch`  🍠
    
    fetch는 브라우저에 내장된 HTTP 요청 함수입니다.
    
    - **정의**: 내장된 브라우저 API로, 서버와의 네트워크 요청을 쉽게 수행할 수 있습니다.
    - **장점**: 브라우저에서 기본적으로 제공되며, 별도 라이브러리 설치가 필요 없습니다.
    - **단점**: 오류가 발생해도 직접적으로 예외를 던지지 않으며, 응답을 수동으로 JSON으로 변환해야 합니다.
    - **사용법**:
        
        ```jsx
        fetch('https://api.example.com/data')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => console.log(data))
          .catch(error => console.error(error));
        
        ```
        
- `axios` vs `fetch` (차이점)  🍠
    - **에러 처리**: `axios`는 HTTP 에러 상태 코드가 있는 경우 예외를 발생시키지만, `fetch`는 예외를 발생시키지 않고 `response.ok`를 통해 상태를 체크해야 합니다.
    - **응답 변환**: `axios`는 자동으로 JSON을 변환하여 `data` 속성으로 전달합니다. 반면 `fetch`는 응답을 JSON으로 변환하려면 `.json()` 메서드를 사용해야 합니다.
    - **인터셉터**: `axios`는 요청과 응답에 인터셉터를 사용해 처리 흐름을 쉽게 조작할 수 있습니다. `fetch`는 이 기능이 없으므로, 비슷한 기능을 구현하려면 추가 작업이 필요합니다.
    - **브라우저 호환성**: `fetch`는 구형 브라우저에서 지원되지 않기 때문에 호환성 문제가 발생할 수 있지만, `axios`는 이런 제약이 덜합니다.
- `.env` 파일에는 어떤 내용들을 관리할까요?  🍠
    - `.env` 파일은 환경 변수들을 정의해 관리하는 곳입니다. 이 파일을 통해 민감한 정보를 코드에 직접 작성하지 않고, 별도의 환경 파일로 관리할 수 있습니다.
    - 주로 포함되는 내용
        - **API 키**: 외부 API의 접근 키와 같은 민감한 정보
        - **서버 URL**: 개발, 테스트, 프로덕션 서버의 URL 구분
        - **환경 변수**: 디버그 모드 설정, 포트 설정 등
- **`custom hook ?`**
    - **정의**: 리액트에서 재사용 가능한 로직을 함수 형태로 분리한 것
    - **용도**: 반복적으로 사용하는 비즈니스 로직이나 상태 관리, API 호출 등을 분리해 가독성과 재사용성을 높일 수 있습니다.
    - **사용법**:
        - `use`로 시작하는 함수를 정의하여 상태나 함수 로직을 추출하고, 이를 컴포넌트에서 필요한 경우 호출하여 사용합니다.
        - 예시:
            
            ```jsx
            import { useState, useEffect } from 'react';
            
            function useFetch(url) {
              const [data, setData] = useState(null);
              const [loading, setLoading] = useState(true);
            
              useEffect(() => {
                fetch(url)
                  .then(response => response.json())
                  .then(data => {
                    setData(data);
                    setLoading(false);
                  });
              }, [url]);
            
              return { data, loading };
            }
            
            // 사용
            const { data, loading } = useFetch('https://api.example.com/data');
            
            ```
            
    - 일반 함수 호출과의 차이점
        - **리액트 hook 사용 가능 여부**
            - **Custom hook**: `useState`, `useEffect`, `useContext` 등의 리액트 hook을 내부에서 자유롭게 사용할 수 있습니다. 그래서 상태와 라이프사이클을 포함한 로직을 추상화하고, 여러 컴포넌트에서 쉽게 재사용할 수 있습니다.
            - **일반 함수**: 리액트의 hook을 사용할 수 없습니다. 상태나 라이프사이클을 관리하는 로직이 필요할 때 일반 함수로는 이를 구현할 수 없습니다.
        - **네이밍 규칙 (`use`로 시작)**
            - **Custom hook**: 반드시 이름을 `use`로 시작해야 합니다. 리액트는 `use`로 시작하는 함수가 hook이라는 것을 인식하고, hook 규칙을 적용합니다.
            - **일반 함수**: 이런 네이밍 규칙이 없습니다. `use`로 시작하지 않아도 되며, 리액트 hook 관련 규칙이 적용되지 않습니다.
        - **상태와 로직 공유**
            - **Custom hook**: 특정 상태와 로직을 여러 컴포넌트에서 공유하고 재사용할 때 유용합니다. 예를 들어, API에서 데이터를 가져오는 로직을 custom hook으로 정의하면, 여러 컴포넌트에서 같은 데이터를 쉽게 가져올 수 있습니다.
            - **일반 함수**: 단순히 계산이나 데이터 가공을 위한 작업에 적합합니다. 리액트 컴포넌트의 상태나 라이프사이클을 직접적으로 다루지 않으므로, 재사용 가능한 상태 관리 로직으로는 적합하지 않습니다.

### useNavigate, useLocation

- useNavigate, useLocation
    
    ### useNavigate
    
    `useNavigate`은, 페이지를 이동할 떄 사용합니다.
    
     `react-router`에서 재공해주는 `Link` 태그로도, 이동할 수 있는 것 아니냐는 의문이 있을 것 입니다. 어떠한 이벤트(클릭, 더블클릭, 키보드 입력 etc..)가 일어난 이후 페이지를 이동시키고 싶거나, 페이지 이동 후 추가적인 로직이 필요한 경우 **`useNavigate`**을 활용하면 됩니다.
    
    **`navigate`**은 2개의 인자를 받습니다.
    
    ```jsx
    <button onClick={() => navigate('/profile', {
      replace: false,
      state: { userId: 123, userName: 'JohnDoe' }
    })}>
      View Profile
    </button>
    ```
    
    ### replace
    
    - **`replace: true`**
        
        `replace` 속성을 `true`로 설정하면 현재의 히스토리 항목을 새로운 URL로 대체합니다. 즉, 사용자가 뒤로 가기 버튼을 눌렀을 때, 방금 이동한 페이지가 아니라 이동 전의 페이지가 아닌 경우에는 메인 페이지("/")로 돌아가게 됩니다. 이렇게 하면 브라우저의 히스토리에 새로운 항목이 추가되지 않으므로 사용자가 이전 페이지로 돌아가지 못하게 됩니다.
        
    - **`replace: false`**
        
        `replace` 속성을 false로 설정하거나 생략하면 기본값이 적용됩니다. 이 경우, 이동한 페이지가 브라우저의 히스토리에 새로운 항목으로 추가됩니다. 사용자가 뒤로 가기 버튼을 눌렀을 때, 방금 이동한 페이지로 돌아갈 수 있습니다. 이는 브라우저의 히스토리 스택에 새로운 항목을 추가하는 방식입니다.
        
    
    ### state
    
    - 위 예시에서 버튼을 클릭하면 사용자는 `/profile` 페이지로 이동합니다. 이때 `state` 객체를 통해 `userId`와 `userName` 정보를 전달하게 됩니다. 이 정보는 `/profile` 페이지에서 `useLocation` 훅을 사용해 접근할 수 있습니다.
    
    ```jsx
    import { useLocation } from 'react-router-dom';
    
    const ProfilePage = () => {
      const location = useLocation();
      const { userId, userName } = location.state || {}; // state를 안전하게 접근
    
      return (
        <div>
          <h1>Profile Page</h1>
          <p>User ID: {userId}</p>
          <p>User Name: {userName}</p>
        </div>
      );
    };
    
    ```
    
    위의 `ProfilePage` 컴포넌트에서는 `useLocation` 훅을 통해 `state`에 접근하여 `userId`와 `userName`을 출력합니다. 이 정보를 이용해 페이지에서 사용자 관련 데이터를 동적으로 표시할 수 있습니다.
    

### useParams

- useParams
    
    ### useParams
    
    우리가, 만약에 **`Dynamic Routing`**을 설정했다고 가정해보겠습니다.
    
    ```jsx
    {
        path: '/movie/:movieId',
        element: <MovieDetailPage/>
    }
    ```
    
    이전에, 제가 설명드린 내용에서, **`Dynamic Routing`**은 **`:`**을 앞에 붙인 형태로, 작성된다고 말씀드렸고, **`뒤의 이름을 기억`**해야 한다고 전달해드렸습니다.
    
    ```jsx
    import { useParams } from 'react-router-dom';
    
    const MovieDetailPage = () => {
      const params = useParams();
      console.log(params)
    
      return (
        <div className="test">
          <p>현재 페이지의 파라미터는 { params.movieId } 입니다.</p>
        </div>
      )
    }
    
    export default MovieDetailPage;
    ```
    
    ![스크린샷 2024-09-14 오전 1.37.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/7ae8b375-053b-43b4-8507-8c05feaecd82/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-14_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.37.32.png)
    
    이런식으로, **`params`**의 값이 입력됨을 알 수 있다. 우리가 실제로 위에서 설정한 `movieId` 라는 이름으로, 파라미터의 값이 전달됨을 확인할 수 있습니다.
    
    조금 더 깔끔하게 적기 위해서, **`구조분해 할당`**을 활용할 수 있습니다.
    
    ```jsx
    import { useParams } from 'react-router-dom';
    
    const MovieDetailPage = () => {
      const {movieId} = useParams();
    
      return (
        <div className="test">
          <p>현재 페이지의 파라미터는 { movieId } 입니다.</p>
        </div>
      )
    }
    
    export default MovieDetailPage;
    ```
    
    보통, **`데이터 개별 조회`**를 하는 경우에, 이 **`해당하는 ID를 활용`**해서, 데이터 조회 요청을 하므로, 매우 유용한 패턴이니 꼭 익히시길 바랍니다!
    

# 🔥 미션 1.  - Custom Hooks 실습

<aside>
💡

이전에, Chapter 3 미션을 진행하면서, 데이터 요청을 할 떄, 불필요하게, 너무 많은 데이터를 반복해서 호출한다고 

</aside>

https://youtu.be/UIuD4OZ29KI

- [x]  이전에, 작성한 데이터를 받아오는 코드를, **`커스텀 훅을 활용`**해서, 리팩토링 해주세요!
- [x]  **`loading`**, **`error`** 처리 또한 같이 해주세요!
- 구현 내용
    1. 카테고리 페이지에서 특정 카테고리 클릭 시 dynamic routing을 이용한 페이지 이동
    
    ```jsx
    category.jsx
    
    import { Link } from "react-router-dom";
    import * as S from "./category.style";
    
    const categories = [
      { name: "현재 상영중인", path: "now-playing" },
      { name: "인기있는", path: "popular" },
      { name: "높은 평가를 받은", path: "top-rated" },
      { name: "개봉 예정중인", path: "up-coming" },
    ];
    
    const CategoryPage = () => {
      return (
        <S.CategoryContainer>
          {categories.map((category) => (
            <Link key={category.path} to={`/movies/${category.path}`}>
              <S.CategoryBox>
                <p>{category.name}</p>
              </S.CategoryBox>
            </Link>
          ))}
        </S.CategoryContainer>
      );
    };
    
    export default CategoryPage;
    ```
    
    1. 커스텀 훅을 활용해서 데이터를 받아옴
    
    ```jsx
    useFetchMovies.js
    
    //커스텀 훅을 사용한 리팩토링
    import { useState, useEffect } from "react";
    import axios from "axios";
    
    const APIurl = {
        "now-playing": "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
        "popular": "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
        "top-rated": "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
        "up-coming": "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1"
    };
    
    // 매개변수로 category를 받아, 
    // 이 값을 기반으로 영화 데이터를 가져옴
    export const useFetchMovies = (category) => {
        const [movies, setMovies] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true); // 로딩 상태 추가
    
        // category가 변경될 때마다 실행
        useEffect(() => { 
            const getMovies = async () => {
                setLoading(true); // 로딩 시작
                // try, catch문을 활용한 에러 처리
                try {
                    const response = await axios.get(APIurl[category], {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
                        }
                    });
                    setMovies(response.data.results);
                } catch (err) {
                    setError("Failed to fetch movies. Please try again later.");
                    console.error(err);
                } finally {
                    setLoading(false); // 요청 완료 후 로딩 종료
                }
            };
            
            // category 값이 존재할 때만 getMovies 함수 호출
            if (category) {
                getMovies();
            }
        }, [category]);
    
        return { movies, error, loading };
    };
    
    ```
    
    1. 커스텀 훅에서 받아온 데이터를 이용해서 화면에 영화 포스터 출력
    
    ```jsx
    import Card from "../../components/Card/card.jsx";
    import * as S from './movies.style.js';
    import { useParams } from "react-router-dom";
    import { useFetchMovies } from "../../hooks/useFetchMovies.js"; // 커스텀 훅 임포트
    
    const MoviesPage = () => {
        const { category } = useParams();
        const { movies, error, loading } = useFetchMovies(category); // 커스텀 훅 사용하여 데이터 및 에러 상태 받아오기
    
        if (loading) {
            return <p>로딩 중...</p>; // 로딩 중일 때 표시
        }
    
        if(error) {
            return <p>{error}</p>; // 에러 발생 시 표시
        }
    
        return (
            <S.CardList>
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </S.CardList>
        );
    };
    
    export default MoviesPage;
    
    ```
    

# 🔥 미션 2. - 영화 상세 페이지 제작

<aside>
💡

이전에, 우리가 만들었던 영화 페이지를 바탕으로, 영화 상세페이지를 만들어보고자 합니다!

</aside>

![스크린샷 2024-09-14 오전 12.29.31.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/0fa06081-d652-4b42-8fcb-6f325fc385f1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-14_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.29.31.png)

### 영화 페이지 이동

![스크린샷 2024-09-14 오전 12.31.58.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/066163c8-af45-4515-ae57-841fe987361a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-14_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.31.58.png)

- [x]  해당 영화 컴포넌트를 클릭시, 상세 페이지로 이동하게 해주세요
    - [x]  경로는 **`/movies/:movieId` 로 이동되게 해주세요!**

### 상세페이지 데이터 받기

![스크린샷 2024-09-14 오전 12.34.11.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/210821c6-269a-4b99-871a-05644dfcde66/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-14_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.34.11.png)

- [x]  **`movieId`**를 활용하여, 영화 상세 페이지 정보를 받아와주세요!
- [x]  받은 내용을 바탕으로, 꼭 위의 방식으로, 디자인하지 않아도 좋습니다! 다만, **`CSS를 학습하며 멋지게 디자인`** 해주세요!
- [x]  추가적으로, 감독/출연 데이터 또한 **`movieId`**를 활용하여, **`Credit 정보`**를 받아와주세요!

모든, 데이터는 TMDB 공식 문서를 바탕으로 진행됩니다.

https://developer.themoviedb.org/docs/getting-started

### 마무리

- [x]  위에서, 실습한 **`custom-hook`**을 이용하여, **`loading`** 처리를 해주세요!
- [x]  위에서, 실습한 **`custom-hook`**을 이용하여, **`error`** 처리를 해주세요!
- 구현 내용
    1. 영화 컴포넌트 클릭 이벤트 구현
    
    ```jsx
    movies.jsx
    
    import { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import axios from 'axios';
    import Card from "../../components/Card/card.jsx";
    import * as S from './movies.style.js';
    
    const MoviesPage = () => {
        const [movies, setMovies] = useState([]);
        const [error, setError] = useState(null);
        const navigate = useNavigate();
        
    		// TMDB에서 popular에 해당하는 데이터 정보 가져옴
        useEffect(() => {
            const fetchMovies = async () => {
                try {
                    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
                        }
                    });
                    setMovies(response.data.results);
                } catch (err) {
                    console.error(err);
                    setError("인기 영화를 불러오는데 실패했습니다.");
                }
            };
    
            fetchMovies();
        }, []);
    
    		// movieId에 해당하는 경로로 이동
    		// state를 통한 movie의 정보 전달
        const handleCardClick = (movie) => {
            navigate(`/movies/${movie.id}`, { state: { movie } });
        };
    
        return (
            <S.CardList>
                {error ? (
                    <p>{error}</p> // 에러 메시지 표시
                ) : (
                    movies.map((movie) => (
    		                // onclick 이벤트를 통해서 특정 포스터 클릭 시
    		                // 해당 포스터의 데이터 전달
                        <Card key={movie.id} movie={movie} onClick={() => handleCardClick(movie)} />
                    ))
                )}
            </S.CardList>
        );
    };
    
    export default MoviesPage;
    
    ```
    
    1. 영화 컴포넌트 클릭 시 해당 컴포넌트의 ID에 해당하는 데이터 가져오기
    
    ```jsx
    useFetchMovieDetails.js
    
    import { useState, useEffect } from "react";
    import axios from "axios";
    
    export const useFetchMovieDetails = (movieId) => {
        const [movie, setMovie] = useState(null);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true); // 로딩 상태 추가
    
        useEffect(() => { 
            const fetchMovieDetails = async () => {
                setLoading(true); // 로딩 시작
                // movieId에 해당하는 데이터 가져옴
                try {
                    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR&append_to_response=credits`;
                    
                    // axios.get(요청할 URL, 설정 옵션)
                    // headers: 요청 헤더를 설정합니다. 
                    // 예를 들어, Authorization 헤더는 인증 토큰을 포함하는 데 사용됩니다.
                    const response = await axios.get(url, {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
                        }
                    });
    
                    setMovie(response.data);
                    console.log(response.data);
                } catch (err) {
                    setError("Failed to fetch movie data. Please try again later.");
                    console.error(err);
                } finally {
                    setLoading(false); // 요청 완료 후 로딩 종료
                }
            };
            
            
            // movieId가 존재할 때만 실행되도록 함
            if (movieId) {
                fetchMovieDetails();    
            }
        }, [movieId]);
    
    		// 데이터 리턴
        return { movie, error, loading };
    };
    
    ```
    
    1. 받아온 데이터 출력
    
    ```jsx
    movieDetailPage.jsx
    
    import { useParams } from 'react-router-dom';
    import { useFetchMovieDetails } from '../../hooks/useFetchMovieDetails';
    import * as S from './movieDetailPage.style.js';
    
    const MovieDetailPage = () => {
        const { movieId } = useParams();
        const { movie, error, loading } = useFetchMovieDetails(movieId);
    
        if (loading) {
            return <p>로딩 중...</p>;
        }
    
        if (error) {
            return <p>{error}</p>;
        }
    
        if (!movie) {
            return <p>영화 데이터를 불러올 수 없습니다.</p>; 
        }
    
        return (
            <S.Container>
                <S.Header $backdropPath={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}>
                    <S.Title>{movie.title}</S.Title>
                    <S.Rating>평균 {movie.vote_average}</S.Rating>
                    <S.Runtime>{movie.runtime}분</S.Runtime>
                    <S.Tagline>{movie.tagline}</S.Tagline>
                    <S.Overview>{movie.overview}</S.Overview>
                </S.Header>
                <S.CastSection>
                    <S.CastTitle>감독/출연</S.CastTitle>
                    <S.CastList>
                        {movie.credits?.cast.map((actor) => (
                            <S.CastItem key={actor.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                <p>{actor.name}</p>
                                <p>({actor.character})</p>
                            </S.CastItem>
                        ))}
                    </S.CastList>
                </S.CastSection>
            </S.Container>
        );
    };
    
    export default MovieDetailPage;
    
    ```
    

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