- border vs outline의 차이점 🍠
    
    border-box의 경우 정해진 크기 안에 선이 생기는 반면, outline을 적용한 박스에는 정해진 크기 외부에 선이 생긴다.

- relative / absolute 🍠

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
        width: 100px;
        height: 100px;
        background-color: purple;
        color: white;
        box-sizing: border-box;
        position: absolute;
        top:60px;
    }

    .relative{
        position:relative;
    }
  </style>
</head>

<body>
  <div class="box">BOX</div>
  <h1 class="relative">고구마 상자</h1>
</body>

</html>
```

- 정렬의 진수
    - text-align
        
        블록 요소나 표의 칸 상자의 가로 정렬을 설정
        
    - margin
        
        요소의 네 방향 바깥 여백 영역을 설정
        
    - flex
        
        하나의 플렉스 아이템이 자신의 컨테이너가 차지하는 공간에 맞추기 위해 크기를 키우거나 줄이는 방법을 설정하는 속성
        
    - translate
        
        요소의 위치를 수평 또는 수직 방향으로 변경하거나, 수평 및 수직 방향으로 변경
        
    - grid
        
        웹 페이지의 요소들을 행과 열로 구성된 격자 형태로 배치

- 반응형 background
    - background-image
        
        요소의 배경 이미지를 한 개나 여러 개 지정
        
    - background-repeat
        
        배경 이미지의 반복 방법을 지정. 가로축 및 세로축을 따라 반복할 수 있고, 아예 반복하지 않을 수도 있다.
        
    - background-position
        
        background-image의 초기 위치를 설정
        
    - background-size
        
        background-image 요소의 사이즈를 설정. 자연스러운 사이즈로 설정하거나 늘리거나, 공간에 맞춰 조절 가능
        
    - 축약형
        
        색상, 이미지, 원점, 크기, 반복 등 여러 배경 스타일을 한 번에 지정
        
        - example
        
        ```html
        background: left 5% / 15% 60% repeat-x url("../../media/examples/star.png");
        ```

- transform 🍠

    - translate
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .box {
                transform: translate(42px, 18px);
            }
        </style>
        </head>
        
        <body>
        <div class="box">BOX</div>
        </body>
        
        </html>
        ```
        
    - scale
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                div {
                    width: 80px;
                    height: 80px;
                    background-color: skyblue;
                }
        
                .scaled {
                    transform: scaleX(0.6);
                    background-color: pink;
                }
            </style>
        </head>
        <body>
            <div>Normal</div>
            <div class="scaled">Scaled</div>
        </body>
        </html>
        ```
        
    - rotate
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                div {
                    width: 80px;
                    height: 80px;
                    background-color: skyblue;
                }
        
                .rotated {
                    transform: rotate(45deg); /* Equal to rotateZ(45deg) */
                    background-color: pink;
                }
            </style>
        </head>
        <body>
            <div>Normal</div>
            <div class="rotated">Rotated</div>
        
        </body>
        </html>
        ```
        
    - skew
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                body {
                    margin: 20px;
                }
        
                div {
                    width: 80px;
                    height: 80px;
                    background-color: skyblue;
                }
        
                .skewed {
                    transform: skew(10deg); /* Equal to skewX(10deg) */
                    background-color: pink;
                }
        
            </style>
        </head>
        <body>
            <div>Normal</div>
            <div class="skewed">Skewed</div>    
        </body>
        </html>
        ```
        
    - matrix
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
            div {
                    width: 80px;
                    height: 80px;
                    background-color: skyblue;
                }
        
                .changed {
                    transform: matrix(1, 2, -1, 1, 80, 80);
                    background-color: pink;
                }
        
            </style>
        </head>
        <body>
            <div>Normal</div>
            <div class="changed">Changed</div>
        
        </body>
        </html>
        ```

- transition
    - transition-property
        
        transition effect를 주는 속성들. 예제로는 다음과 같이 있다.
        
        ```html
        .target {
        transition-property: background-color;
        transition-duration: 1s;
        background-color: #ccc;
        }
        
        .target:hover,
        .target:focus {
        background-color: #eee;
        }
        ```
        
    - transition-duration
        
        transition 완료 시까지의 시간을 설정
        
    - transition-timingfunction
        
        transition effect에 영향을 줄 애니메이션 속성을 정할 수 있다.
        
    - transition-delay
        
        animation을 적용할 때 영향을 줄 delay설정
        
    - transition-behavior
        
        display, visibility 등 discret 속성에 대해 transition이 가능하게 해준다.

    
    
    - 실습
        ```html
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    div {
                        width: 80px;
                        height: 80px;
                    }

                    .rotated {
                        transform: rotate(45deg);
                        background-color: pink;
                        margin:40px;
                    }

                    .target {
                        transition-property: background-color;
                        transition-duration: .5s;
                    }

                    .target:hover,
                    .target:focus {
                        background-color: purple;
                    }

                </style>
            </head>
            <body>
                <div class="rotated target"></div>
                <div class="rotated target"></div>
                <div class="rotated target"></div>
            </body>
            </html>
        ```

- animation 🍠

    - animation-name
        
        애니메이션 이름 지정. 정해진 액션을 수행함
        
    - animation-duration
        
        애니메이션이 완료하는데 걸리는 시간 설정
        
    - animation-delay
        
        애니메이션 시작 전 대기시간 설정
        
    - animation-direction
        
        애니메이션 방향 설정
        
    - animation-iteration-count
        
        반복 횟수 설정
        
    - animation-play-state
        
        애니메이션 상태 설정. 멈추거나 실행
        
    - animation-timing-function
        
        애니메이션 속도 곡선 설정
        
    - animation-fill-mode
        
        애니메이션 실행 전후의 스타일을 어떻게 적용할지 지정
        
    - @keyframes
        
        프레임 단위로 애니메이션 지정
        
    - 축약형
        
        이름, 지속시간, 딜레이 등 모든 속성을 한번에 설정함

    - 실습
    ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                div {
                    width: 80px;
                    height: 80px;
                }

                .circle {
                    border-radius: 50%;
                    background-color: purple;
                    animation: 1s ease 0s infinite alternate bounce;
                }

                @keyframes bounce {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        width: 100px;
                        transform: translateY(200px);
                    }
                }

            </style>
        </head>
        <body>
            <div class="circle"></div>
        </body>
        </html>
    ```