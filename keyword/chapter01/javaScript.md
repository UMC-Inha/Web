- JS에서 사칙연산을 하는 방법을 작성해주세요. 🍠
    - 더하기
        
        + 연산자 사용 
        
        ex) 5+1
        
    - 빼기
        
        - 연산자 사용 
        
        ex) 5-1
        
    - 곱하기
        
        * 연산자 사용 
        
        ex) 3*7
        
    - 나누기
        
        / 연산자 사용, 왼쪽숫자를 오른쪽 숫자로 나눈 몫을 구함 
        
        ex) 5/2 ⇒2 반환
        
    - 나머지 구하기
        
        % 연산자 사용, 왼쪽숫자를 오른쪽 숫자로 나눈 나머지를 구함 
        
        ex) 5%2 ⇒ 1 반환
        
    - 거듭 제곱
        
        ** 연산자 사용, 왼쪽숫자를 오른쪽 숫자로 나눈 몫을 구함 
        
        ex) 5**2 ⇒ 25 반환
        
- JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
    - 동등
        
        == 연산자 사용, 피연산자가 같으면 true 반환
        
        ex) ‘name’ == ‘name’ ⇒ true 반환
        
    - 부등
        
        != 연산자 사용, 피연산자가 다르면 true 반환
        
        ex) 1 != 1 ⇒ false 반환
        
    - 일치
        
        === 연산자 사용, 두 연산자의 값과 타입까지 비교, 같으면 true 반환
        
        ex) 3 === “3” ⇒ false 반환
        
    - 불일치
        
        !== 연산자 사용, 두 연산자의 값과 타입까지 비교, 다르면 true 반환
        
        ex) 3 === “3” ⇒ false 반환
        
    - 큼
        
        > 연산자 사용, 왼쪽 피연산자가 오른쪽 피연산자보다 크면 true 반환
        
        ex) 4 > 2 ⇒ true 반환
        
    - 크거나 같음
        
        >= 연산자 사용, 왼쪽 피연산자가 오른쪽 피연산자보다 크거나 같으면 true 반환
        
        ex) 2 >= 2 ⇒ true 반환
        
    - 작음
        
        < 연산자 사용, 왼쪽 피연산자가 오른쪽 피연산자보다 작으면 true 반환
        
        ex) 4 < 2 ⇒ false 반환
        
    - 작거나 같음
        
        <= 연산자 사용, 왼쪽 피연산자가 오른쪽 피연산자보다 작거나 같으면 true 반환
        
        ex) 2 <= 2 ⇒ true 반환
        
- JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
    - 증가
        
        ++ 연산자 사용, 단항 연산자로 피연산자에 1 더해줌
        
        ex) var = 3;
        
        ++var; ⇒ var는 4가 됨
        
    - 감소
        
        -- 연산자 사용, 단항 연산자로 피연산자에 1 더해줌
        
        ex) var = 3;
        
        var-- ⇒ var는 2가 됨
        
- 연산자 우선순위에 대해 작성해주세요. 🍠
    1. ()
    2. 단항 연산자(--,++,!)
    3. 산술 연산자(+,-,/,%)
    4. 비교 연산자( <,>,==)
    5. 논리 연산자(&&,||)
    6. 대입(복합 대입) 연산자(=, +=, *=)


- string 🍠
    
    💡 string 타입에 대해, 직접 구글링하여 아래에 정리해주세요.
    
    
    문자열을 표현하는데 사용되는 데이터 타입
    
    객체로 활용가능한 property와 method를 가지고 있음
    
    ex) length, replace(), split(), …


- bigint 🍠
    
    💡 bigint 타입에 대해, 직접 구글링하여 아래에 정리해주세요.
    
    Number 원시값이 안정적으로 나타낼 수 있는 최대치인 2^53-1 보다 큰 정수를 표현할 수 있는 내장 객체
    
    - 호출 방법
        
        정수 리터럴 뒤에 n을 붙이거나 함수 BigInt()를 호출해 생성
        
        ex) const biggestInt = 9007199254740991n;
              const biggestInt = BigInt( 9007199254740991);
        
    - number와의 차이
        
        -내장 Math객체의 method 사용 불가
        
        - number와 혼합해서 사용 불가
        
        - >>>연산 사용불가



