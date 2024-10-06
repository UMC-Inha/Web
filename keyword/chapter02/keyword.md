# 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad

추가로, 위에서 초기 세팅 한 App.jsx 파일을 바탕으로 핵심 키워드를 정리해 볼 예정입니다.
초기 세팅 먼저하고 진행해주세요!**

</aside>

- React의 동작 원리
    
    ### React의 동작 원리
    
    React는 User Interface Library이다. 리액트의 핵심적인 특징은 아래와 같다.
    
    <aside>
    💡
    
    각 특징들이 무엇인지, 어떠한 이점이 있는지 정리해주세요
    
    - UMC 웹 파트장 매튜 / 김용민 - 
    
    </aside>
    
    1. SPA (Single Page Application)
    - 정리
        
        바닐라웹은 모든 페이지별로 파일이 따로 있고, 정적으로 로드합니다.
        
        SPA는 반대의 개념으로 모든 페이지의 데이터를 한 번에 가져오고, 사용자의 이용에 맞춰 그때그때 필요한 요소를 동적으로 업데이트합니다.
        
        장점
        
        1. 페이지 전환 시 모든 요소를 다 로드하는 게 아니라, 필요한 부분만 업데이트 하기 때문에, 페이지 전환이 빠를 수 있습니다.(새로고침 없이 페이지 전환이 가능합니다.)
        2. ui를 재사용할 수 있어, 개발 생산성이 좋을 뿐 아니라, 프로젝트 관리에도 용이합니다.
        
        단점
        
        1. 개발자가 코드를 잘못 짜면, 안 쓴 것만 못합니다. 일부 요소만 업데이트 하여 사용자 이용 경험을 향상시키기 위해, 적절한 설계가 필요하지만, 이를 지키지 못하면 기존의 바닐라웹 보다도 더 느리고 단점은 단점대로 챙겨갑니다.
        2. 첫 로딩 시간이 깁니다. 사용자가 사이트 첫 방문시 모든 요소를 로드하여 사용하기 때문에 첫 로딩은 길어집니다.
    1. User Interface Library 
    - 정리
        
        **사용자 인터페이스(UI)를 구축하는 데 필요한 재사용 가능한 컴포넌트들의 집합**을 의미합니다. UI 라이브러리는 버튼, 입력 필드, 카드, 모달, 내비게이션 바 등의 **UI 요소들을 미리 정의된 스타일과 기능**으로 제공하여 개발자가 쉽게 UI를 구축할 수 있도록 돕습니다.
        
    1. Functional Component (함수형 컴포넌트)
    - 정리
        
        리액트(React)에서 컴포넌트를 정의하는 한 방식으로, 단순한 자바스크립트 함수를 통해 UI를 정의하고 렌더링하는 컴포넌트입니다.
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/f1ac2aec-5b60-41f3-b2e7-c103d0ddf808/image.png)
        
    1. Virtual DOM (가상 DOM)
    - 정리
        - 정의
        -> 바닐라웹의 비효율성을 해결하기 위해 컴포넌트 패키지에 추가된 개념
        -> Component라는 개념을 만든 것
        -> 브라우저 동작 구조에 한 단계를 추가한 것
        - 동작
        -> 메모리에 Virtual DOM을 저장할 신규 공간을 만듦
        -> 브라우저에 변화가 생겼을 때, 일단 Virtual DOM이 받음
        -> 그려지기 전인 가상으로 먼저 바꼈을 떄의 모습을 계산함
        -> 그리고 나서, 기존 것과 바뀐 부분만을 DOM Tree에 전달함
        -> 최종적으로 변경된 부분 (컴포넌트 단위) 만 새로고침 되는 효과를 얻음
        (계산은 하지만 페이지에 그려주는 과정(페인팅)이 없으니 리소스 아낌)
        - 그럼 Virtual DOM은 항상 이로운가?
            1. Virtual DOM의 리스크
            -> 메모리를 더 사용함
            -> 브라우저 동작 과정 자체의 추가
            2. 동적인 요소가 거의 없는 경우
            -> 어떤 조작을 하든 전체 페이지가 바뀌는 앱
            3. 개발자가 잘못 쓴 경우
    1. 동시성 렌더링
    - 정리
        
        리액트 18버전에서 새로 추가된 기능입니다.
        
        원래 렌더링은 중간에 개입이 불가능했습니다.
        
        더군다나 싱글스레드인 js의 특성상 렌더링이 한 번 잘못되면, 바로잡기가 어려워집니다.
        
        예를 들어 개발자의 실수로 무한 루프를 돌아버리는 렌더링 요소가 있다면, 해당 렌더링이 일단 시작되면 다른 요소들은 렌더링되지 않는 경우가 있습니다.
        
        이런 경우 외에도, 싱글스레드로 렌더링이 동작하는 특성상 문제가 되는 경우가 많아 개발자가 더 신경써야하는 부분이 있고, 사용자 경험도 다소 저하될 수 있었습니다.
        
        이를 해결해주기 위해 18버전에서 새로 도입되었습니다.
        
        https://velog.io/@heelieben/React-18-Concurrent-Rendering
        
    

