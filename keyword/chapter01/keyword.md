- JS에서 사칙연산을 하는 방법을 작성해주세요. 🍠
    - 더하기
        
        더하기(+) 기호를 사용한다.
        
        ```jsx
        let sum = 5 + 3; // 결과: 8
        ```
        
    - 빼기
        
        빼기(-) 기호를 사용한다.
        
        ```jsx
        let difference = 10 - 4; // 결과: 6
        ```
        
    - 곱하기
        
        곱하기(*) 기호를 사용한다.
        
        ```jsx
        let product = 6 * 7; // 결과: 42
        ```
        
    - 나누기
        
        나누기(/) 기호를 사용한다.
        
        ```jsx
        let quotient = 20 / 5; // 결과: 4
        ```
        
    - 나머지 구하기
        
        나머지 구하기는 %기호를 사용한다.
        
        ```jsx
        let remainder = 17 % 5; // 결과: 2
        ```
        
    - 거듭 제곱
        
        거듭제곱은 **기호를 사용한다.
        
        ```jsx
        let power = 2 ** 3; // 결과: 8 (2의 3승)
        ```
        
- JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
    
    ### 1. **동등성 비교 연산자**
    
    - `==` (동등 연산자)
        - 값이 같은지 비교합니다. **자료형을 자동으로 변환**한 후 비교합니다.
    - `===` (일치 연산자)
        - 값과 **자료형 모두 같은지** 비교합니다. 자료형 변환 없이 엄격하게 비교합니다.
    - `!=` (부등 연산자)
        - 값이 다른지 비교합니다. **자료형을 자동으로 변환**한 후 비교합니다.
    - `!==` (불일치 연산자)
        - 값과 **자료형 모두 다른지** 비교합니다. 엄격하게 비교합니다.
    
    ### 2. **비교 연산자**
    
    - `>` (크다)
        - 좌측 값이 우측 값보다 큰지 비교합니다.
    - `<` (작다)
        - 좌측 값이 우측 값보다 작은지 비교합니다.
    - `>=` (크거나 같다)
        - 좌측 값이 우측 값보다 크거나 같은지 비교합니다.
    - `<=` (작거나 같다)
        - 좌측 값이 우측 값보다 작거나 같은지 비교합니다.
- JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
    
    ### 1. **증가/감소 연산자**
    
    - `++` (증가 연산자)
        - 변수의 값을 1씩 증가시킵니다.
        - **전위 증가 연산자 (`++variable`)**: 값을 증가시킨 후에 그 값을 반환합니다.
        - **후위 증가 연산자 (`variable++`)**: 현재 값을 반환한 후에 값을 증가시킵니다.
    - `-` (감소 연산자)
        - 변수의 값을 1씩 감소시킵니다.
        - **전위 감소 연산자 (`-variable`)**: 값을 감소시킨 후에 그 값을 반환합니다.
        - **후위 감소 연산자 (`variable--`)**: 현재 값을 반환한 후에 값을 감소시킵니다.
    
    ### 2. **대입 연산자를 사용한 증가/감소**
    
    - `+=` (더한 후 대입)
        - 변수에 지정한 값을 더한 후, 그 결과를 다시 변수에 저장합니다.
    - `=` (뺀 후 대입)
        - 변수에서 지정한 값을 뺀 후, 그 결과를 다시 변수에 저장합니다.
    - `=` (곱한 후 대입)
        - 변수에 지정한 값을 곱한 후, 그 결과를 다시 변수에 저장합니다.
    - `/=` (나눈 후 대입)
        - 변수에 지정한 값으로 나눈 후, 그 결과를 다시 변수에 저장합니다.
    - `%=` (나머지 연산 후 대입)
        - 변수에 지정한 값으로 나눈 나머지를 저장합니다.
    
    ### 3. **함수를 사용한 증가/감소**
    
    함수를 사용하여 값을 증가시키거나 감소시킬 수도 있습니다.
    
