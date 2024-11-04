# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

### 키워드 정리 🍠

- `useEffect`  🍠
    
    useEffect() 함수는 React component가 렌더링 될 때마다 특정 작업(Sied effect)을 실행할 수 있도록 하는 리액트 Hook.
    
    react는 총 3가지 생명주기 메소드가 있다.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/029d6b61-1ff2-477f-bd1f-89414ba4140d/image.png)
    
    1. componentDidMount
        - 컴포넌트 생성 시 함수 실행
        
        ```cpp
        useEffect(()=>{
        },[])
        ```
        
    2. componentDidUpdate
        - deps 변화 or mount 시 함수실행
        
        ```cpp
        useeffect(()=>{
        },[deps])
        ```
        
    3. componentWillUnmount
        - umount시, deps 변화 직전 실행
        
        ```cpp
        useEffect(()=>{
        	return ()=>{
        	}
        },[deps]);
        ```
        
- `try, catch, finally` 구문  🍠
    
    `try` 블록과 `catch` 블록, `finally` 블록 중 하나 혹은 두 블록으로 구성됩니다. `try` 블록 내 코드가 먼저 실행되고, 만약 그 안에서 예외가 발생한다면 `catch` 블록 내 코드가 실행됩니다. `finally` 블록 내 코드는 항상 실행되며, 제어 흐름이 전체 구문을 종료하기 전에 실행됩니다.
    
    ```cpp
    try {
      nonExistentFunction();
    } catch (error) {
      console.error(error);
      // Expected output: ReferenceError: nonExistentFunction is not defined
      // (Note: the exact output may be browser-dependent)
    }
    
    ```
    
- `axios`  🍠
    
    Axios는 node.js와 브라우저를 위한 [*Promise 기반*](https://javascript.info/promise-basics) HTTP 클라이언트
    
    - 예시
    
    ```cpp
    const option ={
      url ='http://localhost3000/test`
       method:'POST',
       header:{
         'Accept':'application/json',
         'Content-Type':'application/json';charset=UTP-8'
      },
      data:{
      	name:'sewon',
        	age:20
      }
    
      axios(options)
      	.then(response => console.log(response))
    ```
    
- `fetch`  🍠
    
    javascript의 AJAX를 위한 built-in library
    
    ```cpp
    const url ='http://localhost3000/test`
    const option ={
       method:'POST',
       header:{
         'Accept':'application/json',
         'Content-Type':'application/json';charset=UTP-8'
      },
      body:JSON.stringify({
      	name:'sewon',
        	age:20
      })
    
      fetch(url,options)
      	.then(response => console.log(response))
    ```
    
- `axios` vs `fetch` (차이점)  🍠
    - axios는 interceptor가능
        - Authorization 등 protected url…
    - 자동 stringify
    - axios는 400, 500에러 reject처리
- `.env` 파일에는 어떤 내용들을 관리할까요?  🍠
    
    client상에 가려야하는 값들을 저장해 놓는다. 
    
    ex) api key, authorization 관련 key
    
- **`custom hook ?`**
    
    3가지 목적을 달성하기 위해 사용한다.
    
    - 코드, 로직의 간결해지고 가독성이 좋아진다
    - 필요없는 반복을 줄이고 재사용성을 높인다
    - 수정사항이 있을 시 커스텀 훅에서만 수정하면 되기 때문에 유지보수에 용이하다
    
    - 사용 전
    
    ```cpp
    function App() {
      const [user, setUser] = useState([]);
      const url = 'https//하나둘셋넷다섯';
      
      useEffect(() => {
        fetch(url)
         .then(res => res.json())
         .then(res => setUser(res))
      }, [])
    ```
    
    - 사용 후
    
    ```cpp
    import useFetch from './hooks/useFetch';
    
    function App() {
      const user = useFetch('https://하나둘셋넷다섯');
      
      return (
        //JSX
        );
    };
    ```