- JS에서 사칙연산을 하는 방법을 작성해주세요.
    - 더하기
        
        ```jsx
        console.log(2+3);
        ```
        
    - 빼기
        
        ```jsx
        console.log(2-3);
        ```
        
    - 곱하기
        
        ```jsx
        console.log(2*3);
        ```
        
    - 나누기
        
        ```jsx
        console.log(2/3);
        ```
        
    - 나머지 구하기
        
        ```jsx
        console.log(2%3);
        ```
        
    - 거듭 제곱
        
        ```jsx
        console.log(2**3);
        console.log(Math.pow(2,3));
        ```
        
- JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요.
    
    ```jsx
    a == b //일치 연산자
    a != b //불일치
    a <= b //크기 비교
    a === b //strict 일치 연산자 (타입도 비교)
    a !== b //strict 불일치
    ```
    
- JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요.
    
    ```jsx
    a++;
    //증가 전 값 return
    ++a;
    //증가 후 값 return
    a--;
    --a;
    a +=1; // equal a = a + 1;
    ```
    
- 연산자 우선순위에 대해 작성해주세요.
    1. 쉼표/시퀸스
    2. yield, 할당 ( +=, -= ….)
        - yield - generator  함수를 중지하거나 재개 시 사용
    3. 삼항연산자
    4. 논리연산자
    5. 비교연산자
    6. 비트연산자
    7. 사칙연산
    8. 전위증가, 논리/비트 NOT
    9. 후위증가
    10. 그 외…


### string

<aside>
💡 문자열 자료형으로, char형이 배열 상태로 존재한다.

</aside>

### bigint

<aside>
💡 bigint는 2^53-1 보다 큰 정수를 표현할 수 있다. 하지만 Math 객체에 접근이 안되고, Number와 혼합해 사용할 수 없다.

</aside>

### Array

- sort
    - 문자열을 오름차순으로 나열. 숫자를 sort 시 문자열로 변환 후 sort하기 때문에 주의 요함
    
    ```jsx
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);
    // Expected output: Array ["Dec", "Feb", "Jan", "March"]
    ```
    
- join
    - 배열의 요소를 지정된 구분 문자열로 구분하여 새 문자열 return
    
    ```jsx
    const elements = ['Fire', 'Air', 'Water'];
    
    console.log(elements.join());
    // Expected output: "Fire,Air,Water"
    
    console.log(elements.join(''));
    // Expected output: "FireAirWater"
    
    console.log(elements.join('-'));
    // Expected output: "Fire-Air-Water"
    
    ```
    
- reverse
    - 배열의 순서를 반전
    
    ```jsx
    const array1 = ['one', 'two', 'three'];
    console.log('array1:', array1);
    // Expected output: "array1:" Array ["one", "two", "three"]
    
    const reversed = array1.reverse();
    console.log('reversed:', reversed);
    // Expected output: "reversed:" Array ["three", "two", "one"]
    ```
    
- splice
    - 기존 배열의 요소를 삭제하거나 교체, 추가
    
    ```jsx
    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // Inserts at index 1
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
    
    months.splice(4, 1, 'May');
    // Replaces 1 element at index 4
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
    ```
    
- slice
    - begin부터 end - 1까지 shallow copy를 return한다
    
    ```jsx
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    
    console.log(animals.slice(2));
    // Expected output: Array ["camel", "duck", "elephant"]
    
    console.log(animals.slice(2, 4));
    // Expected output: Array ["camel", "duck"]
    ```
    
- find
    - 제공된 배열에서 테스트 함수의 return이 true인 첫번째 요소를 return
    
    ```jsx
    const array1 = [5, 12, 8, 130, 44];
    
    const found = array1.find((element) => element > 10);
    
    console.log(found);
    // Expected output: 12
    
    ```
    
- filter
    - 주어진 배열의 shallow copy를 생성하고 함수의 true 값들로만 필터링
    
    ```jsx
    const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
    
    const result = words.filter((word) => word.length > 6);
    
    console.log(result);
    // Expected output: Array ["exuberant", "destruction", "present"]
    
    ```
    
- map
    - 배열 내의 모든 요소를 함수로 호출한 결과를 return
    
    ```jsx
    const array1 = [1, 4, 9, 16];
    
    // Pass a function to map
    const map1 = array1.map((x) => x * 2);
    
    console.log(map1);
    // Expected output: Array [2, 8, 18, 32]
    
    ```
    
- reduce
    - 배열의 각 요소에 대해 reducer 함수를 실행하고, 결과값 return
    
    ```jsx
    const array1 = [1, 2, 3, 4];
    
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    
    console.log(sumWithInitial);
    // Expected output: 10
    
    ```
    
- some 
    - 배열 안의 어떤 요소라도 판별 함수를 적어도 하나라도 통과하는지 확인. 통과하면 true 반환
    
    ```jsx
    const array = [1, 2, 3, 4, 5];
    
    // Checks whether an element is even
    const even = (element) => element % 2 === 0;
    
    console.log(array.some(even));
    // Expected output: true
    
    ```
    
- every
    - 배열 안의 모든 요소가 판별 함수를 통과하는지 확인. 모두 통과하면 true 반환
    
    ```jsx
    const isBelowThreshold = (currentValue) => currentValue < 40;
    
    const array1 = [1, 30, 39, 29, 10, 13];
    
    console.log(array1.every(isBelowThreshold));
    // Expected output: true
    
    ```
    
- forEach
    - 배열 요소에 대해 제공된 함수를 한번씩 실행
    
    ```jsx
    const array1 = ['a', 'b', 'c'];
    
    array1.forEach((element) => console.log(element));
    
    // Expected output: "a"
    // Expected output: "b"
    // Expected output: "c"
    
    ```

### Dom 조작

- 태그 가져오기
    - getElementById(”id명”)
    - getElementByClassName(”class명”)
    - getElementByTagName(”태그명”)
    - querySelector(선택자), querySelectorAll(선택자 or 태그)
- 이벤트 리스너 추가하기
    - element.addEventListener(type, listener, options);
- 이벤트 리스너 제거하기
    - element.removeEventListener(type, listener, options);
- 키보드와 마우스 이벤트
    - 키보드
        - addEventListener(”keydown”, (event) ⇒ {});
    - 마우스
        - addEventListner(”click”,(event) ⇒ {});
- 태그 속성 다루기
    - 속성 접근
        - element.getAttribute(”속성”);
    - 속성 추가
        - element.getAttribute(”속성”,”값”);
    - 속성 삭제
        - element.removeAttribute(”속성”);
- 부모와 자식 태그 찾기
    - 부모 노드 탐색
        - element.parentNode;
    - 자식 노드 탐색
        - element.childNodes;
        - element.firstChild;
        - element.lastChild;
- 새로운 태그 만들기
    - element.createElement(”태그”);
    - element.appendChild(element);
- 태그 복제하기
    - element.cloneNode(deep);
        - deep(optional)
            - 하위 복제 여부