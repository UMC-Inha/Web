- React의 동작 원리
    
    1. SPA (Single Page Application)
    - 정리
        - SPA란?
            
            단일 페이지로 구성된 웹 애플리케이션
            
             기존의 경우 SSR(server side rendering) 방식을 사용했는데, 화면에 보여질 리소스를 서버에 요청, 서버로부터 받아온 리소스를 렌더링 하는 방식이었음
            
            SPA의 경우 렌더링 역할을 서버에 넘기지 않고 브라우저에서 바로 처리하는 방식.
            
            웹 애플리케이션에 필요한 모든 정적 리소스를 최초에 한번 다운로드하고 이후 새로운 페이지 요청시 페이지 갱신에 필요한 데이터만 전달받아 페이지 갱신
            
        - 장점
            - 전체적인 트레픽 감소와 렌더링 효율이 좋음
            - 새로고침 없는 빠른 화면 이동
            - 앱처럼 자연스러운 사용자 경험
            - 모듈화, 컴포넌트 개발이 용이
        - 단점
            - 초기 구동 속도가 느림
            - 검색엔진 최적화가 어려움
    2. User Interface Library 
    - 정리
        - UI Library란?
            
            자주 사용되고 겹치는 기능, 디자인을 가진 요소를 만들어 컴포넌트로 구현한 UI component들을 모아 놓은 콜렉션
            
        - 장점
            - atomic design
                
                웹이나 서비스 디자인에 적용되는 스타일의 규칙인 ‘디자인 시스템’으로 atomic design이 존재. 
                
                Atoms, molecules, origanisms, templates, pages 5가지의 레벨로 컴포넌트가 나뉨.
                
                atoms의 단계의 컴포넌트를 조합하여 molecules, molecules를 조합하여 origanisms 같은 형식으로 컴포넌트를 조합함.
                
                디자인의 통일성을 줌
                
            - 재사용이 가능하여 기능성이 높음
            - 디자이너의 필요성이 낮아짐
            - 이미 개발되어있는것을 가져오는 것이라 개발 속도 빠름
            - 호환성 좋음
        - 단점
            - 이미 만들어져 있는 것을 사용해야하기 때문에 유연성 떨어짐
            - 독창성이 떨어짐
    3. Functional Component (함수형 컴포넌트)
    - 정리
        - React Component 선언 방식
            - Class Component(클래스형 컴포넌트)
                
                코드안에 라이프사이클링 기능과 state 기능 구현가능
                
                render() 함수가 반드시 필요
                
            - Functional Component(함수형 컴포넌트)
                
                hook을 사용하여 라이프사이클링 기능과 state기능 구현 가능
                
        - Class component vs Functional Component
            - 선언 방식의 차이
                - 클래스형 컴포넌트
                    
                    ```jsx
                    import React, {component} from 'react';
                    
                    class App extends Component{
                    		render(){
                    			const text = 'Hello world';
                    			return <div className='react'>{text}</div>
                    		}
                    }
                    
                    export default App;
                    ```
                    
                    class 키워드 필요, component를 상속 받아야함, 화면에 표시하기 위해 render()필요
                    
                - 함수형 컴포넌트
                    
                    ```jsx
                    import React from 'react';
                    
                    const App = ()=>{
                    	const text = 'Hello world';
                    	return <div className = 'react'>{text}</div>
                    }
                    
                    export default App;
                    ```
                    
                    클래스형과 비교하여 코드가 간결함, 함수 자체가 렌더 함수이기에 render() 필요없음, Component상속 받지 않아도 됨
                    
            - State 사용 차이
                - 클래스형 컴포넌트
                    
                    constructor안에서 this.state를 통해 초기 값 설정, 클래스형 컴포넌트의 state는 객체 형식. this.setState함수로도 state 변경가능
                    
                    ```jsx
                    constructor(props){
                    	super(props);
                    	
                    	this.state = {
                    		text : "hello"
                    	};
                    }
                    
                    //constructor 없는 경우
                    class App extends Component{
                    	state = {
                    		text : "hello"
                    	}
                    }
                    
                    onClick={()=>{
                    	this.setState({text: "hi"});
                    }}
                    ```
                    
                - 함수형 컴포넌트
                    
                    useState으로 state핸들링함. useState 함수 호출시 배열이 반환되는데, 첫번째 원소는 state , 두번째 원소는 state를 변경해주는 함수, useState의 파라미터는 state의 초기값
                    
                    ```jsx
                    const App = () =>{
                    	const [text,setText] = useState('hello');
                    	
                    	const onButtonClick = {()=>{
                    		setText('hi');
                    	}}
                    }
                    ```
                    
            - props 사용 차이
                - 클래스형 컴포넌트
                    
                    this.props로 불러옴
                    
                    ```jsx
                    const App extends Component{
                    	render(){
                    		const {name,age} = this.props;
                    		return(
                    			<div>
                    				이름: {name} 나이:{age}
                    			</div>
                    		)
                    	}
                    }
                    ```
                    
                - 함수형 컴포넌트
                    
                    렌더함수의 parameter로 props 전달받아 사용
                    
                    ```jsx
                    const App = ({name,age})=>{
                    	return(
                    		<div>
                    			이름: {name} 나이:{age}
                    		</div>
                    	)
                    }
                    ```
                    
            - 이벤트 핸들링
                - 클래스형 컴포넌트
                    
                    함수 선언 시 애로우로 바로 선언이 가능, 적용하기 위해선 this를 붙여야함
                    
                    ```jsx
                    handleClick = e =>{...}
                    
                    render(){
                    	return(
                    		<>
                    			<input type = 'button' onClick = {this.handleClick}버튼</input>
                    		</>
                    	)
                    }
                    ```
                    
                - 함수형 컴포넌트
                    
                    const 함수 형태로 선언해야함 , this 필요없음
                    
                    ```jsx
                    const handleClick = () =>{...}
                    render(){
                    	return(
                    		<>
                    			<input type = 'button' onClick = {handleClick}버튼</input>
                    		</>
                    	)
                    }
                    ```
                    
    4. Virtual DOM (가상 DOM)
    - 정리
        - Virtual DOM 이란?
            
            실제 DOM과 같은 내용을 담고 있는 복사본. 실제 DOM이 아닌 js객체형태로 메모리 안에 저장되어있음
            
        - Virtual DOM을 사용하는 이유
            - 실제 DOM의 동작 과정
                
                폰트의 색만 바꾸는 경우
                
                1.  브라우저는 HTML탐색후 해당 Element 찾음
                2. 해당 Element와 자식 Element들을 DOM에서 제거
                3. 새롭게 수정된 element로 이를 교체 
            - virtual DOM의 경우
                
                실제 브라우저에 접근하지 않고 가상돔에 접근하여 수정
                
                react의 virtual DOM은 2가지임
                
                1. 랜더링 이전 화면 구조를 나타내는 가상돔
                2. 랜더링 이후 화면 구조를 나타내는 가상돔
                - virtual DOM 동작과정
                    
                    폰트 색만 바꾸는 경우
                    
                    1. state가 변경될 때마다 어떤 element가 변했는지 첫번째 가상돔과 두번째 가상돔을 비교
                    2.  차이가 발생한 부분만 실제 DOM에 적용
        - 주의할점
            
            virtual DOM이 실제 DOM보다 무조건 빠른 것은 아님, 가상돔을 비교한다는 과정을 더 추가했기 때문에
            
    5. 동시성 렌더링
    - 정리
        - 동시성 랜더링이란?
            
            랜더링을 긴급한 업데이트, 전환 업데이트로 나눠 긴급한 업데이트부터 진행함
            
            우선순위를 지정하여 긴급한 업데이트를 우선 진행해 UI 차단을 최소화 시킴
            
        - startTransition 함수
            
            startTransition으로 감싸진 set 함수는 전환 업데이트로 처리됨
            
            - 기본 형태
                
                startTransition(scope)
                
            - 예시
                
                ```jsx
                import { startTransition } from 'react';
                
                // 긴급한 업데이트 : 입력하고 있는 값
                setInputValue(input);
                
                // startTransition으로 래핑된 업데이트는 긴급하지 않은 것으로 처리되고,
                // 더 긴급한 업데이트가 들어오면 중단
                startTransition(() => {
                  // 전환 업데이트: 입력값에 따른 쿼리값
                  setSearchQuery(input);
                });
                
                ```
                
        - useTransition 훅
            
            startTransition 함수와 isPending을 반환하는 훅으로, 지연중일 경우
            
            isPending은 true가 됨
            
            - 기본형태
                
                const [isPending, startTransition] = useTransition()
                
                - isPending : 지연 중인 전환이 있는지 여부를 알려주는 플래그
        - useDeferredValue 훅
            
            startTransition 함수를 사용하지 못하는 경우, set 함수에 접근할 수 없거나 props를 지연하고 싶을 경우 사용되는 훅으로, 반환 값으로 화면이 업데이트될 때 지연처리됨
            
            - 기본형태
                
                const defferedValue = useDefferedValue(value);
                
                - value : 지연하려는 값, 모든 타입이 올 수 있음
            - 예시
                
                ```jsx
                const deferredQuery = useDeferredValue(query);
                const isStale = query !== deferredQuery; 
                // query와 deferredQuery 값이 다를 경우 지연중임
                ```
                
                useTransition 훅과 다르게 지연중임을 나타내는 값을 반환 하지 않아서 , 지연하려는 값과 비교연산을 통해 지연 중 임을 알 수 있음

