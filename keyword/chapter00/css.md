- border vs outline의 차이점 🍠
    
    `border`와 `outline`은 둘 다 HTML 요소의 외곽에 선을 그리는 데 사용되지만, `border`는 요소의 크기에 영향을 주며, 박스 모델 안에 포함되는 선입니다. `outline`은 요소의 바깥쪽에 그려지며, 크기에 영향을 미치지 않고, 주로 상호작용 시 사용됩니다.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/1ad7a3c4-a26b-46df-b7ef-1a3548d11c80/image.png)
    
    좀 더 확실한 차이를 보기 위해서 border와 outline을 각각 30px로 늘렸다.

코드를 첨부해주세요 🍠
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
        position: relative;
        top: 170px;
        }
    </style>
    </head>

    <body>
    <div class="box">BOX</div>
    <h1>고구마 상자</h1>
    </body>

    </html>

- **`position: absolute`**를 활용하여 본인의 힘으로, 아래와 같은 이미지로 BOX2를 이동시켜보세요! 🍠
    
    ![스크린샷 2024-07-18 오후 7.13.52.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5a810066-8c42-4e8a-a2ac-fe8757085432/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.13.52.png)
    
    ### 코드는 아래에 첨부해주세요!
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /** 전체 선택자 기본적으로 설정된 마진을 없앰. */
        * {
        margin: 0;
        box-sizing: border-box;
        }

        body {
            position: relative;
        }

        .box1 {
        width: 500px;
        height: 500px;
        background-color: purple;
        color: white;
        position: relative;
        }

        .box2 {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 200px;
        height: 200px;
        background-color: yellow;
        }
    </style>
    </head>

    <body>
    <div class="box1">BOX1</div>
    <h1 class="box2">BOX2</h1>
    </body>

    </html>

- 반응형 background 🍠
    - background-image
        - **설명**: 요소의 배경으로 이미지를 설정하는 속성입니다.
        - **값**
            - `url('image.jpg')`: 배경 이미지로 사용할 파일의 경로를 지정합니다.
            - `none`: 배경 이미지를 사용하지 않습니다. 기본값입니다.
    - background-repeat
        - **설명**: 배경 이미지가 요소 내에서 반복되는 방식을 설정합니다. 이미지가 요소보다 작을 경우, 반복 여부를 결정합니다.
        - **값**
            - `repeat`: 이미지가 수평과 수직으로 반복됩니다. 기본값입니다.
            - `repeat-x`: 이미지가 수평 방향으로만 반복됩니다.
            - `repeat-y`: 이미지가 수직 방향으로만 반복됩니다.
            - `no-repeat`: 이미지가 반복되지 않습니다.
    - background-position
        - **설명**: 배경 이미지가 요소 내에서 배치되는 위치를 설정합니다. 기본적으로 이미지는 왼쪽 상단에 배치됩니다.
        - **값**
            - 키워드: `top`, `right`, `bottom`, `left`, `center` 등의 키워드를 사용할 수 있습니다.
            - 백분율 또는 픽셀 값: `50% 50%` (가로로 50%, 세로로 50% 위치) 또는 `10px 20px` (가로로 10px, 세로로 20px 위치)처럼 사용할 수 있습니다.
    - background-size
        - **설명**: 배경 이미지의 크기를 설정하는 속성입니다. 이미지를 요소 크기에 맞춰 조절할 때 사용합니다.
        - **값**
            - `auto`: 이미지의 원래 크기대로 표시합니다. 기본값입니다.
            - `cover`: 배경 이미지를 요소의 크기에 맞게 비율을 유지하면서 전체를 덮도록 조정합니다.
            - `contain`: 배경 이미지가 요소 내에 맞게 비율을 유지하면서 완전히 들어가도록 조정합니다.
            - 특정 크기: `100px 200px` 또는 `50% 50%` 처럼 가로, 세로 크기를 각각 지정할 수 있습니다.
    - 축약형
        - **설명**: 배경과 관련된 여러 속성들을 한 줄로 축약할 수 있습니다. 아래 속성들을 축약형으로 함께 사용할 수 있습니다:
            - `background-image`
            - `background-repeat`
            - `background-position`
            - `background-size`
            - `background-color`

