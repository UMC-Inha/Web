- JS에서 사칙연산을 하는 방법을 작성해주세요. 🍠
    - 더하기
        ‘+’ 사용
        let sum = 5 + 3; // 8
    - 빼기
        ‘-’ 사용
        let difference = 5 - 3; // 2
    - 곱하기
        ‘*’ 사용
        let product = 5 * 3; // 15
    - 나누기
        ‘/’ 사용
        let quotient = 10 / 2; // 5
    - 나머지 구하기
        ‘%’ 사용
        let remainder = 10 % 3; // 1
    - 거듭 제곱
        ‘**’ 사용
        let power = 2 ** 3; // 8

=============================================================================================

- JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
    1. **동등 (==)**
        
        두 값이 **동일한 값**을 가지는지를 비교한다.
        타입을 무시하고 값만 비교하므로 주의가 필요함.

        5 == '5'; // true (타입 무시)

    2. **일치 (===)**
        
        두 값이 **동일한 값**을 가지며, **같은 타입**인지를 비교한다.
        타입까지 정확하게 비교하므로 더 신뢰할 수 있다.

        5 === '5'; // false (타입이 다름)

    3. **부등 (!=)**
        
        두 값이 **같지 않은지**를 비교합니다.
        동등 연산자처럼 타입을 무시하고 비교한다.
 
        5 != '5'; // false (값은 같으므로 거짓)

    4. **불일치 (!==)**
        
        두 값이 **같지 않거나**, **타입이 다르면** 참을 반환한다.

        5 !== '5'; // true (타입이 다르기 때문에 참)

    5. **크다 (>)**
        
        첫 번째 값이 두 번째 값보다 **큰지**를 비교한다.

        7 > 5; // true

    6. **작다 (<)**
        
        첫 번째 값이 두 번째 값보다 **작은지**를 비교한다.

        3 < 5; // true

    7. **크거나 같다 (>=)**
        
        첫 번째 값이 두 번째 값보다 **크거나 같은지**를 비교한다.

        5 >= 5; // true

    8. **작거나 같다 (<=)**
        
        첫 번째 값이 두 번째 값보다 **작거나 같은지**를 비교한다.

        3 <= 5; // true

=============================================================================================

- JS에서 증가/감소 연산을 하는 여러가지 방법
    
    JavaScript에서 **증가/감소 연산자**는 변수의 값을 **1씩 증가** 또는 **1씩 감소**시킬 때 사용한다. 이 연산자들은 값이 변경된 후에 적용되는지, 변경되기 전에 적용되는지에 따라 **후위(Postfix)** 또는 전위(Prefix)로 나뉜다.
    
    ### 1. **후위 증가 연산자 (Postfix Increment) `a++`**
    
    **현재 값을 먼저 사용한 후** 값을 1 증가시킨다.

    let a = 5;
    let result = a++; // result는 5, a는 6이 된다.

    ### 2. **전위 증가 연산자 (Prefix Increment) `++a`**
    
    **값을 먼저 1 증가시키고** 그 값을 사용한다.

    let b = 5;
    let result = ++b; // result는 6, b는 6이 된다.

    ### 3. **후위 감소 연산자 (Postfix Decrement) `a--`**
    
    **현재 값을 먼저 사용한 후** 값을 1 감소시킨다.

    let c = 5;
    let result = c--; // result는 5, c는 4가 된다.

    ### 4. **전위 감소 연산자 (Prefix Decrement) `-a`**
    
    **값을 먼저 1 감소시키고** 그 값을 사용한다.

    let d = 5;
    let result = --d; // result는 4, d는 4가 된다.