여러개를 반환하고 싶은 경우는 어떻게 해야 할까요?
코드와, 이유를 간략하게 작성해주세요.

- 답변 🍠
    import './App.css'

    function App() {
    return (
        <div>
        <strong>상명대학교</strong>
        <p>매튜/김용민</p>
        </div>
    )
    }

    export default App

    이유:  JSX를 반환할 때 꼭 하나의 태그만을 사용해야 하는데 <strong>과 <p>태그

    2가지를 사용했기 때문에 불가능함. container태그를 이용해서 하나의 태그로 묶어줘야함


- 얕은 복사 🍠
    - 얕은 복사란?
        
        객체의 최상위 레벨의 속성만 복사하는 것을 의미. 이 경우, 중첩된 객체나 배열 등은 참조값만 복사되어 원본과 복사본이 내부 데이터를 공유하게 됨
        
        구현이 빠르고 간단하지만 중첩된 객체나 배열을 다룰 때 원본 데이터의 변경이 복사본에도 영향을 미치기 때문에 예기치못한 문제가 발생 할 수 있음
        
    - 얕은 복사 방법
        - Object.assign()
            
            예시)
            
            ```jsx
            let newObj = Object.assign({},obj);
            ```
            
        - 스프레드 연산자 ( …)
            
            예시)
            
            ```jsx
            let newObj = {...Object}
            ```
            