transform 🍠
    ### transform 🍠

CSS transform 속성으로, 요소에 회전 크기 조절, 기울이기, 이동 효과를 부여할 수 있습니다. `transform`은 CSS [시각적 서식 모델](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)의 좌표 공간을 변경합니다.

<aside>
💡  아래 키워드를 실습한 사진과 코드를 남겨주세요!

</aside>

- translate
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/174bc5e6-5124-46dc-94a2-c305ea989753/image.png)
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            #box {
                width: 100px;
                height: 100px;
                background-color: black;
                text-align: center;
                color: white;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        </style>
    </head>
    <body>
        <div id="box">box</div>
    </body>
    </html>
    ```
    
- scale
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/19d79091-4a9f-422a-ac87-2e4678a4b46e/image.png)
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body{
                display: grid;
                place-items: center;
                height: 100vh;
                margin: 0;
            }
            #box {
                width: 100px;
                height: 100px;
                background-color: black;
                text-align: center;
                color: white;
                position: absolute;
                transform: scale(2,2);
                margin: auto;
            }
        </style>
    </head>
    <body>
        <div id="box">box</div>
    </body>
    </html>
    ```
    
- rotate
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/62135913-ae2d-40fe-9a4e-2a182770b0bc/image.png)
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body{
                display: grid;
                place-items: center;
                height: 100vh;
                margin: 0;
            }
            #box {
                width: 100px;
                height: 100px;
                background-color: black;
                text-align: center;
                color: white;
                position: absolute;
                transform: rotate(45deg);
                margin: auto;
            }
        </style>
    </head>
    <body>
        <div id="box">box</div>
    </body>
    </html>
    ```
    
- skew
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/d2c7ff52-5930-4192-9102-72df1b5209a1/image.png)
    
    ```html
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            #box {
                width: 100px;
                height: 100px;
                background-color: black;
                text-align: center;
                color: white;
                position: absolute;
                transform: skew(30deg, 10deg); /* x축 30도, y축 10도 기울임 */
            }
        </style>
    </head>
    <body>
        <div id="box">box</div>
    </body>
    </html>
    
    ```
    
- matrix
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/ae48a53e-e1aa-40e3-9711-518b0659d32b/image.png)
    
    ```html
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            #box {
                width: 100px;
                height: 100px;
                background-color: black;
                text-align: center;
                color: white;
                position: absolute;
                transform: matrix(1.5, 0.5, 0.5, 1.5, 100, 100);
            }
        </style>
    </head>
    <body>
        <div id="box">box</div>
    </body>
    </html>
    
    ```

    - transition 🍠
    
    ### transition  🍠
    
    <aside>
    💡 아래 키워드에 대해 학습한 후, 실습을 진행해주시고, 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - transition-property
        
        어떤 CSS 속성에 트랜지션을 적용할지를 지정합니다.
        
    - transition-duration
        
        트랜지션이 완료되는 데 걸리는 시간을 설정합니다.
        
        시간 단위는 `s`(초) 또는 `ms`(밀리초)로 지정할 수 있습니다.
        
    - transition-timingfunction
        
        트랜지션의 속도 곡선을 설정합니다. 즉, 애니메이션이 어떻게 진행될지를 결정합니다.
        
    - transition-delay
        
        트랜지션이 시작되기 전 대기 시간을 설정합니다.
        
    - transition-behavior
        
        애니메이션 동작이 이산적인 속성에 대해 전환을 시작할지 여부를 지정합니다.
        
    
    ### 실습  🍠
    
    **`transition`** 키워드를 학습한 후, 해당 키워드와, **`transform에서 배운 특정 키워드를 활용`**하여, 아래와 같은 영상과 비슷하게 만들어주세요! (똑같을 필요는 없고, 기능만 같으면 됩니다.)
    
    단, **`transition 축약형`**을 사용해주세요!
    
    [화면 기록 2024-07-18 오후 7.51.38.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e6dc806f-17a6-483d-b55e-e3ae81b0d27c/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.51.38.mov)
    
    - 코드 첨부 🍠
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                body {
                    display: flex;
                    flex-direction: column;
                }
                .box {
                    width: 100px;
                    height: 100px;
                    background-color: pink;
                    transform: rotate(45deg);
                    transition: 2s;
                    margin: 20px;
                }
                .box:hover {
                    background-color: purple;
                }
            </style>
        </head>
        <body>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </body>
        </html>
        ```
        
    - 실행 영상 첨부 🍠
        
        [20240923-1156-52.8924403.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/f9e446af-599d-4ae7-a982-33e78e8f983a/20240923-1156-52.8924403.mp4)

