Styled-Component 문법
    1.사용 방법
        styled.태그명 다음 백틱(``)를 활용해서 스타일을 지정
        ex
           import styled from "styled-components";

            const CustomButton = () => {
                return (
                    <FirstStyledSweetPotato>
                        커스텀 고구마 버튼
                    </FirstStyledSweetPotato>
                );
            };

            export default CustomButton;

            const FirstStyledSweetPotato = styled.button`
                background-color: purple;
                border: none;
                padding: 0;
                cursor: pointer;
            `
        만든 컴포넌트 명을 import 해서 일반 태그처럼 사용
    
    2. CSS 의사 클래스(가상 클래스) 선택자 적용 방법
        자신을 선택하는 & 문자를 사용하여, 아래와 같이 정의
        ex
            const StyledHoverButton = styled.button`
                &:hover {
                    text-decoration: underline;
                }
            `
    3. props에 전달된 속성에 따른, 스타일링 분리
         props를 활용해서, 하나의 컴포넌트에서 props로 속성값을 받아 더 dynamic한 컴포넌트 생성 가능
        ex
            import styled from "styled-components";

            const CustomButton = () => {
                return (
                    <>
                        <FirstStyledSweetPotato color={'purple'}>
                            고구마
                        </FirstStyledSweetPotato>
                        <FirstStyledSweetPotato>
                            고구마
                        </FirstStyledSweetPotato>
                    </>
                );
            };

            export default CustomButton;

            const FirstStyledSweetPotato = styled.button`
                background-color: ${props => props.color || 'purple'};
                border: none;
                border-radius: 10px;
                padding: 20px;
                cursor: pointer;
                color: white;
            `
        연산자 ||을 통해서 props에 value가 전달되지 않았을 경우 기본값을 설정해줄 수 있음



React Router
    1.React Router란?
        -Routing 이란?
        
             유저가 주소창에 url 입력시 요청된 url에 해당하는 데이터를 보내주는 것 을 의미한다.
            새로운 URL을 요청하면 그 URL에 맞는 데이터를 받아오는 것을 Routing이라고 한다
            우리가 새로운 URL 경로를 입력하면, 그 URL에 해당하는 새로운 페이지를 네트워크 서버상에 요청하고,
             서버에서 새로운 html을 받아와서, 페이지 전체가 업데이트 되는 것을 Routing이라고 한다.
        
        - Client Side Rendering (CSR)
        
            새로운 링크를 클릭할 떄 Page URL이 업데이트는 되나, 로딩 스피너는 돌지 않고,
            페이지가 새롭게 refresh 되는게 아니고, Navbar나 Sidebar는 유지되고, main body 부분의 데이터만 바꿔지는 현상.