### JSX 문법에 대해 배워보자! 🍠

- JSX 사용시 유의 사항 (기초)
    
    ### 1. React에서 JSX를 반환할 때 꼭 하나의 태그만 반환해야한다.
    
    **`⭕️ 가능한 경우`**
    
    ```jsx
    function App() {
      return (
         <strong>상명대학교</strong>
      )
    }
    
    export default App
    ```
    
    **`❌ 불가능한 경우`**
    
    ```jsx
    import './App.css'
    
    function App() {
      return (
         <strong>상명대학교</strong>
         <p>매튜/김용민</p>
      )
    }
    
    export default App
    
    ```
    
    <aside>
    💡
    
    여러개를 반환하고 싶은 경우는 어떻게 해야 할까요?
    코드와, 이유를 간략하게 작성해주세요.
    
    </aside>
    
    - 답변 🍠
        
        ```jsx
        return(
        	<>
        		<Component1 />
        		<Component2 />
        	</>
        )
        // or
        return(
        	<main>
        		<Component1 />
        		<Component2 />
        	</main>
        )
        
        ```
        
        <aside>
        💡
        
        이유:  
        
        리액트는 하나의 태그만을 반환하도록 설계되었습니다.
        
        리액트에서 제공해주는 Fragment 태그를 이용할 수 있고, 
        꼭 Fragment 태그가 아니여도 됩니다
        
        </aside>
        
    - 해설
        
        ```jsx
        function App() {
          return (
             <>
              <strong>상명대학교</strong>
              <p>매튜/김용민</p>
             </>
          )
        }
        
        export default App
        ```
        
        많은 분들이 `<> 빈 태그(Fragment)`를 활용할 수 있다는 부분을 모르실 것 같습니다. 스타일링을 하거나, 부모태그가 필요한 경우가 아닌, 다수의 태그를 반환하고 싶은 경우는 `<> 빈 태그를 활용`해도 좋습니다.
        
    
    또한 React에서는 HTML에서 사용하신 다양한 태그를 사용할 수 있습니다~!!
    
    ### 2. React에서 스타일링 방법
    
    1. className을 활용한 스타일링
    
    ```jsx
    import './App.css'
    
    function App() {
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p>매튜/김용민</p>
         </>
      )
    }
    
    export default App
    
    ```
    
    이런식으로, `className`을 지정해주겠습니다. App.jsx 코드 상단을 보면 ‘./App.css’를 import하여 사용하고 있습니다.
    
    `App.css` 파일로 가서 아래와 같이 코드를 입력해주겠습니다.
    
    ```jsx
    .school {
      background-color: blue;
      color: white;
      font-size: 10rem;
    }
    ```
    
    ![스크린샷 2024-09-09 오후 4.58.48.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/2d957261-4c70-4d89-bf9c-549fbfc1aca7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.58.48.png)
    
    1. Inline-Styling을 활용한 스타일링
    
    ```jsx
    import './App.css'
    
    function App() {
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>매튜/김용민</p>
         </>
      )
    }
    
    export default App
    ```
    
    위와 같이, **`style`** 이후 중괄호를 두번 연 후, 카멜 표기법을 사용하여, css 코드를 작성할 수 있습니다.
    
    중괄호를 두개 쓰는 이유는, 아래와 같습니다.
    
    1. 바깥쪽 중괄호는 자바스크립트 문법임을 나타낸다.
    2. 안쪽 중괄호는 자바스크립트의 객체임을 나타낸다.
    
    **`HTML 방식과 유사하지만 살짝 다르므로, 주의해주세요!!`**
    
    ```jsx
    // HTML 방식 (케밥 표기법)
    <div style="background-color: purple">
    	고구마
    </div>
    
    // JSX 방식 (카멜 표기법)
    <div style={{backgroundColor: 'purple'}}>
    	고구마
    </div>
    ```
    
    ### 3. local variable (로컬 변수) 선언
    
    ```jsx
    import './App.css'
    
    function App() {
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>매튜/김용민</p>
         </>
      )
    }
    
    export default App
    ```
    
    여기서, 이제 매튜라는 이름을, `nickname` 이라는 변수를 할당 받아서, 사용해보고자 합니다.
    
    ```jsx
    import './App.css'
    
    function App() {
      const nickname = '매튜'
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>매튜/김용민</p>
         </>
      )
    }
    
    export default App
    
    ```
    
    매튜/김용민 → 이 부분을 **`nickname/김용민`** 이렇게 쓴다면 당연히, 문자열로 인식 할 것 입니다.
    
    `nickname`이라는 변수에 접근해서, `nickname`의 변수가 갖고 있는 매튜라는 닉네임에 접근하고 싶기에 이러한 경우에는 **`중괄호{}`** 를 사용하면 됩니다.
    
    ```jsx
    import './App.css'
    
    function App() {
      const nickname = '매튜'
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>
    	      {nickname}/김용민
    	     </p>
         </>
      )
    }
    
    export default App
    
    ```
    
    제대로 동작함을 확인할 수 있고, `nickname` 안의 값도 자유롭게 변경하면, 그에 맞춰서 `nickname`이 변경됨을 확인할 수 있습니다.
    
