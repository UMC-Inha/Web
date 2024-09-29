- JS에서 사칙연산을 하는 방법을 작성해주세요. 🍠
    - 더하기
        
        console.log(1+1)
        
    - 빼기
        
        console.log(1+1)
        
    - 곱하기
        
        console.log(1*1)
        
    - 나누기
        
        console.log(2/1)
        
    - 나머지 구하기
        
        console.log(10 % 4)
        
    - 거듭 제곱
        
        console.log(2**2)
        
- JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
    
    console.log(3>2)
    
    console.log(3≥2)
    
    console.log(3==2)
    
    console.log(3≠2)
    
- JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
    - 전위 연산자
        
        ```jsx
        let x = 5, result;
        
        result = ++x; //result=6, x=6;
        
        result = --x; //result=5, x=5;
        ```
        
    - 후위 연산자
        
        ```jsx
        let x = 5, result;
        
        result = x++; //result=5, x=6;
        
        result = x--; //result=6, x=5;
        ```
        
- 연산자 우선순위에 대해 작성해주세요. 🍠
    1. 괄호
    2. 증감/논리 연산자 / not
    3. 산술 연산자 (곱셈, 나눗셈, 나머지)
    4. 산술 연산자(더하기, 빼기)
    5. 비교 연산자 대소
    6. 비교 연산자 같음
    7. 논리 연산자 and
    8. 논리 연산자 or
    9. 대입 연산자

- string 🍠
    
    ### string

    
    - 문자열 표현하는 데 사용하는 데이터 타입
    - `.length` → property 가짐
    - `.charAt( )` → 특정 자리 위치한 문자 반환
    - `.replace( , )` → 문자열 치환
    - `.toUpperCase()` → 문자열 대문자 치환
    - `.split(” “)` → “”를 기준으로 문자열을 나눠 배열로 반환

 - bigint 🍠
    
    ### bigint

    
    - 임의의 정밀도로 정수를 나타내는 숫자 데이터 타입
    - 숫자에 대한 안전한 정수의 제한을 초과하여 큰 정수를 안전하게 저장하고 조작할 수 있음
    - num과 일치하지 않지만 동등, 일반적인 방법으로 비교, 같은 논리
    1. 정수 리터럴 뒤에 n 붙이기
    
    ```jsx
    let x = 3;
    console.log(typeof x); // number
    
    x = 3n;
    console.log(typeof x); // bigint
    ```
    
    1. bigint() 생성자 함수
    
    ```jsx
    let x = 3;
    console.log(typeof x); // number
    
    x = BigInt(x);
    console.log(typeof x); // bigint
    ```
    
    1. bigint 판별방법
    
    ```jsx
    typeof 1n === 'bigint'; // true
    typeof BigInt('1') === 'bigint'; // true
    ```   

- 다양한 `Array method`에 대해 정리해주세요. 🍠
    - sort 🍠
        - 배열의 요소를 적절하게 정렬
        - `array.sort([compareFunction])`
            - 매개변수로 비교함수를 받을 수 있음
            - 기본 정렬 순서는 오름차순(문자열의 유니코드 코드 포인트 따름)
    - join 🍠
        - 배열의 모든 요소를 연결해 하나의 문자열로
        - `array.join([separator])`
            - `separator` → 배열의 각 요소를 구분할 문자열]
            - 필요시 문자열 변환, 생략시 배열의 원소들의 쉼표로 구분
    - reverse 🍠
        - 배열의 순서를 반대로 리턴
        - 배열의 순서를 반대로 재정렬하고 싶을때 사용
        - `array.reverse()`
    - splice 🍠
        - 원하는 위치의 요소를 제거하거나 취소할 수 있음
        - 원본 배열 바꿈
        - `Array.splice(start,deleteCount,items)`
            - deletecount → 제거할 요소의 개수
                - if) 0이면 아무것도 제거하지 x
            - items는 제거한 위치에 추가할 요소
    - slice 🍠
        - 원하는 범위의 요소들을 복사하여 배열로 반환
        - 배열, 문자열 사용 가능
        - 원본의 배열은 바뀌지 않음
        - `array.slice(start, end)`
    - find 🍠
        - 조건을 걸어 배열 안에 똑같은 것을 찾을 때 사용
        - 위에서부터 차례대로 찾다가 true가 나오면 찾는 것을 멈추고 return
        - `array.find( )`
    - filter 🍠
        - 배열 안에 있는 여러가지 내용 중 원하는 데이터만 걸러 새로운 배열 전달
        - 삭제를 할때도 사용됨
        - `array.filter( )`
    - map 🍠
        - 함수를 받아 특정 기능을 시행하고, 새로운 배열 반환
        - `array.map(fn)`
    - reduce 🍠
        - 배열의 요소를 순차적으로 순회하며 숫자든 배열이든 객체든 하나의 값으로 줄여서 return
        - 배열을 기반으로 하나의 값을 도출할 때 사용
        - `array.reduce(callback(누적값, 현재값, 인덱스, 요소))`
    - some  🍠
        - `true`값 찾기
        - 배열의 1개 요소라도 특정 조건을 충족하는지 확인
        - or
        - `array.some(element)`
    - every 🍠
        - 배열의 모든 요소가 조건을 충족하는지 확인
        - and
        - `array.every(element)`
    - forEach 🍠
        - 배열 반복
        - `array.forEach(해당요소, 인덱스, 해당 배열 자체)`

