- HTML이란?
  ### HTML
  HTML 이란 무엇인가?
  **`Hyper Text Markup Language`**
  웹사이트 표시를 위해 개발된 마크업 언어
  즉, 문서의 내용을 태그를 사용하여 구성합니다.
  **`Hyper Text`**의 의미는 하이퍼링크를 통해 한문서에서 다른 문서로 즉시 접근하게 해준다는 의미이다. 즉 **`<a> 태그의 역할`**과 비슷하다고 보면 된다.
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <!-- meta태그를 사용하여, 다양한 속성 지정 가능 -->
      <!-- 문자열 세트 (charset): UTF-8 인코딩 : 다양한 언어 꺠짐 현상을 나타냄 -->
      <meta charset="UTF-8" />
      <!-- http-equiv IE 주소바에 호환성 안보이게 content, Edge렌더링 엔진 쓰게 -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!-- 사용자의 디바이스 크기에 맞게 콘텐츠를 표시할 수 있도록 명시 -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <!-- 123 -->
      <div>123</div>
    </body>
  </html>
  ```
- 시맨틱 태그란?
  - div 태그로만 페이지를 구조화 하는 것이 좋은가? 🍠
    - **SEO (Search Engine Optimization 검색 최적화)**
      이름 그대로, 시맨틱 태그로 구성을 잘 해놓으면 검색엔진을 통한 사용자의 접근이 높아짐
      하지만, 사내 채팅 프로그램이나 스케줄러 등, 임의의 사용자가 접근할 이유가 없는 서비스라면, 굳이 시맨틱 태그를 사용해야 할까?
      그리고 react 같은 라이브러리를 사용하면 CSR방식이기 때문에, 시맨틱 태그를 아무리 신경쓴다고 해도 SEO가 의미가 없다.
    - 가독성

      시맨틱 태그를 적절히 사용하면, 페이지 단위로 작성한 바닐라 웹에서 정말 높은 가독성을 챙길 수 있다.

      그런데, 모든 웹의 시작은 바닐라 웹, 리액트에서 사용하는 컴포넌트에 대한 아이디어도 이미 바닐라 웹에 있고, 사용되어 왔다.

      컴포넌트의 구조를 가져가는 경우 오히려 컴포넌트가 사용되는 범위를 축소시키기 때문에 오히려 안 쓰는 게 좋다고 생각하고,

      ( 예를 들어 유튜브를 리액트로 만들 때, 비디오 리스트를 main태그로 작업했는데, 이후에 연관된 비디오 리스트처럼 다른 곳에도 비디오 리스트 컴포넌트를 재활용 → 개발자 입장에선 main태그기 때문에 비디오 리스트 컴포넌트가 연관 비디오 같은 요소에 들어가 있을 거라고 예상하기 어렵다. )

      어차피 컴포넌트로 구조화 한다면, div태그만 사용하는 것과 가독성 면에서 차이가 있는 지는 의문

    - **결론**
      만들고자 하는 서비스에 따라 중요한 요소가 될 순 있지만, 그렇지 않다면 취향차이.
      저는 개인적으로 scss를 사용할 때 가독성이 좋게 느껴진다고 생각해서, 대부분 적용하긴 하지만,
      CSS in JS 방식을 사용한다면 footer, header 처럼 사용 되는 위치가 절대 변하지 않는 경우에 ui 같은 구조로 분리해서 사용합니다.
      굳이 main / section 를 억지로 사용해서 확장성을 줄이고 싶지 않다고 생각합니다
      ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/6d2e7f36-fa8a-413f-9e0e-7a69ae79cee7/image.png)
  - div태그를 남용하지 않기 위해 자주 사용하는 태그.
    `header`, `nav`, `article`, `section`, `aside`, `footer` 와 같은 태그들을 주로 사용합니다.
  - 멀티미디어 요소를 나타내는 태그
      <aside>
      💡 이전, IE를 사용하던 시대는, Active X나 플래시를 설치하여, 영상을 보던 시대가 있었습니다. 하지만, `audio`, `video`, `canvas` 태그가 나오며, Active X 플러그인이 따로 필요 ❌
      
      </aside>

  - IE에서 사용되던 불필요한 태그 제거
    `acronym`, `applet`, `dir`, `isindex`… 등
  - 기타 태그 추가 정리해보기 🍠
    - dialog
      모달창을 태그로 간단하게 만들 수 있습니다
      ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/b26f86a9-fe26-4428-aeec-6e4077ccb72a/image.png)
      ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/384c5624-c417-4d0f-a5ac-57da26c83c29/image.png)
- HTML 구성 요소
  ### HTML 구성 요소
  HTML 문서는 HTML 요소(elements) 들로 구성됨
  1. **`HTML 요소는 태그 한 쌍`**으로 이루어 짐
  ```tsx
  // p => paragraph (단락, 절) 시작/종료 태그로 이루어짐
  <p>야호야호야호야호야호야호!!</p>
  ```
  1. **`속성`**도 들어있을 수 있음. (시작태그 안에 명시)
  ```tsx
  <태그 속성1="값 1">컨텐츠 보이는 요소</태그>
  ```
  1. **`태그 안에 태그`** 중첩 요소도 사용 가능
  ```tsx
  <p>
    Hello <strong>World!</strong>
  </p>
  ```
  1. **`컨텐츠가 없는 태그`**도 사용 가능
  ```tsx
  <img src="image.png" alt="profile" />
  // 컨텐츠가 없는 태그도 있음.
  ```
- head 태그
  # <head>
  `<head>`는, 페이지를 열 떄 브라우저에 표시되는 `<body>` 요소와 다르게, `<head>`의 내용은 페이지에 표시되지 않습니다. 대신에 `<head>`의 내용이 하는 일은, 페이지에 대한 metadata를 포함하는 것 입니다.
  ![스크린샷 2024-07-15 오후 2.27.45.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/70003598-c4a5-49e5-b100-aed87b971081/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.27.45.png)
  ### <head>에서 주로 사용하는 태그들의 간단 설명
  1. 이 파일의 문서는 HTML이다.
  ```html
  <!DOCTYPE html>
  ```
  1. html 태그 작성 언어 정의
  ```html
  <html lang="ko">
    // 문서에서 주로 사용하는 언어
  </html>
  ```
  [List of ISO 639 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
  1. head 태그
  ```html
  // 문서의 메타데이터 + UI상으로 보여지지 않는 정보들. // SEO (타이틀, 설명,
  저자), CSS 스타일, JS 링크 // meta 태그를 통해 다양한 속성을 지정 가능.
  <head>
    <!-- meta태그를 사용하여, 다양한 속성 지정 가능 -->
    <!-- 문자열 세트 (charset): UTF-8 인코딩 : 다양한 언어 꺠짐 현상을 나타냄 -->
    <meta charset="UTF-8" />
    <!-- http-equiv IE 주소바에 호환성 안보이게 content, Edge렌더링 엔진 쓰게 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- 사용자의 디바이스 크기에 맞게 콘텐츠를 표시할 수 있도록 명시 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  ```
  ### <body>
  `<body>` 태그 내부에 이제 화면에서 보여질 내용들을 작성해주면 됩니다. (자세한 설명은 아래 토글에)
  ```html
  <body>
    문서의 UI 구성 요소들.
  </body>
  ```
- body 태그 (Semantic Tag 활용)
  ### <body>
  **`body 태그`**에는 웹사이트의 내용이 들어가있다. (즉, 사용자들이 화면으로 볼 수 있는 내용 )
  우리가, **`웹 사이트`**, **`웹 어플리케이션`**을 만들고자 할 때, 해당 서비스가 어떠한 목적(ex. 영상 서비스를 제공하는 유튜브, 사용자들의 게시글, 광고 게시글을 관리하는 페이스북, 인스타그램 etc)을 갖고 있는지에 따라, 어떻게 웹 사이트를 구조화하여 나타낼 것인지 달라질 수 있습니다.
  웹 사이트는, 사용자의 설계 목적에 따라, 매우 달라질 수 있으므로, 정해진 골격을 활용하는 것이 아닌, 내가 어떠한 부분을 사용자에게 어필할 것인지에 따라, 구조가 달라짐으로, 사**`용자에게 의미있는 부분을 시각적으로 나타내는 것이 매우 중요`**합니다.
  **`Ambiguous Sections` 처럼 div 태그만 남발하는 것 보다 웹 브라우저가 HTML을 해석하기 쉽고, 웹 접근성을 고려한 `Clear Sections` 처럼, 시멘틱 태그를 잘 활용하여, `시멘틱 태그를 사용할 떄의 장점`을 충분히 활용하는 것을 추천합니다.**
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/73f82818-771e-415d-aeae-e7d21ae3cac7/Untitled.png)
  - **`Sementic Tag`**를 잘 활용하였을 때 장점은? 🍠
- 태그 정리
  - `element` vs `container`
    ### element level
    element level의 태그들은 아래와 같다.
    ```tsx
    <h1>
    <h2>
    .
    .
    <h6>

    <address>
    <blockquote>
    <p> : UI를 나타내는 것
    <pre>
    <table>
    <ol>
    <ul>
    <a>
    <abbr> : 축약을 나타냄
    <audio>
    <b>
    <span>
    <cite>
    <code>
    <data>
    <i>
    <mark> : UI를 나타내는 것
    ```
    ### container level
    여러가지를 담을 수 있는 것을 container 요소라고 한다.
    ```tsx
    <div>
    <section>
    <article>
    <header>
    <footer>
    <aside>
    <nav>
    <main>
    ```
    - Element Level과 Container Level은 무엇을 의미하며, 어떤 것이 다른지 정리해주세요.
      <aside>
      💡 모든 html 태그를 암기할 필요도 없고, 암기하는 것은 쉽지 않습니다. 
      많이 사용하는 Tag 위주로, 기억해두고, 나중에 필요할 때 아래의 mdn과 같은 자료를 활용하면 매우 좋습니다.
      
      </aside>
      
      https://developer.mozilla.org/ko/docs/Web/HTML/Element

  - `block` vs `inline`
    ### block
    **`block`** 요소는 요소가 한 줄을 꽉 차지함.
    ![스크린샷 2024-07-17 오전 7.37.29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/f2672c25-642f-4adb-b8a7-b350cbf2de52/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-17_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_7.37.29.png)
    ```html
    <h1>
    <h2>
    <h3>
    <h4>
    <h5>
    <h6>

    <address>

    <blockquote>

    <p>

    <pre>

    <table>

    <ol>

    <ul>
    ```
    ### inline
    **`inline`** 요소는 본인의 크기 만큼 딱 차지한다. ( 단, 본인의 크기 만큼 남은 공간이 없을 경우, 다음 줄로 넘어간다. )
    ![스크린샷 2024-07-17 오전 7.37.56.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/62d49404-42e4-433e-bb62-43c6f026d345/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-17_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_7.37.56.png)
    ```html
    <a>
      <abbr>
        <audio>
          <b>
            <span>
              <cite>
                <code>
                  <data>
                    <i> <mark></mark></i></data></code></cite></span
          ></b></audio></abbr
    ></a>
    ```
    ### 실습 🍠
    - 그러면, **`inline-block`**은 어떠한 방식으로 동작할까요? 🍠
    - **`block`**, **`inline`**, **`inline-block`** 직접 html과 css를 활용해서 무엇이 다른지, **`VS Code Live Server Extension을 활용`**하여, 실습 한 이미지를 첨부하여 설명해주세요. 🍠