- JSX 사용시 유의 사항 (심화)
    
    ### 1. 문자열과 함께 변수 사용하기
    
    `중괄호{}`와 ```를 활용`하여, 문자열과 함께 변수를 사용할 수 있습니다.
    
    자주 사용하는 패턴이니 꼭 익숙해지시길 바랍니다!
    
    ```jsx
    import './App.css'
    
    function App() {
      const nickname = '매튜'
      const sweetPotato = '고구마'
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
          <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
         </>
      )
    }
    
    export default App
    
    ```
    
    ![스크린샷 2024-09-09 오후 5.16.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/da56da7b-3210-4644-b4fd-4872afd15bad/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.16.19.png)
    
    ### 2. 배열의 요소를 나타내는 방법.
    
    array안의 요소를 각각 나타내고 싶은 경우는 **`map`**을 활용합니다.
    
    map에 대해 잘 모르는 분들은, JS 관련 워크북을 다시 한번 보시거나, 구글링 하여 공부 후 진행해주세요.
    
    ```jsx
    import './App.css'
    
    function App() {
      const nickname = '매튜'
      const sweetPotato = '고구마'
      const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
          <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
          <ul>
            {array.map((yaho, idx) => {
              return <li key={idx}>{yaho}</li>
            })}
          </ul>
         </>
      )
    }
    
    export default App
    
    ```
    
    map은 yaho를 인자로 받아서, 값을 반환합니다. **`중괄호를 사용한 경우에는 꼭 return을 적어주어야`** 반환하는 값이 제대로 보입니다. 많은 분들이, 이 부분에서 어려움을 많이 겪기에, 혹시라도 본인이 작업한 내용이 잘 보이지 않는다면 중괄호인지, 소괄호인지를 먼저 찾아보세요!
    
    ```jsx
          <ul>
            {array.map((yaho, idx) => {
              return <li key={idx}>{yaho}</li>
            })}
          </ul>
    ```
    
    소괄호를 활용한 경우에는 return을 생략할 수 있습니다.
    
    ```jsx
          <ul>
            {array.map((yaho, idx) => (
               <li key={idx}>{yaho}</li>
            ))}
          </ul>
    ```
    
    map을 활용하는 경우에는, `key`라는 `props를 설정`해야 함. key값은 각 원소들마다 가지고 있는 **`고유값`**으로 설정을 해야 합니다.
    
    현재는 map 함수에서, 제공해주는 index를 활용해주었지만, 실제로 인덱스를 활용한 경우, 값이 삭제되는 기타 동작의 경우, 문제가 발생하기 떄문에 보통 서버에서 제공해주는 고유한 id 값을 사용하기는 합니다.
    
    `yaho`와, `idx`와 같은 경우는 정해진 이름은 없습니다. 본인이 원하는 이름을 사용해서 반환해주어도 좋습니다.
    
    ```jsx
    // 보통은 복수와 단수를 잘 활용하는게 좋습니다.
    const numbers = [1, 2, 3, 4, 5];
    
    // 단수를 인자로.
    numbers.map((number, index) => return { // 작업들 } ));
    ```
    
    ![스크린샷 2024-09-09 오후 5.27.56.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/7a3741ba-5f49-4af9-95a1-0c773825accf/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.27.56.png)
    
