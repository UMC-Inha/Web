- 원시 타입
    
    ### 원시 타입 (Primitive Type)
    
    자바스크립트에서 원시타입은, 쉽게 정의하면 객체가 아닌 다른 모든 타입을 의미합니다. 객체가 아니기에, 이러한 원시 타입은 메서드를 갖고 있지 않습니다. 
    
    - boolean
        
        ### boolean
        
        거짓과 참을 가질 수 있는 데이터 타입입니다. 주로 조건문에서 많이 사용됩니다.
        
        true / false와 같은 boolean 형의 값 외에도 조건문에서 마치 true와 false 처럼 취급되는 truthy, falsy 값이 존재한다.
        
        ```jsx
        if (1) {
        	// 1을 true로 사용할 수 있다.
        }
        
        if (0) {
        	// 0을 false로 사용할 수 있다.
        }
        
        if (NaN) {
        	// NaN을 false로 사용할 수 있다.
        }
        
        // 그 외에도 null / undefined / 공백이 없는 빈 문자열도 falsy한 값이다.
        ```
        
    - null
        
        ### null
        
        아직 값이 없거나, 비어 있는 값을 표현할 떄 사용합니다. 
        
        의도적으로 변수에 값이 없음을 표현하고 싶을 때 null을 사용합니다.
        
        ```jsx
        let matthew = null;
        console.log(matthew);  // null
        ```
        
        null이 가지고 있는 특별한 점은 다른 원시 타입 값과 다르게 타입을 체크했을 때, ‘object’라는 결과가 반환 된다는 점 입니다.
        
        ```jsx
        typeof null === 'object'; // true
        ```
        
        왜 이렇게 개발했을지 의문을 충분히 갖을 수 있습니다. 이는, 초창기 자바스크립트, 개발 시 발생한 문제이고 **`typeof null을 진짜로 null로 표현하고자 하는 많은 시도`**가 있지만, 호환성 문제가 다른 코드에 영향을 주어 받아들여지지 않았다고 합니다.
        
        [Why is typeof null "object"?](https://stackoverflow.com/questions/18808226/why-is-typeof-null-object)
        
    - undefined
        
        ### undefined
        
        `undefined`는 선언한 후 값을 할당하지 않은 변수. 즉, 아직 변수 또는 프로퍼티가 할당되지 않았음을 의미합니다.
        
        ```jsx
        let matthew;
        matthew // undefined;
        
        const matthewObject = {};
        matthewObject.key; // undefined
        ```
        
    - number
        
        자바스크립트는 bigint가 등장하기 전에는, 모든 숫자를 number라는 타입에 넣기 시작했다.
        
        ECMAScript 표준에 따르면 
        
        $$
        -(2^{53}-1)과 2^{53}-1
        $$
        
        사이의 값을 저장할 수 있다.
        
        ```jsx
        42; // 정수 리터럴
        3.14159; // 부동 소수점 리터럴
        0b1010; // 2진수 리터럴 (binary literal)
        0o755; // 8진수 리터럴 (octal literal)
        0x1A3; // 16진수 리터럴 (hexadecimal literal)
        
        // 천 단위를 읽기 쉽게 해주는 표현(가독성)
        1_000_000; // 숫자 구분 기호 (Numeric Separators)
        ```
        
        - JS에서 사칙연산을 하는 방법을 작성해주세요. 🍠
            - 더하기
            - 빼기
            - 곱하기
            - 나누기
            - 나머지 구하기
            - 거듭 제곱
        - JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
        - JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
        - 연산자 우선순위에 대해 작성해주세요. 🍠
        
    - string
        
        문자열을 저장하는 기본 자료형
        
        **immutable**(불변) 특성을 가집니다. 문자열은 수정할 수 없습니다.
        
    - symbol
        
        ### Symbol
        
        Symbol 타입은 ES6에서 새롭게 추가된 7번쨰 타입입니다. 중복되지 않는, 고유한 값들을 나타내기 위해서 만들어 졌습니다. 심벌을 생성하기 위해서는 `Symbol()`을 사용해야 합니다.
        
        왜 Symbol을 사용할까요?
        
        아래의 yongmin이라는 사람도 Matthew라는 영어 이름을 갖고 있고, sua 라는 사람 또한 Matthew 라는 영어 이름을 갖고 있다고 합시다.
        
        ```jsx
        const yongmin = 'Matthew';
        const sua = 'Matthew';
        ```
        
        둘을 `일치 연산자(===)`로 비교하면 어떻게 될까요?
        
        ```jsx
        yongmin === sua // true
        ```
        
        당연히 true가 나옵니다.
        
        하지만, 우리가 원하는 시나리오는, 용민이라는 사람과, 수아라는 사람은 엄연히 다른 사람이기에, false가 나오기를 원한다고 가정해봅시다. 이런 경우 **`Symbol을 활용`**할 수 있습니다.
        
        ```jsx
        const yongmin = Symbol('Matthew');
        const sua = Symbol('Matthew');
        ```
        
        다시 `일치 연산자(===)`로 비교해봅시다.
        
        ```jsx
        yongmin === sua // false
        ```
        
        이처럼 중복되지 않는 어떠한 고유한 값을 나타내고 싶으면 **`Symbol 타입`**을 활용하는 것이 매우 유용합니다.
        
    - bigint
        
        매우 큰 정수형 데이터를 저장하기 위한 자료형입니다.
        
        숫자 마지막에 n을 붙입니다.
        
        number와 산술 연산 기능은 기본적으로 제공되지 않습니다.
        
- 객체 타입
    
    ### 객체 타입 (Object Type)
    
    위의 7개 원시 타입 제외 자바스크립트를 이루고 있는 대부분의 타입이 바로 객체 타입입니다. 여기에는 배열, 함수, 정규식, 클래스 등이 포함된다.
    
    여기서 한 가지 주목할 것이 **`객체 타입은 참조를 전달`**하기에, **`참조 타입`**으로도 불린다는 것이다.
    
    ```jsx
    const hello1 = () => {}; 
    const hello2 = () => {};
    ```
    
    위의 내용을 보면 실제로, 함수의 내용이 같아 보입니다. 하지만, 서로의 참조가 다르기에 false가 반환됨을 알 수 있습니다.
    
    ```jsx
    hello1 === hello2 // false
    ```
    
    - 배열
        
        ### 배열 (Array)
        
        자바스크립트에서 배열을 만드는 방법
        
        1. **`배열 리터럴 []`** 
        
        ```jsx
        // 배열 리터럴 [] 를 사용하여 만드는 방법
        let matthew = [];
        
        // 각각 인덱스를 [] 안에 넣어, 배열 안에 값을 할당할 수 있다.
        matthew[0] = 'kim';
        matthew[1] = 'yong';
        matthew[2] = 'min';
        
        // i = 0 부터, matthew의 길이 총 3(['kim', 'yong', 'min'], i++ (하나씩 증가)
        for (let i = 0; i < matthew.length; i++) {
        	console.log(matthew[i]);
        }
        ```
        
        ![스크린샷 2024-08-19 오후 2.37.59.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/60b44166-84c0-44c0-9b7c-59b0ccf931ce/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-08-19_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.37.59.png)
        
        ```jsx
        // 배열 생성 (초기 값 할당)
        let arr = ['kim', 'yong', 'min'];
        
        // 배열의 크기를 미리 지정하기
        let arr = [,,,]; // undefined가 출력된다.
        ```
        
        1. **Array() 생성자 함수로 배열 생성**
        
        배열 생성
        
        ```jsx
        // 배열 생성
        let arr = new Array();
        
        arr[0] = 'kim';
        arr[1] = 'yong';
        arr[2] = 'min';
        
        for (let i = 0; i < arr.length; i++) {
        	console.log(arr[i]);
        }
        
        // 값을 할당한 채로 배열을 생성할 수 있다.
        let arr = new Array('kim', 'yong', 'min');
        
        // 배열의 크기를 지정하여 생성
        let arr = new Array(3);
        
        // 배열의 크기를 지정하여 생성한 후 원하는 값으로 채워넣을 수 있다.
        new Array(20).fill(0);
        
        // output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ```
        
        - 다양한 `Array method`에 대해 정리해주세요. 🍠
            
            ### 1. **`sort()`**
            
            - **정렬**하는 메서드입니다. 기본적으로 **문자열**을 기준으로 정렬하며, **오름차순**으로 정렬됩니다.
            - **숫자 배열**을 정렬하려면, **비교 함수를 제공**해야 합니다.
            
            ```jsx
            const numbers = [3, 1, 4, 1, 5, 9];
            numbers.sort(); // 기본 정렬 (문자열 정렬): [1, 1, 3, 4, 5, 9]
            numbers.sort((a, b) => a - b); // 숫자 오름차순 정렬: [1, 1, 3, 4, 5, 9]
            numbers.sort((a, b) => b - a); // 숫자 내림차순 정렬: [9, 5, 4, 3, 1, 1
            ```
            
            ### 2. **`join()`**
            
            - 배열의 모든 요소를 연결해 **문자열로 변환**합니다. 각 요소 사이에 지정한 **구분자**를 삽입할 수 있습니다.
            
            ```jsx
            const fruits = ['apple', 'banana', 'cherry'];
            const result = fruits.join(', '); // "apple, banana, cherry"
            ```
            
            ### 3. **`reverse()`**
            
            - 배열의 순서를 **뒤집습니다**. 원본 배열이 **변경**됩니다.
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            numbers.reverse(); // [5, 4, 3, 2, 1]
            ```
            
            ### 4. **`splice()`**
            
            - 배열의 **특정 위치에서 요소를 제거하거나 추가**합니다. 원본 배열이 **변경**됩니다.
            
            ```jsx
            const arr = [1, 2, 3, 4, 5];
            arr.splice(2, 1); // [1, 2, 4, 5] (2번째 인덱스부터 1개의 요소 제거)
            arr.splice(2, 0, 3); // [1, 2, 3, 4, 5] (2번째 인덱스에 3 추가)
            
            ```
            
            ### 5. **`slice()`**
            
            - 배열의 **일부를 복사**하여 **새로운 배열을 반환**합니다. 원본 배열은 **변경되지 않음**.
            
            ```jsx
            const arr = [1, 2, 3, 4, 5];
            const slicedArr = arr.slice(1, 3); // [2, 3] (1번째 인덱스부터 3번째 인덱스 전까지)
            ```
            
            ### 6. **`find()`**
            
            - 배열에서 조건을 만족하는 **첫 번째 요소를 반환**합니다. 조건을 만족하는 요소가 없으면 **`undefined`*를 반환합니다.
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            const found = numbers.find(num => num > 3); // 4
            ```
            
            ### 7. **`filter()`**
            
            - 조건을 만족하는 **모든 요소를 배열로 반환**합니다. 원본 배열은 **변경되지 않음**.
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            const filtered = numbers.filter(num => num > 3); // [4, 5]
            
            ```
            
            ### 8. **`map()`**
            
            - 배열의 **모든 요소에 대해 함수를 적용**하고, 그 결과를 가진 **새로운 배열을 반환**합니다.
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            const mapped = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
            
            ```
            
            ### 9. **`reduce()`**
            
            - 배열의 **모든 요소를 누적**하여 단일 값을 반환합니다. 콜백 함수는 누적 값과 현재 값을 인자로 받습니다.
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            const sum = numbers.reduce((acc, num) => acc + num, 0); // 15 (배열의 합)
            ```
            
            ### 10. **`some()`**
            
            - 배열의 요소 중 **하나라도 조건을 만족**하면 `true`를 반환합니다. 모든 요소가 조건을 만족하지 않으면 `false`를 반환합니다.
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            const hasLargeNumber = numbers.some(num => num > 3); // true
            ```
            
            ### 11. **`every()`**
            
            - 배열의 **모든 요소가 조건을 만족**해야 `true`를 반환합니다. 하나라도 만족하지 않으면 `false`를 반환합니다.
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            const allPositive = numbers.every(num => num > 0); // true
            ```
            
            ### 12. **`forEach()`**
            
            - 배열의 **각 요소에 대해 함수를 실행**합니다. `map()`과 달리 **값을 반환하지 않으며**, 배열의 각 요소에 대해 실행만 합니다.
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            numbers.forEach(num => console.log(num));
            // 1, 2, 3, 4, 5가 각각 출력됨
            ```
            
    - 함수
        
        ### 함수 (function)
        
        ### 함수 선언문
        
        ```jsx
        function subtraction(a, b) {
        	return a - b;
        }
        
        subtraction(5, 3); // 2
        ```
        
        함수 선언문은 표현식이 아닌 일반 문(statement)으로 분류
        
        ### 함수 표현식
        
        ```jsx
        let subtraction2 = function (a, b) {
            return a - b;
        }
        
        subtraction2(5, 3); // 2
        ```
        
        함수 표현식은, 함수를 변수에 할당했다.
        
        ### 화살표 함수
        
        ```jsx
        let subtraction3 = (a, b) => {
        	return a - b;
        }
        
        subtraction3(5, 3); // 2
        ```
        
        ES6에 추가된 화살표 함수도 많이 사용한다.
        
        - **** 화살표 함수는 왜 쓸까요?**
            - js에서 일반적인 형태의 함수를 사용하다 보면, this가 개발자가 의도한바와 다른 객체와 바인딩 되어 있는 경우가 있습니다.
            - 그래서 애초에 this를 바인딩 하지 않고 상위 컨텍스트의 this를 그대로 가져다 쓰는 게 화살표 함수입니다.
            - 간결성 면에서도 좋습니다.
        - 화살표 함수 사용에서 유의사항
            1. 메소드
            
            ```jsx
            const user = {
              name: 'sam';
              callName: () => console.log(this.name);
            }
            user.callName();	// undefined
            ```
            
            여기서 this는 상위 스코프인 전역객체를 가리키게 된다.
            
            1. 생성자 함수
            
            ```jsx
            const Foo = () => {};
            const foo = new Foo()	// TypeError: Foo is not a constructor
            ```
            
            화살표 함수는 생성자함수로서 사용할 수 없다.
            
            1. 콜백함수
            
            ```jsx
            var arr = [1, 2, 3, 4, 5]
            var ent = []
            arr.forEach((el, index) => {
              ent.push(index, el, this[index])
            }, [1, 2, 3, 4, 5]);
            
            console.log(ent);
            
            /*
            [
              0, 1, undefined,
              1, 2, undefined,
              2, 3, undefined,
              3, 4, undefined,
              4, 5, undefined
            ]
            */
            
            ```
            
            콜백함수로 사용하게 되는 경우, 제어권이 넘어간다.
            
            제어권에는 실행시점, 매개변수, this 총 3가지가 있는데, this에 대한 바인딩이 addEventListener, forEach 함수처럼 따로 정의하는 경우가 있기 때문에,
            
            의도했던 this와 달라질 수 있다.
            
            이때, 화살표 함수를 사용하면 기존 바인딩 값이 사라지고 상위 스코프가 바인딩된다.
            
        
        ### 호이스팅 (Hoisting) 🍠
        
        호이스팅을 똑바로 이해하기 위해선 실행 컨텍스트를 이해하고 있어야 합니다.
        
        - 실행 컨텍스트
            
            실행 컨텍스트란, js에서 코드를 실행하는 과정에서 필요한 환경 정보를 미리 수집하여 저장하는 객체입니다.
            
            실행 컨텍스트에서 VE(variable environment), LE(lexical environment)라는 곳에 변수를 저장하게 됩니다.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/68e7ef96-82a8-4494-9764-c23d2ae872b1/image.png)
            
            실행 컨텍스트는 함수 단위로 생성이 됩니다. 그리고 생성 초기에 VE와 LE의 내용은 일치합니다.
            
            이 부분은 블로그를 찾아보면 대부분 잘못 알고있습니다. VE가 snap shot의 형태로 변하지 않는 다거나 하는 이야기가 있는데, ECMA script에 그런 언급은 없습니다. VE도 내부 값이 변하지만 LE와 다르게 block 스코프 단위로 생성되지 않을뿐입니다.
            
            여기서 더 많은 내용을 알기 위해 var, let/const 변수의 차이를 알아야 합니다.
            
            var변수는 함수 스코프이지만, let/const는 block 스코프 입니다. 새로운 block이 열리면 새로운 스코프로 변경됩니다.
            
            여기서 VE와 LE 두 가지로 나누어 변수를 저장하는 이유를 짐작할 수 있습니다.
            
             (짐작 할 수 있는 거고 정확한 건 아닙니다. ECMA script를 읽어보면 명확하게 설명되어 있지 않은 부분이 많습니다. 정확한 작동 방식과 원리 및 이해는 아무도 모릅니다.)
            
            실행컨텍스트는 함수 단위로 생성되는데, 그렇다면 block스코프로 선언되는 let/cont가 같은 함수 스코프에서 여러번 선언될 수가 있다는 것이고 그러면 실행 컨텍스트에는 같은 변수가 중복되어 들어가야되는 이상한 일이 생기죠?
            
            그래서 LE로 이 문제를 해결하는 겁니다.
            
            함수 스코프는 변하지 않았지만 block 스코프만 변경되는 경우(for문을 사용한 경우 등등) 새로운 실행 컨텍스트가 생성되는 게 아니고, LE가 추가적으로 생성이되면서 ㅇ이 새로 생성된 LE를 outerEnvironmentReference를 통해 참조합니다.
            
            실행 컨텍스트는 함수 단위로 생성되고 stack구조로 쌓여가면서 관리됩니다. 
            
            각 실행 컨텍스트의 VE LE는  environmentRecord와 outerEnvironmentRefernce로 이루어져 있습니다. environmentRecord는 환경정보를 담고, outerEnvironmentReference는 stack 구조상 바로 아래의 실행 컨텍스트를 참조합니다.(역방향 참조는 하지 않습니다. chain scope)
            
            그래서 특정 실행 컨텍스트에서 존재하지 않는 변수는, 상위 컨텍스트를 참조하여 탐색합니다.
            
            즉 호이스팅이란 물리적으로 존재하지 않는 개념입니다. 
            
            다만 실행 컨텍스트에 의해 마치 변수가 물리적으로 코드 상단으로 끌어올려진 듯한 효과를 주기 때문에, 호이스팅이란 표현이 생긴 겁니다.
            
            **변수가 실제로 코드 위로 올라가지 않습니다.**
            
            EX)
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e7a966c2-9947-4921-883a-8b4bb1d8dd59/image.png)
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/4d32cc8a-4b96-439b-a1ad-124b82d28bcc/image.png)
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/20ebff3a-52dd-4c7b-8750-2d1a5f50a9fb/image.png)
            
        
    - 클래스
        
        ### 클래스 (class)
        
        Student라는 클래스를 만들어 보겠습니다.
        
        **`class라는 키워드를 이용`**해서 **`선언`**을 해주고, **`constructor 생성자를 이용`**해서, **`나중에 object를 만들 떄 필요한 데이터를 전달`**해주면 됩니다. 
        
        전달 받은 데이터를 class에 존재하는 필드에, 전달된 데이터를 바로 할당해줍니다.
        
        ```jsx
        // 클래스 선언
        class Student {
        	constructor(name, school) {
        		// 필드
        		this.name = name;
        		this.school = school;
        	}
        }
        ```
        
        이번엔 전달받은, 클래스의 이름과, 학교명을 갖고, 자기소개를 하는 **`methods`**를 만들어보겠습니다. 만드는 방법 또한 매우 간단합니다.
        
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
        }
        ```
        
        아래와 같이 만든 클래스를 이용하여, **`new 키워드를 통해 새로운 object를 만들 수 있습니다.`** name과, school을 맞는 위치에 같이 전달해주면 됩니다.
        
        ```jsx
        const matthew = new Student('matthew', '상명대학교');
        console.log(matthew.name);
        console.log(matthew.school);
        matthew.introduction();
        ```
        
        ![스크린샷 2024-08-19 오후 3.59.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/4df14540-faeb-4238-940f-241c42af9c83/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-08-19_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.59.50.png)
        
        ### 아래 내용에 대해 추가적으로 학습 후 정리해보아요! 🍠
        
        <aside>
        💡 위의 예시의 코드를 활용해서, 코드를 작성해주시고, 설명 또한 작성해주세요!
        
        </aside>
        
        - getter 🍠
            
            
        - setter 🍠
        
        js에선 getter와 setter함수를 기본으로 제공합니다.
        
        객체의 캡슐화를 권장하는 문법이라고 생각됩니다.
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/d5b2c7a6-8f0f-48e1-8c50-ad5ea38eb8f5/image.png)
        

### react에서 자주 사용하는 자바스크립트 문법

- 구조 분해 할당(Destructuring assignment)
    
    ### 구조 분해 할당 (배열)
    
    구조 분해 할당 구문은, 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담게 하는 JS 표현식입니다.
    
    먼저, react에서는 컴포넌트에 state 변수를 추가할 수 있는 React Hook인 `useState`를 활용합니다.
    
    react를 아직 자세히 모르시는 분은, 이런 것을 나중에 배우는구나 라고 생각하며 이해만 하시면 됩니다. **`useState`**의 구조는 아래와 같습니다.
    
    ```jsx
    const [yongmin, setYongmin] = useState('초기값')
    ```
    
    `useState`는 2개의 배열을 반환하는 함수이며, 첫 번쨰 값을 value 두번쨰 값을 value를 변경하는 setter로 사용이 가능합니다.
    
    ```jsx
    const UMC = ['WEB', 'SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN'];
    
    const [first, , , , , last] = UMC;
    
    first; // 'WEB'
    last; // 'DESIGN'
    ```
    
    배열의 구조 분해 할당은 **`,의 위치에 따라 값이 결정`**됩니다.
    
    위의 방식은, 길이가 긴 배열일 경우,  실수를 할 가능성이 매우 크기에, 배열의 길이가 작은 경우 많이 활용합니다. 배열의 구조 분해 할당은 기본 값을 선언할 수 있습니다.
    
    ```jsx
    const array = [1, 2];
    const [a = 'KIM', b = 'YONG', c = 'MIN'] = array;
    
    // a 1
    // b 2
    // c MIN (준비된 배열의 길이가 총 2개이지만, c는 3번째이기에, 미리 할당한 'MIN'을 출력)
    ```
    
    만약 먼저 선언한 배열의 길이보다, 사용하고자 하는 배열의 길이가 짧거나 값이 없는 경우에는 **`undefined`** 기본값을 사용합니다.
    
    특정 값 이후의 값을 다시 배열로 선언하고 싶은 경우에는 전개 연산자를 활용할 수 있습니다.
    
    ```jsx
    const UMC = ['WEB', 'SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN'];
    const [first, ...etc] = UMC;
    
    first // 'WEB'
    etc // ['SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN']
    ```
    
    ### 구조 분해 할당 (객체)
    
    객체의 구조 분해 할당은, 객체에서 값을 뽑아온 뒤 할당하는 것을 의미합니다. 배열과는 다르게, 객체는, 객체의 내부 이름을 통해 뽑아온다는 차이점이 있습니다.
    
    ```jsx
    const myName = {
    	kim: '김',
    	yong: '용',
    	min: '민',
    }
    
    const { kim, ...rest } = myName;
    
    // kim => '김'
    // rest => { yong: '용', min: '민' }
    ```
    
    기본 값 할당 또한 배열과 동일하게 가능합니다.
    
    ```jsx
    const myName = {
    	yong: '용',
    	min: '민',
    }
    
    const { yong = '야', min = '호', yaho = '야호' } = myName
    
    yong // '용'
    min // '민'
    yaho // '야호'
    ```
    
    리액트에서 어떠한 값들을 전달 할 떄, props를 통해 부모에서 자식 컴포넌트로 값을 전달할 떄 많이 활용되는 방식이므로 꼭 알고 있어야 하는 문법입니다.
    
    ```jsx
    // props.name, props.age 이러한 식으로 접근해야하지만
    // 구조 분해 할당을 통해서 name, age로 접근이 가능합니다.
    function ChildComponent({ name, age }) {
    	return (
    		<>
    			<h1>안녕하세요 {name}입니다.<h1/>
    			<span>{age}살 입니다.</span>
    		</>
    	)
    }
    ```
    
    위의 리액트 코드는 웹을 처음 접하시면 당연히 이해할 수 없지만, 이러한 방식으로 많이 활용된다는 점을 이해해주시면 됩니다.
    
- 전개 연산자 (Spread Operator)
    
    ### 전개 연산자 (Spread Operator)
    
    React를 활용하여 웹 프로젝트를 진행하다보면, 배열 간에 합성을 해야 할 경우가 상당히 많이 생깁니다. 전개 연산자가 나오기 이전에는 배열 간 합성을 하기 위하여 `push`, `splice`, `concat`과 같은 배열 메서드를 사용해야 했습니다. 그러나, 전개 연산자를 활용하면, 배열을 쉽게 합성할 수 있습니다.
    
    ```jsx
    const yaho = ['y', 'a']
    const realYaho = [...yaho, 'h', 'o'] // ['y', 'a', 'h', 'o']
    ```
    
    여기서, 살짝 참조에 관한 개념을 짚고 넘어가겠습니다.
    
    ```jsx
    const yongmin = ['Kim', 'Yong', 'Min'];
    const yongmin2 = yongmin;
    
    yongmin === yongmin2; // true
    ```
    
    위의 결과 값이 true가 나온 이유는 무엇일까요? 내용이 아닌 **`객체의 참조 주소를 복사하기에 true가 반환`**됩니다.
    
    하지만, 전개 연산자를 활용하게 되면, 기존 배열에 영향을 미치지 않고, 배열을 복사하는 것이 가능합니다.
    
    ```jsx
    const yongmin = ['Kim', 'Yong', 'Min'];
    const yongmin2 = [...yongmin];
    
    yongmin === yongmin2; // false
    ```
    
    실제로 값만 복사하고, 참조가 다르기에 false가 반환됩니다.
    
    ### 전개 구문 (객체)
    
    ```jsx
    const KIM_YONG_MIN = {
    	Kim: '김',
    	Yong: '용',
    	Min: '민'
    }
    
    const KIM_YONG_MIN_2 = {
    	Ma: '매',
    	tthew: '튜'
    }
    
    const EN_KO_NAME = { ...KIM_YONG_MIN, ...KIM_YONG_MIN_2 };
    // {Kim: '김', Yong: '용', Min: '민', Ma: '매', tthew: '튜'}
    ```
    
    객체를 새로 만들 때 전개 구문을 활용할 수 있고, 객체를 합성하는 데 편리함을 제공해준다.
    
    ```jsx
    const kim = {
    	k: 'K',
    	i: 'I',
    	m: 'M',
    }
    
    const object1 = {
    	...kim,
    	m: 'N'
    } // {k: 'K', i: 'I', m: 'N'}
    
    const object2 = {
    	m: 'N',
    	...kim
    } // {m: 'M', k: 'K', i: 'I'}
    ```
    
    전개 연산자 이후, 값을 할당한다면, 전개 연산자를 값 할당 이전에 활용하냐, 이후에 활용하냐에 따라, 결괏값이 완전히 달라짐을 유의하자.
    
- 객체 초기자(object shorthand assignment)
    
    ### 객체 초기자
    
    객체 초기자 또한, 상당히 많이 활용하는 방식이다.
    
    객체에 집어 넣고자 하는 키와 값을 가지고 있는 변수가 이미 존재한다면, 해당 값을 매우 간단하게 넣을 수 있는 방식이다.
    
    ```jsx
    const easy = 'easy';
    const hard = 'hard';
    
    const difficulty = {
    	easy,
    	hard,
    }
    
    // {easy: 'easy', hard: 'hard'}
    ```
    
- Array 프로토타입의 메서드
    - map
        
        ### map
        
        map은 인수로 전달받은 배열과 동일한 길이의 새로운 배열을 반환하는 메서드입니다. 배열의 아이템을 순회하면서, 콜백으로 연산한 결과의 새로운 배열을 만들 수 있습니다.
        
        ```jsx
        const numbers = [1, 2, 3, 4, 5, 6];
        
        const numbersPlusTwo = numbers.map((number) => number + 2);
        // [3, 4, 5, 6, 7, 8]
        ```
        
        React에서는 data들을, 배열에 담아, 해당 내용들을 리액트 요소로 반환할 떄 많이 사용합니다.
        
        ```jsx
        const KimYongMin = ['김', '용', '민'];
        
        const ReturnElement = KimYongMin.map((name) => {
        	return <div key={name}>{name}</div>
        });
        ```
        
    - filter
        
        ### filter
        
        `filter()` 메서드는 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.
        
        ```jsx
        // 길이가 5 이하인 단어만 출력하는 방법
        const words = ['sweetPotato', 'Potato', 'haha', 'yaho'];
        
        const answer = words.filter((word) => word.length < 6);
        // ['haha', 'yaho']
        ```
        
    - reduce
        
        ### reduce
        
        map, filter를 쉽다고 생각하셨으면 reduce와 같은 경우는 조금 어렵게 느껴지실 수 있습니다. 해당 메서드는 콜백 함수이외에 initial value (초깃값)을 추가로 인수를 받습니다.
        
        초깃값이 무엇인지에 따라 어떠한 타입의 무엇인가를 반환할 수 있는 메서드가 바로 reduce 입니다.
        
        보통, 어떠한 값을 누적해서 더할 떄 많이 사용합니다.
        
        ```jsx
        const numbers = [10, 20, 30, 40, 50];
        
        // result의 초기값은 0이라고 생각하면 쉽다.
        const sum = numbers.reduce((result, number) => {
        	return result + number;
        }, 0);
        
        sum // 150
        ```
        
        reducer 콜백 함수의 첫 번쨰 인수는 초깃값의 현재값을 의미, 두 번쨰 인수는 현재 배열의 아이템이다.
        
    - forEach
        
        ### forEach
        
        `forEach` 함수는 콜백 함수를 받아 배열을 순회하면서, 단순히 해당 콜백 함수를 실행만 하는 메서드입니다.
        
        ```jsx
        const Matthew = ['M', 'A', 'T', 'T', 'H', 'E', 'W'];
        
        Matthew.forEach((alpha) => console.log(alpha));
        
        // M, A, T, T, H, E, W
        ```
        
        forEach는 아무런 반환값이 없습니다. 단순히 콜백함수를 실행만 시키고, map 처럼 결과를 반환하는 작업은 하지 않습니다. (forEach의 반환값은 undefined로 의미가 없다.)
        
    - length
        
        ### length
        
        **`length`** 데이터 속성은 해당 배열의 요소 수를 나타냅니다. 
        
        ```jsx
        const Matthew = ['M', 'A', 'T', 'T', 'H', 'E', 'W'];
        
        Matthew.length // 7
        ```
        
- 삼항 조건 연산자 (Ternary Operator)
    
    ### 삼항 조건 연산자
    
    **조건 (삼항) 연산자**는 JavaScript에서 세 개의 피연산자를 받는 유일한 연산자입니다. 앞에서부터 조건문, 물음표(`?`), 조건문이 참(truthy)일 경우 실행할 표현식, 콜론(`:`), 조건문이 거짓([falsy](https://developer.mozilla.org/ko/docs/Glossary/Falsy))일 경우 실행할 표현식이 배치됩니다. 해당 연산자는 [`if...else`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문의 대체재로 빈번히 사용됩니다.
    
    ```jsx
    const number = 27;
    
    const isOdd = number % 2 !== 0 ? true : false 
    // true (27은 홀수 이므로)
    ```
    
    아래와 같은 기준이라고 생각하면 이해하기 쉽다.
    
    ```jsx
    조건문 ? 조건문이 참인 경우 값 : 조건문이 거짓인 경우 값;
    ```
    

### DOM

- 브라우저 동작 구조
    1. DOM Tree
    -> 서버로부터 HTML을 받음
    -> HTML을 분석해서 Tag의 계층구조를 메모리에 만듦(DOM Tree)
    2. Render Tree
    -> DOM Tree에 외부 CSS를 접합시킴
    3. Reflow
    -> Render Tree를 기반으로 각 DOM이 화면에 그려지는 물리적인 좌표를 계산
    4. Painting
    -> 계산된 좌표 값에 따라 화면에 그려줌
- 태그 가져오기
    - `getElementById()`: `id` 속성을 이용해 요소를 선택하는 방법입니다.
        
        ```jsx
        const element = document.getElementById('elementId');
        ```
        
    - `getElementsByClassName()`: 클래스 이름을 통해 여러 요소를 선택하는 방법입니다.
        
        ```jsx
        const elements = document.getElementsByClassName('className');
        ```
        
    - `querySelector()`: CSS 선택자를 통해 첫 번째 일치하는 요소를 선택하는 방법입니다.
        
        ```jsx
        const element = document.querySelector('.className');
        ```
        
    - `querySelectorAll()`: CSS 선택자를 통해 일치하는 모든 요소를 선택하는 방법입니다.
        
        ```jsx
        const elements = document.querySelectorAll('.className');
        ```
        
- 이벤트 리스너 추가하기
    
    : 요소에 이벤트를 바인딩하는 메서드입니다.
    
    ```jsx
    const tag = document.getElementById('tag');
    button.addEventListener('click', () => {
        console.log('clicked');
    })
    ```
    
    이벤트 리스너를 사용하는 방법 보단, html에서 태그의 onClick=~ 처럼 인라인으로 작성하는 방법이, 페이지 흐름을 직관적으로 이해하기 쉬워서  더 선호합니다.
    
    하지만 인라인으로 작성된 이벤트는 js에서 제거할 수 없습니다.
    
- 이벤트 리스너 제거하기
    
    : 이벤트 리스너를 제거하는 메서드입니다.
    
    ```jsx
    const button = document.getElementById('myButton');
    const handleClick = () => console.log('Button clicked!');
    
    button.addEventListener('click', handleClick);
    button.removeEventListener('click', handleClick);
    ```
    
- 키보드와 마우스 이벤트
    - 키보드 이벤트: `keydown`, `keyup`, `keypress`
        
        ```jsx
        document.addEventListener('keydown', (event) => {
            console.log(`Key pressed: ${event.key}`);
        });
        
        ```
        
    - 마우스 이벤트: `click`, `mousemove`, `mousedown`, `mouseup`
        
        ```jsx
        const div = document.getElementById('myDiv');
        div.addEventListener('click', () => {
            console.log('Div clicked!');
        });
        ```
        
- 태그 속성 다루기
    - 속성 값 가져오기: `getAttribute()`
        
        ```jsx
        const link = document.getElementById('myLink');
        const href = link.getAttribute('href');
        ```
        
    - 속성 값 설정하기: `setAttribute()`
        
        ```jsx
        const link = document.getElementById('myLink');
        link.setAttribute('href', 'https://example.com');
        
        ```
        
    - 속성 제거하기: `removeAttribute()`
        
        ```jsx
        const link = document.getElementById('myLink');
        link.removeAttribute('href');
        ```
        
- 부모와 자식 태그 찾기
    - 부모 요소 가져오기: `parentNode`
        
        ```jsx
        const element = document.getElementById('myElement');
        const parent = element.parentNode;
        ```
        
    - 자식 요소 가져오기: `childNodes`
        
        ```jsx
        const element = document.getElementById('myElement');
        const children = element.childNodes;
        ```
        
        보통 자식요소를 가져오기보다는, 이벤트 위임을 많이 사용합니다.
        
        자식 요소가 개별로 독특한 이벤트 동작을 수행하는 것이라면 애초에 자식요소만 가져오는 것이 맞고, 그게 아니라면 이벤트 위임 방식이 유지보수에 유리합니다.
        
        ex)
        
         js로 퍼즐 게임을 만들 때, 퍼즐의 사이즈를 결정하는 버튼의 경우 이벤트 위임 방식이 더 유리합니다.
        
        버튼을 감싸는 컨테이너의 자식 요소를 가져오는 방식으로 작성했다면, 버튼이 하나 생길 때마다 계속 js파일도 수정해야됩니다.
        
        특정 요소를 수정하면, 다른 요소도 반드시 수정해야 하는 구조는 좋지 않은 것 같습니다.
        
        ```jsx
        function sizeBtnClickEvent(e) {
          if(e.target.className === 'btn_container') return;
          puzzleGridSize = parseInt(e.target.getAttribute("puzzle_size"));
          puzzleInit();
        }
        ```
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/09dc7c89-7256-4883-92bf-5b6a2e182d0c/image.png)
        
- 새로운 태그 만들기
    
    ```jsx
    const newElement = document.createElement('div');
    newElement.textContent = 'Hello World!';
    document.body.appendChild(newElement);
    ```
    
- 태그 복제하기
    
    요소 복제하기:
    
    ```jsx
    const element = document.getElementById('myElement');
    const clonedElement = element.cloneNode(true);
    document.body.appendChild(clonedElement);
    ```