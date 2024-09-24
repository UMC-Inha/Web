-div 태그로만 페이지를 구조화 하는 것이 좋은가?
안좋음-> div로만 구성하면 해당 태그가 어떤 의미를 가지는지 알기 어려워 웹사이트 구조 파악 어려움

-기타 태그 추가 정리해보기 
<details> : 사용자가 보거나 숨길 수 있는 추가 세부 정보를 정의하는 태그
<figure> : 일러스트레이션, 다이어그램, 사진, 코드 목록 같은 자체 포함된 콘텐츠를 지정

-Sementic Tag를 잘 활용하였을 때 장점은? 🍠
웹사이트 구조 파악 용이

-그러면, inline-block은 어떠한 방식으로 동작할까요? 🍠
기본적으론 inline element와 같이 한 줄에 다른 element들과 배치 가능
하지만, width와 height 및 다른 속성 값들을 지정가능함

-block, inline, inline-block 직접 html과 css를 활용해서 무엇이 다른지, VS Code Live Server Extension을 활용하여, 실습 한 이미지를 첨부하여 설명해주세요. 🍠

block, inline, inline-block 모두 height, width를 50px로 설정했음
이때 block은 height와 width가 변경되면서 한줄을 혼자 사용하고 있고
inline의 경우 다른 element와 줄을 함께 쓰지만 height와 width값은 변하지 않음
inline-block의 경우 다른 element와 줄을 함께 쓰면서 height와 width값도 변함