- 첫 컴포넌트 만들어보기
    
    ### 첫 컴포넌트 만들어보기
    
    React에서는 컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 관리할 수 있습니다.
    
    위에서 순서대로 진행했더라면, 현재 우리의 코드는 아래와 같습니다.
    
    ```jsx
    import './App.css'
    
    function App() {
      const nickname = '매튜'
      const sweetPotato = '고구마'
      const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
          <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
          <ul>
            {array.map((yaho, idx) => (
               <li key={idx}>{yaho}</li>
            ))}
          </ul>
         </>
      )
    }
    
    export default App
    ```
    
    실제로, yaho를 반환하는 부분을 **`List 컴포넌트`**로 만들어 보겠습니다.
    
    ```jsx
    <li key={idx}>{yaho}</li>
    ```
    
    **`src 폴더 내부`**에 **`components`** 폴더를 하나 만들어주겠습니다. 그 후 **`List.jsx 파일`**을 만들어보겠습니다.
    
    ![스크린샷 2024-09-09 오후 5.35.51.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/d9a6330d-3f0b-43c1-b1b1-d39ad37f85c6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.35.51.png)
    
    우리가 궁극적으로 만들고 싶은 내용은 아래와 같습니다.
    
    ![스크린샷 2024-09-09 오후 5.37.05.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e20d1131-591b-4581-802f-03a75ebb4fa2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.37.05.png)
    
    기존에 작업하던, App.jsx로 가서
    
    ```jsx
    import './App.css'
    // 1. List Component를 Import 해줍니다.
    import List from './components/List';
    
    function App() {
      const nickname = '매튜'
      const sweetPotato = '고구마'
      const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
      return (
         <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
          <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
          <ul>
            {array.map((yaho, idx) => (
              // 2.  <li key={idx}>{yaho}입니다.</li> -> List 컴포넌트를 호출합니다.
              <List />
            ))}
          </ul>
         </>
      )
    }
    
    export default App
    
    ```
    
    각각의 **`컴포넌트는 props`**를 활용하여 데이터를 전달 받을 수 있습니다.
    
    저희는, 일단 map 방식은 키를 전달해주어야 하기 때문에 List 컴포넌트에 key를 전달해 줄 것 입니다.
    
    ```jsx
    <List key={idx} />
    ```
    
    추가적으로, 각 List에 화면에 보여줄 데이터를 전달해주기 위해 특정 이름으로 데이터를 전달해 줄 것입니다.
    
    기술 스택을 전달해주므로, **`문맥상 맞게 tech라는 props의 이름`**으로 전달해주겠습니다.
    
    ```jsx
    <List key={idx} tech={yaho} />
    ```
    
    이렇게 하고 화면을 실행시켜 봅시다.
    
    ![스크린샷 2024-09-09 오후 5.41.47.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/7bd5e857-40f6-401f-b9fa-178e46ce149e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.41.47.png)
    
    당연히 현재 List 컴포넌트는 아래와 같기에 아무것도 반환되지 않습니다.
    
    ```jsx
    const List = () => {
      return (
        <>
          
        </>
      )
    }
    
    export default List
    
    ```
    
    전달받은 props를 활용해보고자 합니다.
    
    ```jsx
    const List = (props) => {
       console.log(props)
      return (
        <>
          
        </>
      )
    }
    
    export default List
    
    ```
    
    앞으로 프론트엔드 개발을 진행하시면서, **`console.log()`**를 통하여, 자주 본인이 하는 것들을 확인하는 습관이 매우 중요합니다. props의 내용이 무엇이 들었는지 **`Chrome → F12`** 개발자도구를 통해 만든 웹사이트에서 확인해보겠습니다.
    
    ![스크린샷 2024-09-09 오후 5.43.17.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/99ecfc9e-0a76-462f-8174-a3fd8a0a6a41/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.43.17.png)
    
    우리가 아까 **`<List key={idx} tech={yaho} />`** 이런 식으로 값을 전달해주었기에 props를 호출 했을 때 tech라는 이름에 요소 하나하나의 값이 들어가 있음을 확인할 수 있습니다.
    
    여기서 주의하셔야 합니다.
    
    실제로 우리가 props를 호출 했을 때 { tech: ‘REACT’ } 라는 결과값이 나왔습니다.
    
    그럼 우리가 해당 값을 활용할 떄는 {tech}를 활용하는 것이 아닌, **`{props.tech}`**를 통해 값에 접근해야 합니다. **`(해당 내용이 이해가 안가면, 자바스크립트 워크북 객체에 대해 공부하셔야 합니다.)`**
    
    ```jsx
    // props를 호출했을 때 
    const List = (props) => {
       console.log(props)
      return (
        <li>
          {props.tech}
        </li>
      )
    }
    
    export default List
    
    ```
    
    ![스크린샷 2024-09-09 오후 5.46.22.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/765780fd-dd7d-483a-a8c4-cba2f856fae9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.46.22.png)
    
    여기서 현재는 [props.tech](http://props.tech) 하나밖에 없기에 불편함을 크게 못느끼기겠지만, 전달받은 props가 tech 이외에, name, food 등 여러가지라면 매번 props.tech, props.name, [props.food](http://props.food) 이런식으로 값을 활용하는 것은 매우 귀찮을 것 입니다.
    
    우리는 이것을 해결하기 위해 **`JS 구조분해 할당에 대해 이전에 학습`**했습니다. 어떤 식으로 활용하면 좋을지 본인이 직접 해보고 아래에 **`List.jsx`** 파일을 넣어주세요.
    
    - 구조분해 할당 활용 **`List.jsx`**
        
        ```jsx
        const List = (props) => {
        	const { dataArray } = props;
          return (
        	   {
        	   dataArray.map((elem, index) = > {
        		   <div key={index}>
        			   //elem.~~
        		   </div>
        	   })
        	   }
          )
        }
        
        export default List
        ```
        
    - 해설
        
        첫번째 방식
        
        ```jsx
        // 직접 props를 받는 부분에서 구조 분해 할당을 진행하는 방법.
        const List = ({tech, food, yaho}) => {
          return (
            <li>
              {tech}
            </li>
          )
        }
        
        export default List
        
        ```
        
        두번쨰 방식
        
        ```jsx
        // props를 전달 받고, 그 이후에 구조 분해 할당을 하는 방법.
        const List = (props) => {
          const { tech, food, yaho } = props;
          return (
            <li>
              {tech}
            </li>
          )
        }
        
        export default List
        
        ```
        
    
    이제 각 컴포넌트에 해당하는 스타일링을 진행하면 좋습니다. 스타일링은 크게 많이 하지 않을 것이고, 거슬리는 부분만 제거해보고자 합니다.
    
    일단은 **`<ul>`**일때 자동으로 부여해주는 **`﹒`**이 좀 거슬리므로, 해당하는 것들을 삭제해보겠습니다.
    
    ```jsx
    const List = (props) => {
      const { tech } = props;
      return (
    	  // listStyle을 통해 제거할 수 있습니다.
        <li style={{listStyle: 'none'}}>
          {tech}
        </li>
      )
    }
    
    export default List
    
    ```
    
    이런식으로, 컴포넌트를 분리하여, 스타일링이 가능하다. 구조 분해 할당을 통해 조금 더 깔끔하게 코드를 작성할 수 있다를 알아주시면 됩니다!
    

### 나의 첫 번째 react-hook 🍠

<aside>
💡

리액트 함수 컴포넌트에서 가장 중요한 개념은 훅입니다.

함수형 컴포넌트 이전에 클래스 컴포넌트에서 가능했던, state, ref와 같은 리액트의 핵심 기능들을 함수에서도 간결하게 사용 가능하게 만들었습니다.

우선, 다양한 Hook 중 **`useState`**에 대해서 배워보고자 합니다.

</aside>

- **`useState` 기초**
    
    ### useState 기초
    
    `useState`는 함수형 컴포넌트 안에서 상태를 정의하고, 이 상태를 관리할 수 있게 하는 훅입니다.
    
    기본적인 사용법은 아래와 같습니다.
    
    ```jsx
    import { useState } from 'react';
    
    const [state, setState] = useState('초기값');
    ```
    
    `useState`의 반환 값은 배열입니다. 배열의 첫 번쨰 원소로 state를 사용할 수 있습니다. 그냥 `state`를 사용하게 된다면, 당연히 `useState`의 괄호안에 정의한 초기값이 나오게 됩니다.
    
    두번째 `setState`를 활용한다면, `state의 값을 변경`할 수 있습니다.
    
    ### useState 실습 진행
    
    글로만 보면 잘 이해가 되지 않을 것 입니다. 간단한 카운터를 만들어보며 실습을 진행해보겠습니다.
    
    App.jsx에 아래와 같이 내용을 수정해봅시다.
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      return (
         <>
          <h1>{count}</h1>
         </>
      )
    }
    
    export default App
    
    ```
    
    우리가 **`useState`**의 초기값을 0이라고 했기에, 당연히 현재 웹을 실행시켜보면, 0이 화면에 출력됩니다.
    
    그럼 해당 숫자를 어떠한 방식으로 증가 시킬까요?
    
    `react`에서는, `JS`의 `onclick`과 같은, 기능을 제공해줍니다.
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      return (
         <>
          <h1>{count}</h1>
          <button onClick={() => {}}>숫자 증가</button>
         </>
      )
    }
    
    export default App
    
    ```
    
    **`onClick`**을 활용하여, 클릭할 때 추가적인 행동을 정의 할 수 있다. 우리가 값(상태)을 변화하고 싶을 때는 `useState` 배열의 두 번쨰 인자를 사용한다고 했다.
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      return (
         <>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>숫자 증가</button>
         </>
      )
    }
    
    export default App
    
    ```
    
    ![스크린샷 2024-09-09 오후 6.24.59.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5862b26a-8b90-4d41-86de-dc6801be00e9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.24.59.png)
    
    이러한 식으로, `setState`를 활용하여 값을 증가 시켜줄 수 있다.
    
- **`useState`** 심화
    
    ### useState 심화
    
    일단, 이전에 기초에서 만든 코드를 살짝 수정해보겠습니다. **`handleIncreaseNumber`**라는 함수를 만들어, **`onClick`**에 인자로 전달해주고자 합니다.
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      const handleIncreaseNumber = () => {
        setCount(count + 1)
      }
      return (
         <>
          <h1>{count}</h1>
          <button onClick={handleIncreaseNumber}>숫자 증가</button>
         </>
      )
    }
    
    export default App
    ```
    
    동일하게 동작함을 확인 할 수 있을 것 입니다!! 간단한 작업인 경우, 이전과 같이 작성해도 크게 문제 없으나, 뭔가 복잡한 작업이 많은 경우에는 이러한 식으로, 따로 함수를 만들어 관리하면 다른 사람이 **`해당 코드를 읽기에 숫자를 증가하는 기능`**이구나 하고 이해하기 쉬울 것 입니다.
    
    아래 코드의 동작을 예측해봅시다. 버튼을 누를 때 마다, 몇 씩 증가하게 될 까요?
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      const handleIncreaseNumber = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
      }
      return (
         <>
          <h1>{count}</h1>
          <button onClick={handleIncreaseNumber}>숫자 증가</button>
         </>
      )
    }
    
    export default App
    
    ```
    
    **`setCount`**를 6번 호출 했기에, 6씩 증가할 것 같으나, 실제로는 1씩 증가합니다 .이는 자바스크립트의 **`클로저`**와 깊은 연관이 있습니다. 
    
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures
    
    ![스크린샷 2024-09-09 오후 6.35.30.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/2bb27390-3b77-4ae1-9781-7713b9189b88/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.35.30.png)
    
    먼저 왜 그런지 설명하기에 앞서서 **`Lexical Environment`**에 대해서 설명하고자 합니다.
    
    **`Lexical Environment`**란 함수가 실행될 때, 그 함수 안에서 참조할 수 있는 **변수나 상태 값의 저장소**라고 생각하면 됩니다. 이 환경은 함수가 호출될 때마다 새로운 환경이 생성되는 것이 아니라, 함수가 선언될 당시의 변수를 기억하고 있습니다. (즉, count = 0)
    
    React는 상태를 즉시 업데이트하지 않고, 함수를 실행할 당시의 상태를 기억해 두는 **`렉시컬 환경(Lexical Environment)`**이라는 것을 사용합니다. 그래서, `handleIncreaseNumber` 함수가 실행될 때마다 함수가 실행된 시점의 상태(여기서는 `count = 0`)를 기준으로 값을 계산하게 됩니다.
    
    쉽게 말해, **`handleIncreaseNumber` 함수 안에서 `count`는 0으로 고정된 것처럼 작동**하는 거죠.
    
    ```jsx
    setCount(count + 1); -> 0 + 1
    setCount(count + 1); -> 0 + 1
    setCount(count + 1); -> 0 + 1
    setCount(count + 1); -> 0 + 1
    setCount(count + 1); -> 0 + 1
    setCount(count + 1); -> 0 + 1
    
    // 최종 결과: 1
    ```
    
    우리가 원하는 것은 버튼 클릭 하나에 6씩 증가하는 동작을 원합니다. 
    
    `setState`의 업데이트를 하는 두번째 방식을 활용하면, 지금 문제점을 해결할 수 있습니다!
    
    ```jsx
    // setState는 두가지 방식으로 활용할 수 있다.
    
    // 1. 한번에 값을 업데이트 (batch 방식)
    setCount(count + 1);
    
    // 2. 이전 상태 값을 인자로 전달하여 업데이트 (prev라는 이름은 자유롭게 변경 가능);
    setCount(prev => prev + 1);
    ```
    
    아래와 같이 활용하면 됩니다.
    
    ```jsx
    import './App.css'
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0)
      const handleIncreaseNumber = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
      }
      return (
         <>
          <h1>{count}</h1>
          <button onClick={handleIncreaseNumber}>숫자 증가</button>
         </>
      )
    }
    
    export default App
    
    ```
    
    정상적으로 6씩 증가함을 확인하시면 됩니다.
    
- **`useState`** 객체 상태 업데이트
    
    ### useState로 객체 상태 변화하기
    
    **`useState`**는 위에서 실습해본 숫자가 아닌, 객체 또한 변화 시킬 수 있습니다.
    
    이 때 사용되는 개념이 얕은 복사, 깊은 복사 개념과 이전에 자바스크립트 워크북에서 배운 전개 연산자를 활용하면 매우 유용하게 값을 업데이트 할 수 있습니다.
    
    객체는 숫자와 다르게 **참조 타입**이기 때문에, 객체 상태를 업데이트할 때 **얕은 복사**와 **깊은 복사** 개념을 잘 이해하는 것이 중요합니다.
    
    ### 1. 얕은 복사
    
    얕은 복사는 **한 단계만 복사**하는 방식입니다. 
    
    복사된 객체는 원래 객체와 같은 참조를 가지기 때문에, **내부에 중첩된 객체가 변경되면 원본 객체에도 영향을 미칠 수 있습니다.**
    
    ```jsx
    const [person, setPerson] = useState({
      name: "김용민",
      age: 26,
      nickname: "매튜"
    });
    
    const newPerson = {...person}; // 얕은 복사
    newPerson.nickname = "야호";
    
    console.log(person.nickname); // 여전히 "매튜" 임을 확인할 수 있다.
    ```
    
    ### 2. 깊은 복사
    
    깊은 복사는 객체 내부의 중첩된 모든 값까지 **완전히 새로운 복사본**을 만드는 방식입니다. 이 경우, 복사본을 수정해도 **원본 객체에는 전혀 영향이 없습니다.**
    
    깊은 복사는 **재귀적으로** 객체의 모든 속성을 복사해야 하므로, 직접 구현하거나 `lodash`와 같은 라이브러리의 `cloneDeep`을 활용하거나, **`JSON 방식을 이용`**해서 **`깊은 복사`**를 진행합니다.
    
    ```jsx
    const newPersonDeep = JSON.parse(JSON.stringify(person)); // 깊은 복사
    ```
    
    객체가 단순한 경우 이 방법을 사용할 수 있지만, 함수나 `undefined` 값이 있을 때는 적합하지 않습니다.
    
    ### 실습. useState를 활용하여 객체를 업데이트하기
    
    ```jsx
    import { useState } from 'react';
    
    function App() {
      // 초기 상태로 '김용민', 26, '매튜'를 가진 person 객체를 초기값으로 생성합니다.
      const [person, setPerson] = useState({
        name: "김용민",
        age: 26,
        nickname: "매튜"
      });
    
      // city 값을 새로 추가하여 업데이트하는 함수
      const updateCity = () => {
        setPerson(prevPerson => ({
          ...prevPerson,   // 이전 person 객체의 복사본 생성
          city: "서울"      // 새로 city 값을 추가하거나 업데이트
        }));
      };
    
      // age 값을 1씩 증가시키는 함수
      const increaseAge = () => {
        setPerson(prevPerson => ({
          ...prevPerson,   // 이전 person 객체의 복사본을 생성합니다.
          age: prevPerson.age + 1  // 다른 key의 value는 유지, age 값을 기존 값에서 1 증가
        }));
      };
    
      return (
        <>
          <h1>이름: {person.name}</h1>
          <h2>나이: {person.age}</h2>
          <h3>닉네임: {person.nickname}</h3>
          {person.city && <h4>도시: {person.city}</h4>}
          <button onClick={updateCity}>도시 추가</button>
          <button onClick={increaseAge}>나이 증가</button>
        </>
      );
    }
    
    export default App;
    
    ```
    
    ![스크린샷 2024-09-09 오후 7.03.11.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/510e5b89-e5c0-4da9-baa6-01ad4d4ca7ab/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.03.11.png)
    
    버튼을 눌렀을 때, 객체의 상태를 안전하게 업데이트 할 수 있습니다. **`전개 연산자를 활용`**하여, **`기존 상태를 복사`**하면서, 일부 속성만 업데이트 할 수 있기에 **`불변성을 유지`**하며 상태를 관리할 수 있습니다.