### 호이스팅 (Hoisting) 🍠

- 선언한 변수 및 함수가 선언 범위의 최상단으로 올라가 작동하는 JS의 행동
- 변수 or 함수가 실제 코드에서 작성된 위치와 관계 없이 선언 단계에서 메모리에 저장되기에 발생
- ver, let, const 모두 호이스팅 방법이 다를 뿐, 호이스팅이 이루어짐
    - var → 메모리에 변수 선언 + ‘undefind’값으로 초기화하여 접근 가능
        - //undefined
    - let/const → 메모리에 변수 선언 단 TDZ에 있어 접근 불가
        - 호스팅 되어 변수를 메모리에 올려놨지만, TDZ라는 지역에 있어 선언한 코드 줄을 지나야 접근 가능한 상태
        - //RefernceError
- 코드의 가독성과 유지보수를 위해 호이스팅이 일어나지 않도록
- 함수와 변수를 가급적 코드 상단부에서 선언하면, 호이스팅으로 인한 스코프 꼬임 현상 방지 가능

- getter 🍠
    - 객체의 속성 값을 반환하는 메서드
    - 값을 사용하려고 시도하면 메모리에 저장된 값을 불러오지 않고 getter를 호출
- setter 🍠
    - 객체의 속성 값을 설정, 변경하는 메서드
    - 값을 할당하려고 시도하면 프로퍼티의 값에 직접 할당하지 않고 setter를 호출

```jsx
// 클래스 선언
class Student {
	constructor(name, school) {
		// 필드
		this.name = name;
		this.school = school; 
    }

	get school() {
		return this._school;
	}

	set school(newSchool) {
		this._school = newSchool;
	}
	
	// 메소드
	introduction() {
		console.log(`안녕하세요, ${this.name}입니다. ${this._school}에 다니고있습니다`);
	}
}

const matthew = new Student('matthew', '상명대학교');
console.log(matthew.school);  // 상명대학교
matthew.school = '인하대학교';
matthew.introduction();  // 안녕하세요, matthew입니다. 인하대학교에 다니고있습니다.

```

DOM 조작 🍠
- 태그 가져오기
    - `getElementById()` -  id속성을 가진 요소를 가져옴
    - `getElementsByTagName()` - 태그 이름에 해당하는 모든 요소를 배열 형태로 반환
    - `getElementsByClassName()` - 특정 클래스를 가진 요소들을 배열 형태로 반환
    - `querySelector()` - css 선택자를 사용하여 첫 번째로 일치하는 요소를 반환
    - `querySelectorAll()` - css 선택자와 일치하는 모든 요소들을 nodelist 형태로 반환
- 이벤트 리스너 추가하기
    - `addEventListener()` - 특정 요소에 이벤트 핸들러 부착
    - 하나의 요소에 같은 타입의 핸들러 추가할 수 있음
    - `element.addEventListener(event, function, useCapture);`
- 이벤트 리스너 제거하기
    - `removeEventListener()` - 이벤트 제거
    - 이벤트 종류와 이벤트 리스너 함수 자체의 조합으로 식별되어 제거
    - 제공되었던 다양한 옵션의 일치하는 이벤트 리스너만 제거 가능
    - `element.removeEventListener('이벤트타입', 이벤트 콜백 함수)`
- 키보드와 마우스 이벤트
    - 마우스
        - onmousemove - 마우스가 이동시 호출
        - onclick - 마우스 버튼이 눌렸다 떼어질 때 실행
            - onmousedown - 마우스 버튼 눌렸을 때 호출
            - onmouseup - 마우스 버튼에서 손을 뗐을 때 호출
    - 키보드
        - onkeypress - 키가 눌렸을 때 실행
            - onkeydown - 키가 눌렸을 때 실행
            - onkeyup - 키에서 손을 뗐을 때 실행
- 태그 속성 다루기
    - getAttribute/setAttribute - 속성명과 일치하지 않을 경우를 배제하기 위함
        - `.getAttribute(속성명);`
        - `.setAttribute(속성명, 속성 값);`
    - innerHTML - 주어지는 문자열을 html문자열로 해석, 문자열에 html태그가 포함되어있는 경우 그 태그를 html문서에 적용시켜 출력함
    - textContent - html문서로 해석과정 없이 문자열에 써져있는 문자열 그대로 대입
- 부모와 자식 태그 찾기
    - 직속 자식 찾기
        - `parent.querySelector('.child1');`  - 첫번째 요소만 반환
        - `parent.querySelectorAll('.child1');` - 요소가 여러개면 배열에 담아 반환
        - `document.querySelectorAll('.parent > .child1');` - 원하는 요소에 있는 것만 찾을 수 있음(직속 자식 찾기)
        
        - 자식에서 부모찾기
        - `children.parentElement;`,  `children.parentNode;`
    
- 새로운 태그 만들기
    - `document.createElement();`
        - 특정 페이지에 추가하기
            - `document.특정위치.appendchild( )`
- 태그 복제하기
    - cloneNode() - dom의 노드를 복사
    - `.cloneNode( );`
    