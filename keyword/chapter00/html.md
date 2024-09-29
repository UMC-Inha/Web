- div 태그로만 페이지를 구조화 하는 것이 좋은가? 🍠
    
    div태그는 시맨틱 태그와는 다르게 아무런 의미를 지니지 않는다. 따라서 그 자체로는 페이지 내의 요소들이 어떤 역할을 하는지에 대한 정보를 제공하지 않기 때문에 문제를 일으킬 수 있다.

- 기타 태그 추가 정리해보기 🍠
    
    <aside>
    💡 **`<main>`**: 문서의 주요 콘텐츠를 나타냅니다. 페이지의 핵심적인 내용이 들어가는 부분입니다.
    
    **`<figure>`**, **`<figcaption>`**: 이미지나 차트 등의 시각적 콘텐츠와 그 설명을 정의할 때 사용합니다.
    </aside>

- **`Sementic Tag`**를 잘 활용하였을 때 장점은? 🍠
    
    시맨틱 태그는 문서의 구조와 콘텐츠의 의미를 더 명확하게 표현할 수 있게 해주기 때문에 웹 개발, 유지보수, SEO 등 다양한 측면에서 긍정적인 효과를 가져옵니다. 주요 장점들은 다음과 같습니다:
    
    1. **웹 접근성 개선**
        
        <aside>
        💡
        
        시맨틱 태그를 사용하면 스크린 리더와 같은 **보조 기술**이 페이지의 구조와 콘텐츠를 더 잘 이해할 수 있습니다. 예를 들어, `<header>`, `<nav>`, `<main>`, `<footer>`와 같은 태그들은 보조 기술에 페이지의 구성 요소가 어떤 역할을 하는지 알려주기 때문에 **시각 장애인** 등 다양한 사용자들이 더 쉽게 페이지를 탐색할 수 있습니다.
        
        </aside>
        
    2. **SEO(Search Engine Optimization) 향상**
        
        <aside>
        💡
        
        검색 엔진은 웹 페이지의 콘텐츠를 분석할 때 시맨틱 태그를 이용해 페이지 구조와 각 요소의 중요도를 판단합니다. 예를 들어, `<article>`, `<section>`, `<aside>`, `<footer>` 등의 시맨틱 태그는 검색 엔진이 페이지의 주요 콘텐츠와 부수적인 콘텐츠를 구분하는 데 도움을 줍니다.
        
        </aside>
        
    3. **코드 가독성 및 유지보수 용이성**
        
        <aside>
        💡
        
        - 시맨틱 태그는 HTML 코드를 읽는 개발자가 문서의 구조를 빠르게 이해하는 데 도움을 줍니다. `<div>`로만 구성된 코드와 달리, 시맨틱 태그를 사용하면 각각의 태그만 보고도 해당 요소가 어떤 역할을 하는지 알 수 있습니다.
        - 팀에서 협업할 때, 시맨틱 태그를 사용하면 팀원들끼리 의사소통이 원활해지고, **유지보수**와 **확장성**이 향상됩니다. 각 섹션이 명확하게 정의되어 있기 때문에 수정할 때 실수할 가능성이 줄어듭니다.
        </aside>

- 그러면, **`inline-block`**은 어떠한 방식으로 동작할까요? 🍠
    
    <aside>
    💡
    
    `inline-block`은 CSS에서 **인라인 요소**와 **블록 요소**의 특성을 결합한 속성으로, 요소가 **인라인**처럼 흐름에 배치되면서도 **블록**처럼 너비와 높이, 여백 등을 설정할 수 있는 특징을 가집니다. 이를 통해 레이아웃을 유연하게 구성할 수 있습니다. 
    예시로는 `<img>`, `<button>`등이 있습니다.
    
    </aside>

- **`block`**, **`inline`**, **`inline-block`** 직접 html과 css를 활용해서 무엇이 다른지, **`VS Code Live Server Extension을 활용`**하여, 실습 한 이미지를 첨부하여 설명해주세요. 🍠
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/f6da273c-a792-425c-93a7-3e4430d28d46/image.png)
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Block Example</title>
        <style>
            #inline-block-1 {
                display: inline-block;
                width: 200px;
                height: 200px;
                background-color: orange;
            }
            #inline-block-2 {
                display: inline-block;
                width: 300px;
                height: 300px;
                background-color: purple;
            }
        </style>
    </head>
    <body>
        <h1 style="background-color: beige">block ex1</h1>
        <p style="background-color: grey;">block ex2</p>
        <br>
        <span style="background-color: blue;">inline ex1</span>
        <span style="background-color: red;">inline ex2</span>
        <span style="background-color: yellow;">inline ex3</span>
        <br>
        <div id="inline-block-1">inline-block ex1</div>
        <div id="inline-block-2">inline-block ex2</div>
    </body>
    </html>
    ```
    
    ⇒ **`block`**요소는 한 줄을 차지하고, **`inline`**요소는 요소의 크기만큼  영역을 차지하고, **`inline-block`**요소는 요소가 **인라인**처럼 흐름에 배치되면서도 **블록**처럼 너비와 높이, 여백 등을 설정할 수 있는 특징을 가지는 것을 알 수 있었습니다.