=============================================================================================
연산자 우선순위
JavaScript에서 연산자 우선순위는 어떤 연산이 먼저 수행 될 지를 결정하는데, 높은 우선순위를 가진 연산자가 먼저 실행된다. 아래는 일반적으로 많이 사용되는 연산자들의 우선순위를 높은 순서에서 낮은 순서로 정리한 표다.
| **우선순위** | **연산자** | **설명** | **예시** |
| --- | --- | --- | --- |
| 1 | `()` | **괄호** | `(3 + 5) * 2 // 16` |
| 2 | `**` | **거듭 제곱** | `2 ** 3 // 8` |
| 3 | `*`, `/`, `%` | **곱하기, 나누기, 나머지** | `10 / 2 * 5 // 25` |
| 4 | `+`, `-` | **더하기, 빼기** | `5 + 3 - 2 // 6` |
| 5 | `<`, `>`, `<=`, `>=` | **비교 연산** | `5 > 3 // true` |
| 6 | `==`, `!=`, `===`, `!==` | **동등 및 일치 연산** | `5 === '5' // false` |
| 7 | `&&` | **논리 AND** | `true && false // false` |
| 8 | ` |  | ` |
| 9 | `=`, `+=`, `-=`, `*=`, `/=` | **할당 연산자** | `x += 5 // x는 15` |
// 노션에는 가독성 좋게 해놨는데, vscode 상에는 이쁘게 안나오네요 ㅠㅠ


=============================================================================================