- 깊은 복사 🍠
    - 깊은 복사란?
        
        객체에 포함된 모든 레벨의 값을 완전히 새로운 복사본으로 생성하는 것을 의미.
        
        완전한 복사본 이기에 원본과는 아무런 연결고리가 없음
        
        구현이 복잡하여 시간이 더 걸리 수 있지만, 데이터의 무결성을 유지할 수 있음
        
    - 깊은 복사 방법
        - JSON.parse()와JSON.stringify() 사용
            
            JSON.stringify()는 객체를 json 문자열로 변환 → 원본 객체와의 참조가 모두 끊어짐
            
            JSON.parse()는 json 문자열을 다시 객체로 만들어줌
            
            예시)
            
            ```jsx
            const newObj = JSON.parse(JSON.stringify(Object));
            ```
            
            - 단점
                - 느림
                - 객체가 function일 경우 undefined로 처리함
        - 재귀함수
            
            예시)
            
            ```jsx
            function deepCopy(object) { 
            	 if (object === null || typeof object !== "object") {
            	     return object;  
            	 }  
            	 // 객체인지 배열인지 판단  
            	 const copy = Array.isArray(object) ? [] : {}; 
            	   
            	 for (let key of Object.keys(object)) { 
            	    copy[key] = deepCopy(object[key]); 
            	 }
            	 return copy;
            }
              
              
            const newObj = deepCopy(object);
            ```
            
            - 단점
                
                복잡함