배열
- 다양한 `Array method`에 대해 정리해주세요. 🍠
    - sort 🍠
        
        배열을 정렬 해줌
        
        - 기본형태
            
            arr.sort([compareFunction]);
            
        - 주의 할점
            
            compareFunction을 생략시, 배열의 element들을 문자열로 취급하여, 유니코드 값 순서대로 정렬
            
            ex) 잘못된 예
            
            ```jsx
            const arr = [2, 1, 3, 10];
            
            arr.sort();
            
            //output -> [1,10,2,3] 이 됨
            ```
            
            ex) 올바른 예
            
            ```jsx
            const arr = [2, 1, 3, 10];
            
            arr.sort(function(a, b)  {
              if(a > b) return 1;
              if(a === b) return 0;
              if(a < b) return -1;
            });
            
            //output -> [1,2,3,10];
            ```
            
    - join 🍠
        
        배열의 모든 요소를 연결해 하나의 문자열로 만듦
        
        - 기본형태
            
            arr.join([separator])
            
        - separator
            
            배열의 각 요소를 구분할 문자열
            
        - 예시
        
        ```jsx
        const fruits = ["사과", "바나나", "딸기"];
        
        console.log(fruits.join());
        // "사과,바나나,딸기"
        
        console.log(fruits.join(""));
        // "사과바나나딸기"
        console.log(fruits.join("-"));
        // "사과-바나나-딸기"
        ```
        
    - reverse 🍠
        
        배열의 요소 순서를 역순으로 정렬하는 함수.
        
        원본 배열을 직접 수정함, 새로운 배열 반환x
        
        - 기본형태
            
            arr.reverse()
            
        - 예시
        
        ```jsx
        const arr = [1, 2, 3, 4, 5];
        const reversedArr = arr.reverse();
        
        /* 배열의 요소 순서를 역순으로 정렬합니다. */
        console.log(reversedArr); // 출력: [5, 4, 3, 2, 1]
        
        /* 원본 배열을 직접 수정합니다. */
        console.log(arr); // 출력: [5, 4, 3, 2, 1]
        ```
        
    - splice 🍠
        
        배열의 특정 위치에 있는 요소를 제거하거나 새 요소 추가하는데 사용
        
        - 기본형태
            
            arr.splice(`start` , `deleteCount`, `item1, ..., itemX`).
            
            - `start` : 배열에서 변경을 시작할 위치를 지정한다.만약 음수인 경우, 배열의 끝에서부터 위치를 계산한다.
            - `deleteCount (선택 사항)` : start에서부터 제거할 요소의 수를 지정한다. 이 값이 0이면 어떤 요소도 제거되지 않는다
            - `item1, ..., itemX (선택 사항)` : 배열에 추가할 요소를 지정한다.
        - 예시
            
            ```jsx
            let fruits = ['apple', 'banana', 'cherry'];
            fruits.splice(1, 1);
            console.log(fruits);  // ['apple', 'cherry']
            ```
            
            ```jsx
            let fruits = ['apple', 'banana', 'cherry'];
            fruits.splice(1, 0, 'kiwi');
            console.log(fruits);  // ['apple', 'kiwi', 'banana', 'cherry']
            ```
            
    - slice 🍠
        
        배열의 특정 범위의 요소를 잘라내어 추출한 결과를 새로운 배열로 반환하는 함수(원본 배열은 변화 x)
        
        - 기본 형태
            
            arr.slice(start, end)
            
        - 예시
        
        ```jsx
        // 배열을 만듭니다.
        const colors = ["red", "green", "blue", "orange", "yellow"];
        
        // 배열의 특정 범위의 요소를 추출하여 새로운 배열을 반환
        const slicedColors = colors.slice(1, 3); // 매개변수 설명을 참조하세요.
        
        // 결과를 출력합니다.
        console.log(slicedColors); // 출력: ['green', 'blue', 'orange']
        
        // 이때 원본 배열은 바뀌지 않습니다.
        console.log(colors); // 출력: ['red', 'green', 'blue', 'orange', 'yellow']
        ```
        
    - find 🍠
        
        배열에서 특정 조건을 만족하는 요소를 찾아 첫번째 요소를 반환하는 함수
        
        - 기본형태
            
            arr.find(callbackFunction);
            
        - 예시
            
            ```jsx
            const people = [
                {name: "Alice", age: 30},
                {name: "Bob", age: 25},
                {name: "Charlie", age: 35}
            ];
            
            const targetName = "Bob";
            const person = people.find(obj => obj.name === targetName);
            
            console.log(person); // 출력: {name: "Bob", age: 25}
            ```
            
    - filter 🍠
        
        배열의 요소를 순회하면서 콜백 함수를 사용하여 원하는 조건에 따라 필터링하는 함수
        
        - 기본형태
            
            arr.filter(callbackFunction);
            
        - 예시
            
            ```jsx
            const words = ["apple", "banana", "cherry", "date", "fig"];
            const longWords = words.filter((word) => word.length >= 5);
            console.log(longWords); // 출력: ["apple", "banana", "cherry"]
            ```
            
    - map 🍠
        
        배열을 순회하며 지정된 콜백함수를 적용하여 각 요소를 변환하고, 그 변환된 값을 모아서 새로운 배열을 반환하는 함수( 기존 배열은 그대로)
        
        - 기본형태
            
            arr.map(callbackFunction);
            
            →callbackfunction은 반드시 return 값이 있어야함
            
        - 예시
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            
            const doubledNumbers = numbers.map(function(number) {
                return number * 2; // 매핑된 결과를 새로운 배열로 반환
            });
            
            console.log(doubledNumbers);
            // 출력: [2, 4, 6, 8, 10]
            ```
            
    - reduce 🍠
        
        배열의 모든 요소에 콜백 함수를 적용하여 하나의 결과 값을 생성하는 함수
        
        - 기본형태
            
            arr.reduce(callbackFunc, initialValue);
            
            -callbackFunction 형태
            
            callbackFunc(accumulator, currentValue){
            
            return;
            
            }
            
        - 예시
            
            ```jsx
            const numbers = [5, 3, 9, 2, 7];
            
            const max = (max, item) => {
            return (item > max) ? item : max;
            }
            
            const result = numbers.reduce(max, numbers[0]);
            console.log(result); // 출력: 9
            ```
            
    - some  🍠
        
        배열의 특정 조건을 만족하는 요소가 있는지 확인하는 함수,
        
        하나의 요소라도 만족 시 true, 아니면 false 반환
        
        - 기본 형태
            
            arr.some(callbackFunc);
            
        - 예시
            
            ```jsx
            const numbers = [5, 3, 9, 2, 7];
            
            const max = (max, item) => {
                return (item > max) ? item : max;
            }
            
            const result = numbers.reduce(max, numbers[0]);
            console.log(result); // 출력: 9
            ```
            
    - every 🍠
        
        배열의 특정 조건을 만족하는 요소가 있는지 확인하는 함수,
        
        모든 요소 만족 시 true, 하나라도 만족하지 않으면 false 반환
        
        - 기본형태
            
            arr.every(callbackFunc);
            
        - 예시
            
            ```jsx
            const numbers = [2, 5, 8, 1, 10];
            
            const allInRange = numbers.every(num => num >= 1 && num <= 10);
            console.log(allInRange);  // true (모든 숫자가 1과 10 사이에 있음)
            ```
            
    - forEach 🍠
        
        배열을 순회해서 각 요소를 콜백 함수로 처리하기 위한 함수
        
        - 기본형태
            
            arr.forEach(function(currentValue));
            
        - 예시
            
            forEach의 반환값은 항상 undefined임
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            
            const result = numbers.forEach(function(number) {
                return number * 2; // 콜백 함수에서 어떤 값을 반환해도 forEach()의 반환 값은 여전히 undefined
            });
            
            console.log(result); // 출력: undefined
            ```
            
        - 바른 사용 예시
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            let sum = 0;
            
            numbers.forEach(function(number) {
                sum += number;
            });
            
            console.log(sum); // 출력: 15 (1 + 2 + 3 + 4 + 5)
            ```


forEach()와 map()의 차이
    map은 새로운 배열을 return해주지만 forEach()는 return이 항상 undefined임
    즉, forEach()는 순회하는 용도로만 사용

호이스팅 (Hoisting) 🍠

    함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언 하는 것

    - 함수 선언문
        
        ```jsx
        var num = subtraction(5, 3); 
        function subtraction(a, b) {
            return a - b;
        }
        
        console.log(num);
        //output: 2
        ```
        
    - 함수 표현식
        
        ```jsx
        var num = subtraction2(5, 3); 
        let subtraction2 = function (a, b) {
            return a - b;
        }
        
        console.log(num);
        //output: ReferenceError: subtraction2 is not defined
        ```
        
        함수 선언문에서는 hoisting이 적용되는데 함수 표현식에서는 hoisting이 적용되지 않는 것을 알 수 있다.

클래스
    - getter 🍠
    
    객체의 속성 값을 반환하는 method
    
    객체 속성에 바로 접근하지 않고 method를 통해 경유해서 속성 값을 반환함
    
    get으로 선언
    
    - 예시
        
        ```jsx
        // 클래스 선언
        class Student {
        	constructor(name, school) {
        		// 필드
        		this.name = name;
        		this.school = school;
        	}
        	
        	// 메소드
        	introduction() {
        		console.log(`안녕하세요, ${this.name}입니다. ${this.school}에 다니고있습니다`)
        	}
        	get name(){
        		return this.name;
        	}
        	get school(){
        		return this.school;
        	}
        }
        
        const Mathew = new Student('mathew',"상명대학교");
        console.log(Mathew.getName);
        console.log(Mathew.getSchool);
        //mathew
        	상명대학교
        ```
    
    - setter 🍠
    
    객체의 속성 값을 설정, 변경하는 method
    
    객체 속성에 바로 접근하지 않고 method를 통해 경유해서 속성 값을 설정하거나 변경함
    
    set으로 선언
    
    - 예시
        
        ```jsx
        // 클래스 선언
        class Student {
        	constructor(name, school) {
        		// 필드
        		this.name = name;
        		this.school = school;   
        	}
        	
        	// 메소드
        	introduction() {
        		console.log(`안녕하세요, ${this.name}입니다. ${this.school}에 다니고있습니다`)
        	}
        	get getName(){
        		return this.name;
        	}
        	get getSchool(){
        		return this.school;
        	}
        	set setName(value){
        		this.name = value;
        	}
        	set setSchool(value){
        		this.school = value;
        	}
        }
        
        const Mathew = new Student('mathew',"상명대학교");
        console.log(Mathew.getSchool);
        Mathew.setSchool = "inha"
        console.log(Mathew.getSchool);
        //삼명대학교
        	inha
        ```

DOM 조작 🍠
- 태그 가져오기
    
    ```jsx
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello world</title>
      </head>
      <body>
        <div id="first">첫 번째</div>
        <div name="second">두 번째</div>
        <div class="third">세 번째</div>
      </body>
    </html>
    ```
    
    1. id 속성으로 가져오기
        
        getElementById()
        
        ex) const element1 = document.getElementById(”first”);
        
    2. name 속성으로 가져오기
        
        getElementByName();
        
        ex)const element2 = document.getElementByName(”second”);
        
    3. HTML Tag로 가져오기
        
        getElementByTagName();
        
        ex)const element3 = document.getElementByTagName(”div”);
        
    4. class 속성으로 가져오기
        
        getElementByClassName();
        
        ex) const element4 = document.getElementByClassName(”third”);
        
    
    -이때 getElementByTagName()과 getElementByClassName()은 객체 배열을 가져와 배열 접근을 해야함
    
    ex) element3[0]

- 이벤트 리스너 추가하기
    - 기본 형식
        
        element.addEventListener(event, function, useCapture);
        
    - 예시
        
        ```jsx
        const element = document.getElementById("myBtn");
        element.addEventListener("click", myFunction);
        
        function myFunction() {
          alert ("Hello World!");
        }
        ```
        
        “myBtn”이라는 id를 가지고 있는 태그를 클릭했을때 Hello world를 alert해주는 함수가 실행
    - 이벤트 리스너 제거하기
    - 기본형식
        
        element.removeEventListener(event, function);
        
        -addEventLisnter를 사용할때 익명함수를 등록했다면, 익명함수에 접근할 방법이 없어서 이벤트 제거 불가능해짐.
        
        따로 함수를 정의해서 바인딩하는 방식으로 해야 이벤트 제거 가능
        
    - 예시
    - 
    
    ```jsx
    // 이벤트 콜백함수를 따로 정의
    function onClickFunction(){
      alert('Hello World !')
    }
    
    // 이벤트 등록
    element.addEventListener('click', onClickFunction)
    
    // 이벤트 제거
    // element에 걸려있는 click이벤트와 콜백함수 onClickFunction을 제거
    element.removeEventListener('click', onClickFunction)
    ```
    
- 키보드와 마우스 이벤트
    - 키보드
        - 이벤트 종류
            - keydown : 모든 키를 눌렀을 때 한번만 발생
            - keyup : 누르고 있던 키를 놓았을 때 한번만 발생
            - keypress : 문자 키를 눌렀을때 연속적으로 발생
        - 예시
            
            ```jsx
            // 키보드 이벤트 처리
            inputField.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    // 엔터 키를 눌렀을 때 동작
                    console.log('엔터 키가 눌렸습니다.');
                }
            });
            ```
            
        - event.key
            
            문자, 소문자 a는 a, 대문자 A는 A 반환
            
        - event.code
            
            물리적인 키 코드, 소문자 a도 대문자 A도 key A 반환
            
    - 마우스
        - 이벤트 종류
            - click : 마우스 버튼을 클릭했을 때
            - dbclick : 마우스 버튼을 더블 클릭했을 때
            - mousedown : 마우스 버튼을 누르고 있을 때
            - mouseup : 누르고 있던 마우스 버튼을 뗄 때
            - mousemove : 마우스를 움직일 때 (터치스크린에서 동작 x)
            - mouseover : 마우스를 요소 위로 움직였을 때 (터치스크린에서 동작 x)
            - mouseout : 마우스를 요소 밖으로 움직였을 때 (터치스크린에서 동작 x)
        - 예시
            
            ```jsx
            element.addEventListener('click', function() {
                console.log('요소가 클릭되었습니다.');
            });
            //버튼 클릭시 -> "요소가 클릭되었습니다"
            ```
            
        - event.button
            - 왼쪽 클릭 : 0
            - 휠 클릭 : 1
            - 오른쪽 클릭 : 2
- 태그 속성 다루기
    - hasAttribute(attribute) : 지정한 어트리뷰트를 가지고 있는지 검사
    - getAttribute(attribute) : 어트리뷰트의 값을 취득
    - setAttribute(attribute, value) : 어트리뷰트의 값을 value로 변경
    - removeAttribute(attribute) : 지정한 어트리뷰트를 제거
    - .attributes : 속성들을 모아서 배열로 반환
    - 예시)
        
        ```jsx
        if (!input.hasAttribute('value')) {  // value 어트리뷰트가 존재하지 않으면
               // value 어트리뷰트를 추가하고 값으로 'hello!'를 설정
               input.setAttribute('value', 'hello!');
             }
        
             // value 어트리뷰트 값을 취득
             console.log(input.getAttribute('value')); // hello!
        
             // value 어트리뷰트를 제거
             input.removeAttribute('value');
        
        출처: https://inpa.tistory.com/entry/JS-📚-DOM-문법-💯-총정리 [Inpa Dev 👨‍💻:티스토리]
        ```
        
- 부모와 자식 태그 찾기
    - 노드 탐색
        
        node에는 element, text, comment 등이 포함
        
        - 부모 노드 탐색
            - parentnode: 부모 노드 리턴
        - 자식 노드 탐색
            - childNodes : 자식 노드 목록을 nodeList형태로 리턴
            - firstChild : 자식 노드 중, 첫번째 자식 노드를 리턴
            - lastChild : 자식 노드 중, 마지막 자식 노드를 리턴
        - 형제  노드 탐색
            - previousSibling : 같은 레벨의 노드 중, 이전 노드를 리턴
            - nextSibling : 같은 레벨의 노드 중, 다음 노드를 리턴
    - element 탐색
        
        element는 여러 node 타입 중 한 종류
        
        <p>, <div>, <a> 같은 태그를 사용해서 작성된 노드
        
        - 부모 요소 탐색
            - parentElement : 부모 요소를 리턴
        - 자식 요소 탐색
            - children : 자식 요소 목록을 ‘HTMLCollection’ 형태로 리턴
            - firstElementChild : 자식 요소 중, 첫번째 요소를 리턴
            - lastElementChild : 자식 요소 중, 마지막 요소를 리턴
        - 형제 요소 탐색
            - previousElementSibling : 같은 레벨의 요소 중, 이전 요소를 리턴
            - nextElementSibling: 같은 레벨의 요소 중, 다음 요소를 리턴
    - 예시
        
        ```jsx
            <ul id = 'color' >
                <li id = 'red'>  red </li>
                <li id = 'blue'> blue </li>
                <li id = 'yellow'>  yellow </li>
            </ul>
            
            const ul = document.getElementById('color');
        		ul.firstChild;  // #text
        		ul.lastChild;   // #text
        		ul.firstElementChild; // <li id="red">…</li>
        		ul.lastElementChild; // <li id="yellow">…</li>
        ```
        
- 새로운 태그 만들기
    - DOM 객체 동적 생성
        1. document.createElement(”태그이름”)으로 HTML 태그의 DOM객체 생성
        2. DOM 객체 생성 후 innerHTML 프로퍼티를 이용해서 생성한 객체 태그에 HTML 텍스트 삽입
    - DOM 트리에 삽입
        1. 동적으로 생성한 DOM 객체를 부모.appendChild(DOM 객체)를 이용해서 DOM 트리에 삽입
        2. 부모.insertBefore(DOM 객체, 기존 자식)을 이용해서 다른 형제노드들과 연결
    - 예시
        
        ```jsx
              let newDiv = document.createElement("div");
                newDiv.innerHTML = "새롭게 생성했다!";
                newDiv.setAttribute("id", "Ndiv");
                newDiv.style.backgroundColor = "blue";
                let par = document.getElementsByTagName("h2")[0];
                par.appendChild(newDiv);
        ```
        
- 태그 복제하기
    - 기본형태
        
         node.cloneNode(deep);
        
    - 파라미터
        - deep
            
            요소의 하위 요소까지 모두 복사하려면 true
            
            요소의 하위 요소를 제외하고 복사하려면 false
            
    - return 값
        
        dupNode , 복사한 node를 리턴
        
    - 예시
        
        ```jsx
        const testDiv = document.getElementById('textBlock');
        const newNode = testDiv.cloneNode(false);
        
        testDiv.after(newNode);
        ```