- animation 🍠
    
    ### animation 🍠
    
    <aside>
    💡 아래 키워드에 대해 학습한 후, 실습을 진행하시고 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - animation-name
        
        애니메이션에 적용할 `@keyframes`의 이름을 지정합니다.
        
    - animation-duration
        
        애니메이션의 실행 시간을 설정합니다. (단위: 초 `s`, 밀리초 `ms`)
        
    - animation-delay
        
        애니메이션이 언제 시작할지 지연 시간을 설정합니다.
        
    - animation-direction
        
        애니메이션의 진행 방향을 설정합니다. (`normal`, `reverse`, `alternate` 등)
        
    - animation-iteration-count
        
        애니메이션이 몇 번 반복될지를 설정합니다. (`infinite`로 무한 반복 가능)
        
    - animation-play-state
        
        애니메이션이 재생 중인지, 일시 정지 상태인지를 설정합니다. (`running`, `paused`)
        
    - animation-timing-function
        
        애니메이션의 속도 곡선을 설정합니다. (`linear`, `ease`, `ease-in`, `ease-out` 등)
        
    - animation-fill-mode
        
        애니메이션이 끝난 후 상태를 설정합니다. (`none`, `forwards`, `backwards`, `both`)
        
    - @keyframes
        
        애니메이션의 각 단계를 정의합니다.
        
    - 축약형
    
    ### 실습  🍠
    
     **`animation 키워드`**를 학습한 후, 아래와 비슷한 영상을 만들어주세요!
    
    단, **`animation 축약형`**을 사용해주세요!
    
    - [x]  원은 어떻게 만들까요?
    - Hint
        
        **`border-radius` 를 활용해봅시다~!**
        
    - [x]  계속 튀기는 애니메이션은 어떻게 하면 쉽게 만들까요?
    - Hint
        
        `infinte`, `alternate` 속성을 활용해봅시다!
        
    
    [화면 기록 2024-07-18 오후 8.01.20.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/6c0aa987-9afa-4c7b-8096-51940175eeb4/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.01.20.mov)
    
    - 코드 첨부 🍠
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                @keyframes jump {
                    0% {
                        transform: translateY(0px) scale(1,1);
                    }
                    100% {
                        transform: translateY(200px) scale(1.1,0.8);
                    }
                }
                #circle{
                    width: 100px;
                    height: 100px;
                    background-color: purple;
                    border-radius: 50%;
                    animation-name: jump;
                    animation-duration: 1s;
                    animation-iteration-count: infinite; /* 무한반복 */
                    animation-direction: alternate;
                }
            </style>
        </head>
        <body>
            <div id="circle"></div>
        </body>
        </html>
        ```
        
    - 실행 영상 첨부 🍠
        
        [20240924-0528-29.8409800.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/a807e999-8701-40d6-88c4-ac7dd008bc2d/20240924-0528-29.8409800.mp4)