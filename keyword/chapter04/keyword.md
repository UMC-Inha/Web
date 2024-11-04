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
    
    useEffect는 컴포넌트가 처음 렌더링된 직후(mount)나 특정 state가 업데이트 될 때 실행시키고 싶은 동작이 있을 때 사용합니다.
    
    ```jsx
    useEffect('callback func',['depedency array'])
    ```
    
    useEffect() 의 변수로는 실행하게 될 함수와, 함수를 작동 시킬 트리거가 되는 변수들을 넣으면 됩니다. 
    
    dependency array를 빈 값으로 넘기면, 렌더링 될 때마다 callback func이 실행됩니다.
    
- `try, catch, finally` 구문  🍠
    
    try, catch, finally는 코드 실행중 발생하는 오류를 쉽게 처리하도록 도와주는 문법입니다.
    
    try블록 안에 실행할 코드가 들어가고, 발생하는 에러에 대해 catch에서 핸들링합니다.
    
    finally는 에러 상관 없이 항상 실행되는 코드가 들어갑니다.
    
    ```jsx
    try {
      // 오류 발생 가능 코드
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      console.log("This will run regardless of an error.");
    }
    ```
    
- `axios`  🍠
    
    api 통신을 위해 사용되는 패키지입니다.
    
    HTTP 오류 상태가 자동으로 catch로 전달되기 때문에, fetch보다 에러 핸들링이 편합니다.
    
    JSON형태의 응답을 자동 파싱하는 등 fetch보다 편리한 기능이 있습니다.
    
    다만 기본적으로 외부 source이기 때문에, 프로젝트 관리에 유의해야 합니다.
    
- `fetch`  🍠
    
    fetch는 기보적으로 에러 처리를 위해 response를 확인해야하는 번거로움이 있습니다
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/cbd0c268-0eee-4afd-b495-cf67702eadfc/image.png)
    
    직접 status에 따른 에러 처리를 할 수 있습니다.
    
    그리고 JSON형태의 응답을 처리하기위해서 reponse.json()메서드 가 필요합니다.
    
    axios보다 번거로운 면이 있지만, 기본적인 내용은 똑같습니다.
    
- `axios` vs `fetch` (차이점)  🍠
    
    기본적으로 axios가 더 편리하고 직관적인 에러 처리가 가능하고
    
    JSON 데이터를 자동 파싱해줄 뿐 아니라, 응답 인터셉터, 타임아웃 등등 여러가지 기능이 추가 제공됩니다. 하지만 추가적인 패키지 설치가 필요합니다.
    
    axios는 정말 많이 사용되는 패키지라서 대부분 문제가 없지만, 그럼에도 패키지 추가 설치는 쉽게 결정할 수 있는 부분은 아닙니다.
    
    보통 프로젝트 진행 시 기획 단계에서 사용할 모든 패키지를 정하고 시작하고, 이후에는 추가로 패키지를 설치하게 되면 어떤 문제가 발생할 지 예측할 수 없기 때문에, 아무 생각 없이 편리하다고 이런저런 패키지를 다 붙여버리면 안됩니다.
    
- `.env` 파일에는 어떤 내용들을 관리할까요?  🍠
    
    API 키, DB서버 연결정보, 서버URL 등등 민감한 정보를 저장하고
    
    특정 기능들을 키고 끄는 toggle 변수나, log 수준 등등 여러가지 설정을 저장합니다
    
- **`custom hook ?`**
    
    custom hook은 말 그대로 개발자 마음대로 만들 수 있는 함수입니다.
    
    리액트는 1파일 1목적을 지향합니다. 근데 컴포넌트를 만들다보면, 하나의 파일에 하나의 목적만 가진 코드로 통일될 수 없습니다.
    
    예를 들어 영화 리스트를 db에서 받아와 화면에 출력해주는 ui 컴포넌트가 있을 때,
    
    단순히 영화 리스트를 출력해주는 목적의 코드가 있을 것이고, 네트워크 통신을 통해 데이터를 받아오는 코드, 예외처리 코드, 컴포넌트에 들어갈 event 기능 등등 여러가지 코드가 생깁니다.
    
    이때 코드를 기능별로 구분해야만, 화면에 영화 리스트 컴포넌트가 출력되지 않을 때,
    
    네트워크 통신이 문제인 건지, 예외 처리가 잘못된 건지, event 기능을 하는 함수의 코드가 잘못 짜여진 건지, view자체가 잘못된 건지 파악할 수 있고. 당연히 재사용성도 올라갑니다.
    
    단순히 보기좋다고 custom hook을 만들고 파일을 분리하는 게 아닙니다.
    
    그리고 테스트 코드 작성에도 유리합니다. 
    
    프론트엔드는 기능들을 직접 웹에서 눈으로 확인할 수 있기 때문에, 굳이 테스트 코드를 작성하지 않는 경우가 많은데, 작성하지 않는 것과 못하는 건 다릅니다. 기능을 분리하여 체계화 하지 않으면 테스트코드 작성이 매우 어려워집니다.
    

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