- 연산자 우선순위에 대해 작성해주세요. 🍠
    - 연산자 우선순위란 하나의 표현식에서 여러 연산자가 사용될 때, 연산자의 실행 순서를 정하는 규칙입니다. 만약 우선순위가 동일하면 결합순서 (왼쪽 → 오른쪽 또는 오른쪽 → 왼쪽으로)에 따라 연산됩니다.
    - 연산자 우선순위 순서
        1. **괄호 ()**: 가장 높은 우선순위를 가집니다.
        2. **단항 연산자**: ++, --, !, ~, typeof, void, delete
        3. **산술 연산자**:
            - * (거듭제곱)
            - , /, %
            - +, -
        4. **비교 연산자**: <, <=, >, >=, in, instanceof
        5. **동등 연산자**: ==, !=, ===, !==
        6. **논리 연산자**:
            - && (AND)
            - || (OR)
        7. **조건 (삼항) 연산자**: ?:
        8. **할당 연산자**: =, +=, -=, *=, /=, %=, **=
    - 주의사항
    1. 같은 우선순위의 연산자는 대부분 왼쪽에서 오른쪽으로 실행됩니다.
    2. 거듭제곱 연산자(**)는 오른쪽에서 왼쪽으로 결합됩니다.
    3. 할당 연산자(=)는 가장 낮은 우선순위를 가집니다.

### string

<aside>
💡 string 타입에 대해, 직접 구글링하여 아래에 정리해주세요.

</aside>