string 🍠
1. 작은따옴표('), 큰따옴표("), 백틱(`)
JavaScript에서 문자열을 선언할 때, 작은따옴표('), 큰따옴표("), 백틱(`)을 사용할 수 있다.

작은따옴표와 큰따옴표는 큰 차이가 없으며, 상황에 맞게 사용하면 된다.
예를 들어, HTML 코드를 다룰 때는 바깥을 작은따옴표로 감싸는 것이 편리하다.

let html = '<div class="box"> 텍스트 </div>';

반면, 영어 문장을 다룰 때는 작은따옴표를 사용할 일이 많기 때문에, 큰따옴표로 감싸는 것이 편하다.

let time = "It's 4 o'clock.";

백틱(`)은 문자열 중간에 변수를 삽입할 수 있고, 여러 줄의 문자열을 직관적으로 작성할 수 있다.
let name = 'Cookie';
let introduce = My name is ${name}.; // My name is Cookie.

또한 여러 줄 문자열도 쉽게 작성할 수 있다.

let a = '여러 줄을 표현하기\n위한 테스트 문장입니다.';
let b = 여러 줄을 표현하기 위한 테스트 문장입니다.;

2. length: 문자열 길이
문자열의 길이를 알고 싶을 때는 length를 사용하면 된다.

let str = '문자열의 길이 확인.';
console.log(str.length); // 11

띄어쓰기와 마침표까지 포함해서 길이를 계산한다.

3. 특정 위치에 접근
문자열은 배열처럼 특정 위치에 접근할 수 있다.

let str = '문자열의 길이 확인.';
console.log(str[3]); // '의'

배열과 마찬가지로 0부터 시작한다.

하지만 문자열은 불변이므로 특정 위치의 문자를 변경할 수는 없다.

let str = '문자열의 길이 확인.';
str[3] = '으'; // 불가능
console.log(str[3]); // '의'

4. toUpperCase() / toLowerCase()
영어 문자열의 대소문자를 변경할 때 toUpperCase()와 toLowerCase()를 사용한다.

let english = "Hello. My name is Cookie.";
console.log(english.toUpperCase()); // 'HELLO. MY NAME IS COOKIE.'
console.log(english.toLowerCase()); // 'hello. my name is cookie.'

5. indexOf()
indexOf()는 문자열에서 특정 문자의 위치를 반환한다.

let english = "Hello. My name is Cookie.";
console.log(english.indexOf('My')); // 7
console.log(english.indexOf('Sky')); // -1

문자열에 없는 문자를 찾으면 -1을 반환한다.

문자가 여러 번 등장할 경우, 처음 등장하는 위치를 반환한다.

6. slice(n, m)
slice()는 문자열의 특정 범위를 추출하는 데 사용한다.

n부터 시작해서 m 앞까지 반환한다.

let str = 'abcdefghijk';
console.log(str.slice(2, 4)); // 'cd'

m이 없으면 끝까지, m에 음수가 있으면 끝에서부터 센다.

console.log(str.slice(3)); // 'defghijk'
console.log(str.slice(3, -2)); // 'defghi'

7. substring(n, m)
substring()은 slice()와 비슷하지만, n과 m의 순서를 바꿔도 동작한다.

let str = 'abcdefghijk';
console.log(str.substring(2, 4)); // 'cd'
console.log(str.substring(4, 2)); // 'cd'

음수는 0으로 처리된다.

8. substr(n, m)
substr()은 n부터 시작해서 m개의 문자를 반환한다.

let str = 'abcdefghijk';
console.log(str.substr(2, 4)); // 'cdef'
console.log(str.substr(-4, 2)); // 'hi'

음수를 사용하면 끝에서부터 센다.

9. trim: 앞뒤 공백 제거
trim()은 문자열의 앞뒤 공백을 제거한다. 사용자 입력 처리 시 자주 사용된다.

let str = " cookie kim ";
console.log(str.trim()); // 'cookie kim'

10. repeat(n): n번 반복
repeat(n)은 문자열을 n번 반복한다.

let str = 'test';
console.log(str.repeat(3)); // 'testtesttest'

11. 문자열 비교
문자열도 크기 비교가 가능하다.

console.log('a' < 'c'); // true

문자열의 비교는 아스키 코드 값을 기준으로 이루어진다.

아스키 코드 값을 확인하려면 codePointAt()을, 문자로 변환하려면 fromCodePoint()를 사용한다.

console.log('a'.codePointAt(0)); // 97
console.log(String.fromCodePoint(97)); // 'a'



=============================================================================================

BigInt 🍠
BigInt는 JavaScript에서 매우 큰 정수를 표현하기 위한 데이터 타입이다. 일반적인 number 타입은 IEEE 754 방식으로 저장되기 때문에, -(2^53 - 1) ~ 2^53 - 1 범위의 정수만 정확하게 표현할 수 있다. 하지만 그보다 더 큰 수를 다뤄야 할 경우, BigInt를 사용해야 한다.
BigInt 선언 방법
BigInt를 생성하는 두 가지 방법이 있다:

숫자 리터럴 뒤에 'n'을 붙여서 생성
let bigIntValue = 123456789012345678901234567890n;

BigInt() 함수를 사용해서 생성
let bigIntValue = BigInt(123456789012345678901234567890);

BigInt의 특징
큰 정수 표현
BigInt는 매우 큰 정수를 다룰 수 있다. 숫자 뒤에 n을 붙임으로써 더 이상 정밀도 손실 없이 큰 정수 값을 표현할 수 있다.

Number와 BigInt 간의 연산
BigInt와 Number 타입 간에는 직접적인 산술 연산을 할 수 없다.

예를 들어, BigInt와 Number 값을 더하려고 하면 오류가 발생한다.

let num = 10;
let bigInt = 20n;
console.log(num + bigInt); // 오류 발생

이런 경우, 하나의 값을 명시적으로 변환해야 한다.

let result = BigInt(num) + bigInt; // 정상 작동

BigInt는 소수점을 지원하지 않는다
BigInt는 정수를 나타내기 때문에 소수점을 포함할 수 없다.

let notAllowed = 1.5n; // 오류 발생

정확한 연산
Number 타입은 큰 수를 다루다 보면 정밀도가 떨어질 수 있지만, BigInt는 매우 큰 수에서도 정확하게 계산된다.

BigInt와 비교 연산
BigInt도 숫자와 마찬가지로 비교 연산이 가능하다. 다만, 서로 다른 타입을 비교할 때는 주의가 필요하다.

let bigIntValue = 123456789012345678901234567890n;
let numValue = 123456789012345678901234567890;

console.log(bigIntValue === BigInt(numValue)); // true
console.log(bigIntValue == numValue); // true

사용 예시
BigInt는 주로 암호화, 정밀도 높은 금융 계산, 과학적 계산 등에서 매우 큰 정수를 처리할 때 사용된다.

let largeNumber = BigInt("9007199254740991"); // 2^53 - 1
let evenLarger = largeNumber + 1n; // BigInt 타입끼리의 연산
console.log(evenLarger); // 9007199254740992n



=============================================================================================

다양한 Array method 정리 🍠
sort 🍠
sort()는 배열의 요소를 정렬한다. 기본적으로 요소들을 문자열로 취급하여 사전 순서대로 정렬한다. 숫자를 정렬할 때는 비교 함수를 사용해야 한다.
예시: let arr = [40, 1, 5, 200];
arr.sort(); // [1, 200, 40, 5] (문자열로 정렬)
arr.sort((a, b) => a - b); // [1, 5, 40, 200]

join 🍠
join()은 배열의 모든 요소를 하나의 문자열로 합친다. 요소 간의 구분자를 인수로 전달할 수 있다. 기본값은 쉼표(,)이다.

예시:

let arr = ['Hello', 'World'];
let str = arr.join(' '); // "Hello World"

reverse 🍠
reverse()는 배열의 요소들을 역순으로 바꾼다.

예시:

let arr = [1, 2, 3, 4];
arr.reverse(); // [4, 3, 2, 1]

splice 🍠
splice()는 배열의 요소를 추가, 삭제, 또는 교체할 수 있다. 첫 번째 인수는 변경을 시작할 인덱스, 두 번째 인수는 제거할 요소의 개수, 그 이후의 인수는 배열에 추가할 요소들이다.

예시:

let arr = [1, 2, 3, 4];
arr.splice(2, 1, 'a', 'b'); // [1, 2, 'a', 'b', 4] (2번 인덱스에서 1개를 제거하고, 'a', 'b' 추가)

slice 🍠
slice()는 배열의 일부 요소를 추출하여 새로운 배열을 반환한다. 첫 번째 인수는 시작 인덱스, 두 번째 인수는 종료 인덱스(종료 인덱스는 포함되지 않음)이다. 원본 배열은 변경되지 않는다.

예시:

let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 4); // [2, 3, 4]

find 🍠
find()는 배열에서 조건을 만족하는 첫 번째 요소를 반환한다. 조건을 만족하는 요소가 없으면 undefined를 반환한다.

예시:

let arr = [1, 2, 3, 4];
let found = arr.find(element => element > 2); // 3

filter 🍠
filter()는 배열에서 조건을 만족하는 모든 요소를 추출하여 새로운 배열을 반환한다.

예시:

let arr = [1, 2, 3, 4];
let filtered = arr.filter(element => element > 2); // [3, 4]

map 🍠
map()은 배열의 각 요소에 대해 주어진 함수를 적용한 결과를 새로운 배열로 반환한다.

예시:

let arr = [1, 2, 3];
let mapped = arr.map(element => element * 2); // [2, 4, 6]

reduce 🍠
reduce()는 배열의 각 요소를 순차적으로 누적 계산하여 단일 값을 반환한다. 첫 번째 인수는 누적값, 두 번째 인수는 현재 요소를 나타낸다.

예시:

let arr = [1, 2, 3, 4];
let sum = arr.reduce((accumulator, current) => accumulator + current, 0); // 10

some 🍠
some()은 배열의 요소 중 하나 이상이 조건을 만족하는지 확인하여, 조건을 만족하는 요소가 있으면 true, 없으면 false를 반환한다.

예시:

let arr = [1, 2, 3, 4];
let hasLargeNumber = arr.some(element => element > 3); // true

every 🍠
every()는 배열의 모든 요소가 조건을 만족하는지 확인한다. 모든 요소가 조건을 만족하면 true, 그렇지 않으면 false를 반환한다.

예시:

let arr = [1, 2, 3, 4];
let allBelowFive = arr.every(element => element <summary 5); // true

forEach 🍠
forEach()는 배열의 각 요소에 대해 지정된 함수를 실행한다. 반환값이 없으며, 주로 배열의 각 요소를 처리할 때 사용한다.

예시:

let arr = [1, 2, 3];
arr.forEach(element => console.log(element * 2)); // 2, 4, 6 출력





=============================================================================================

- 호이스팅 🍠

호이스팅이란, 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
우리가 `var`이 아닌 `let`과 `const`를 이용하는 이유중 하나가, `var`은 호이스팅 현상을 막아주지 못하는 반면, `let` 과 `const`는 막아줄 수 있기 때문이다. 그러나 함수 선언문과 함수 표현식에서의 호이스팅 동작은 다르게 나타난다.

다음과 같이 함수 선언문은 **완전히 호이스팅**된다. 즉, 함수 선언 자체가 코드의 최상단으로 끌어올려지기 때문에, 함수가 선언되기 전에도 호출할 수 있다.

// 함수가 선언되기 전에 호출해도 작동한다
console.log(subtraction(5, 3)); // 2

function subtraction(a, b) {
    return a - b;
}
이 코드에서 `subtraction(5, 3)`은 함수 선언문보다 위에 있지만, 호출이 정상적으로 작동한다. 이는 함수 선언이 호이스팅되어 코드 실행 전에 메모리에 올라가 있기 때문이다.

하지만, 함수 표현식은 함수 선언문과 달리 **호이스팅되지 않는다**. 함수 표현식에서 선언된 함수는 실제로 해당 코드 줄에 도달했을 때 비로소 사용할 수 있다.

console.log(subtraction2(5, 3)); 
// Cannot access 'subtraction2' before initialization 에러 뜸

let subtraction2 = function (a, b) {
    return a - b;
};$

이 코드에서 `subtraction2(5, 3)`을 호출하면 오류가 발생한다. 

이유는 변수 `subtraction2`는 **호이스팅**되었지만, 값이 할당되기 전까지는 `undefined` 상태이기 때문이다. 즉, 함수 표현식 자체는 호이스팅되지 않고, 변수만 호이스팅된다.

**화살표 함수**도 함수 표현식과 동일하게 동작한다. 즉, **함수 선언 전**에 호출하면 오류가 발생한다.
console.log(subtraction3(5, 3)); // 표현식과 동일하게 오류 생김

let subtraction3 = (a, b) => {
    return a - b;
};
이 역시 subtraction3 변수는 호이스팅되지만 함수 자체는 할당되기 전까지 undefined 상태이므로, 호출 시 오류가 발생한다.
</details>
// 위에 항목들은 잘 접히는데 이건 왜 안접히네요... ㅠㅠ

=============================================================================================
<details> 
<summary>getter 🍠</summary>

getter는 클래스의 속성 값을 읽을 때 사용한다. get 키워드를 사용하여 선언하며, 속성에 접근할 때 마치 속성처럼 호출할 수 있다.

// Getter 메서드
class Student {
    constructor(name, school) {
        this.name = name;
        this.school = school;
    }

    // Getter 메서드
    get studentName() {
        return this.name;
    }

    // 메소드
    introduction() {
        console.log(`안녕하세요, ${this.name}입니다. ${this.school}에 다니고 있습니다.`);
    }
}

const matthew = new Student('matthew', '상명대학교');
console.log(matthew.studentName); // getter를 통해 이름을 읽음

`get studentName()`은 **getter** 메서드이고, 이 메서드는 `matthew.studentName`으로 접근할 수 있으며, **마치 속성처럼** 값을 읽을 수 있다.

getter는 값을 가져오는 데 사용되며, 추가적인 로직을 포함할 수 있는데, 또한 프라이빗 필드(#)를 수정하거나, 접근할 수 있다.

</details>

=============================================================================================

<details> <summary>setter 🍠</summary>
setter는 클래스의 속성 값을 설정할 때 사용한다. 
이는 set 키워드를 사용하여 선언하며, 속성 값을 할당하는 것처럼 사용할 수 있다.

// Setter 메서드
class Student {
    constructor(name, school) {
        this.name = name;
        this.school = school;
    }

    // Setter 메서드
    set studentName(newName) {
        if (newName.length >= 2) {
            this.name = newName;
        } else {
            console.log('이름은 2자 이상이어야 합니다.');
        }
    }

    // 메소드
    introduction() {
        console.log(`안녕하세요, ${this.name}입니다. ${this.school}에 다니고 있습니다.`);
    }
}

const matthew = new Student('matthew', '상명대학교');
console.log(matthew.name); // 'matthew'

matthew.studentName = 'kim'; // 이름이 변경됨
console.log(matthew.name); // 'kim'

matthew.studentName = 'k'; // 이름이 너무 짧아서 변경되지 않음
matthew.introduction();

`set studentName(newName)`은 **setter** 메서드이고, `matthew.studentName = 'kim'`처럼 값을 할당하면, 자동으로 setter가 호출되어 `this.name` 값을 변경한다.

이 setter는 값을 변경할 때 추가적인 로직을 포함할 수 있다.

또한, getter와 동일하게 프라이빗 필드(#)를 수정하거나, 접근할 수 있다.
</details>

=============================================================================================

DOM 조작 🍠

- 태그 가져오기
    
    HTML 문서에서 특정 태그나 요소를 가져올 때 `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `querySelector()`, `querySelectorAll()` 등을 사용한다.
    
    ```jsx
    // ID로 가져오기
    let element = document.getElementById('myElement');
    
    // 클래스 이름으로 가져오기
    let elements = document.getElementsByClassName('myClass');
    
    // 태그 이름으로 가져오기
    let divs = document.getElementsByTagName('div');
    
    // CSS 선택자로 가져오기
    let firstDiv = document.querySelector('div');
    let allDivs = document.querySelectorAll('div');
    ```
    
- 이벤트 리스너 추가하기
    
    HTML 요소에 **이벤트 리스너**를 추가하여 사용자의 상호작용을 처리할 수 있다. 대표적인 메서드는 `addEventListener()`이다.
    
    ```jsx
    let button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        alert('버튼이 클릭되었습니다!');
    });
    ```
    
- 이벤트 리스너 제거하기
    
    이벤트 리스너는 필요에 따라 제거할 수 있다. 이를 위해서는 먼저 리스너 함수에 대한 참조를 저장하고, `removeEventListener()` 메서드를 사용한다.
    
    ```jsx
    function handleClick() {
        alert('버튼 클릭!');
    }
    
    button.addEventListener('click', handleClick);
    button.removeEventListener('click', handleClick);
    ```
    
- 키보드와 마우스 이벤트
    
    **키보드 이벤트**와 **마우스 이벤트**는 사용자 입력을 처리하는 데 사용된다. `keydown`, `keyup`, `click`, `mousemove` 등의 이벤트를 처리할 수 있다.
    
    ```jsx
    // 키보드 이벤트
    document.addEventListener('keydown', function(event) {
        console.log(`키가 눌렸습니다: ${event.key}`);
    });
    
    // 마우스 이벤트
    document.addEventListener('click', function(event) {
        console.log(`마우스 클릭 위치: X = ${event.clientX}, Y = ${event.clientY}`);
    });
    ```
    
- 태그 속성 다루기
    
    DOM 요소의 **속성**을 읽거나 수정할 수 있다. `getAttribute()`와 `setAttribute()` 메서드를 통해 요소의 속성을 가져오거나 설정할 수 있다.
    
    ```jsx
    let img = document.querySelector('img');
    
    // 속성 가져오기
    let src = img.getAttribute('src');
    
    // 속성 설정하기
    img.setAttribute('alt', '이미지 설명');
    ```
    
- 부모와 자식 태그 찾기
    
    DOM 트리에서 특정 요소의 **부모**나 **자식** 요소를 탐색할 수 있다. 이를 위해 `parentElement`, `children`, `firstElementChild`, `lastElementChild` 등을 사용한다.
    
    ```jsx
    let parent = element.parentElement; // 부모 태그 가져오기
    let children = element.children; // 자식 태그 모두 가져오기
    let firstChild = element.firstElementChild; // 첫 번째 자식 태그 가져오기
    let lastChild = element.lastElementChild; // 마지막 자식 태그 가져오기
    ```
    
- 새로운 태그 만들기
    
    DOM에 **새로운 요소**를 추가하려면 `createElement()`를 사용하여 새 태그를 만들고, 이를 원하는 위치에 추가한다.
    
    ```jsx
    let newDiv = document.createElement('div');
    newDiv.textContent = '새로운 div 요소';
    document.body.appendChild(newDiv); // 새 요소를 body에 추가
    ```
    
- 태그 복제하기



    
    DOM 요소를 **복제**하려면 `cloneNode()`를 사용한다. `true`를 인수로 전달하면 자식 요소들까지 포함한 **깊은 복사**를 수행한다.
    
    ```jsx
    let originalDiv = document.getElementById('original');
    let clonedDiv = originalDiv.cloneNode(true); // 깊은 복사
    document.body.appendChild(clonedDiv);
    ```