string 타입은 문자열을 나타내는 데이터 타입입니다. 큰 따옴표(`"`)나 작은 따옴표(`'`) 또는 백틱(```)으로 감쌀 수 있습니다.

특징

- 문자열은 불변(immutable)이며, 한 번 생성된 문자열은 수정할 수 없습니다. 새로운 문자열을 만들 때는 기존 문자열에서 일부 또는 전체를 수정한 새로운 문자열을 반환합니다.
- `+` 연산자를 이용해 문자열을 연결(concatenation)할 수 있습니다.

문자열 선언 예시
    let str1 = "Hello, World!";
    let str2 = 'JavaScript';
    let str3 = Template literal with ${str2};  // 템플릿 리터럴로 변수를 문자열에 삽입 가능

bigint 🍠
    ### bigint

<aside>
💡 bigint 타입에 대해, 직접 구글링하여 아래에 정리해주세요.

</aside>

`bigint`는 **아주 큰 정수**를 다루기 위한 데이터 타입입니다. 자바스크립트의 기본 숫자 타입인 `number`는 64비트 부동소수점 방식으로 숫자를 표현하여 안전하게 다룰 수 있는 정수 범위는 `-(2^53 - 1)`에서 `2^53 - 1`까지입니다. 이보다 큰 정수를 다룰 때는 `bigint` 타입을 사용해야 합니다.

특징

- `bigint`는 **정수 값**만 표현할 수 있습니다. 소수점 숫자를 표현할 수 없으며, 소수점을 포함한 값으로 연산을 시도하면 오류가 발생합니다.
- `bigint` 값은 숫자 뒤에 `n`을 붙여서 표현합니다.
- `bigint` 값과 `number` 타입 값은 직접 연산할 수 없습니다. 두 타입은 명시적으로 변환한 후에 연산해야 합니다.

bigint 선언 예시

```jsx
let bigInt1 = 1234567890123456789012345678901234567890n;
let bigInt2 = BigInt("1234567890123456789012345678901234567890");  // 문자열로부터 변환 가능
```

- 객체 타입 🍠
    
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


- 태그 가져오기
    
    DOM에서 HTML 요소를 가져오기 위한 몇 가지 주요 메서드가 있습니다.
    
    ### 메서드:
    
    - **`document.getElementById()`**: ID로 요소를 가져옵니다.
        
        ```jsx
        javascript
        코드 복사
        let element = document.getElementById('myId');
        
        ```
        
    - **`document.getElementsByClassName()`**: 클래스 이름으로 요소를 가져옵니다. HTMLCollection을 반환합니다.
        
        ```jsx
        javascript
        코드 복사
        let elements = document.getElementsByClassName('myClass');
        
        ```
        
    - **`document.getElementsByTagName()`**: 태그 이름으로 요소를 가져옵니다. HTMLCollection을 반환합니다.
        
        ```jsx
        javascript
        코드 복사
        let elements = document.getElementsByTagName('div');
        
        ```
        
    - **`document.querySelector()`**: CSS 선택자에 따라 첫 번째 요소를 가져옵니다.
        
        ```jsx
        javascript
        코드 복사
        let element = document.querySelector('.myClass');
        
        ```
        
    - **`document.querySelectorAll()`**: CSS 선택자에 따라 모든 요소를 NodeList로 가져옵니다.
        
        ```jsx
        javascript
        코드 복사
        let elements = document.querySelectorAll('div.myClass');
        
        ```
        
- 이벤트 리스너 추가하기
    
    이벤트 리스너는 특정 이벤트가 발생했을 때 실행되는 함수입니다.
    
    ### 메서드:
    
    - **`addEventListener()`**: 특정 이벤트에 대해 리스너를 추가합니다.
        
        ```jsx
        javascript
        코드 복사
        let button = document.getElementById('myButton');
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
        
        ```
        
- 이벤트 리스너 제거하기
    
    이벤트 리스너를 제거하려면, 리스너에 대한 참조가 필요합니다.
    
    ### 메서드:
    
    - **`removeEventListener()`**: 이전에 추가한 리스너를 제거합니다.
    
    ```jsx
    javascript
    코드 복사
    function handleClick() {
        alert('Button clicked!');
    }
    
    let button = document.getElementById('myButton');
    button.addEventListener('click', handleClick);
    
    // 나중에 이벤트 리스너를 제거
    button.removeEventListener('click', handleClick);
    
    ```
    
- 키보드와 마우스 이벤트
    
    ### 키보드 이벤트:
    
    - **`keydown`**: 키가 눌릴 때 발생합니다.
    - **`keyup`**: 키에서 손을 뗄 때 발생합니다.
    
    ```jsx
    javascript
    코드 복사
    document.addEventListener('keydown', function(event) {
        console.log('Key pressed:', event.key);
    });
    
    ```
    
    ### 마우스 이벤트:
    
    - **`click`**: 마우스를 클릭할 때 발생합니다.
    - **`dblclick`**: 마우스를 더블 클릭할 때 발생합니다.
    - **`mouseover`**: 마우스가 요소 위로 올라갈 때 발생합니다.
    - **`mouseout`**: 마우스가 요소 밖으로 나갈 때 발생합니다.
    
    ```jsx
    javascript
    코드 복사
    document.getElementById('myDiv').addEventListener('mouseover', function() {
        console.log('Mouse is over the div!');
    });
    
    ```
    
- 태그 속성 다루기
    
    DOM 요소의 속성을 다루는 방법입니다.
    
    ### 속성 관련 메서드:
    
    - **`getAttribute()`**: 요소의 특정 속성 값을 가져옵니다.
        
        ```jsx
        javascript
        코드 복사
        let src = document.getElementById('myImage').getAttribute('src');
        
        ```
        
    - **`setAttribute()`**: 요소의 특정 속성 값을 설정합니다.
        
        ```jsx
        javascript
        코드 복사
        document.getElementById('myImage').setAttribute('src', 'newImage.jpg');
        
        ```
        
    - **`removeAttribute()`**: 요소에서 속성을 제거합니다.
        
        ```jsx
        javascript
        코드 복사
        document.getElementById('myImage').removeAttribute('alt');
        
        ```
        
- 부모와 자식 태그 찾기
    
    부모 및 자식 요소를 찾는 방법입니다.
    
    ### 메서드:
    
    - **`parentNode`**: 부모 요소를 찾습니다.
        
        ```jsx
        javascript
        코드 복사
        let parent = document.getElementById('child').parentNode;
        
        ```
        
    - **`children`**: 자식 요소들을 가져옵니다. HTMLCollection을 반환합니다.
        
        ```jsx
        javascript
        코드 복사
        let children = document.getElementById('parent').children;
        
        ```
        
    - **`firstElementChild`**: 첫 번째 자식 요소를 가져옵니다.
        
        ```jsx
        javascript
        코드 복사
        let firstChild = document.getElementById('parent').firstElementChild;
        
        ```
        
    - **`lastElementChild`**: 마지막 자식 요소를 가져옵니다.
        
        ```jsx
        javascript
        코드 복사
        let lastChild = document.getElementById('parent').lastElementChild;
        
        ```
        
- 새로운 태그 만들기
    
    새로운 HTML 요소를 동적으로 생성하여 DOM에 추가할 수 있습니다.
    
    ### 메서드:
    
    - **`createElement()`**: 새 HTML 요소를 생성합니다.
        
        ```jsx
        javascript
        코드 복사
        let newDiv = document.createElement('div');
        newDiv.textContent = 'Hello, World!';
        document.body.appendChild(newDiv);  // 생성한 요소를 DOM에 추가
        
        ```
        
- 태그 복제하기
    
    기존의 DOM 요소를 복제할 수 있습니다.
    
    ### 메서드:
    
    - **`cloneNode()`**: 요소를 복제합니다. `true`를 인수로 전달하면 자식 요소까지 모두 복제합니다.
        
        ```jsx
        javascript
        코드 복사
        let original = document.getElementById('myDiv');
        let clone = original.cloneNode(true);  // true면 자식 요소도 복제
        document.body.appendChild(clone);
        
        ```