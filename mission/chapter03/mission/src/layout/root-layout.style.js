import styled from 'styled-components';
import Navbar from '../components/Navbar/navbar'; // Navbar가 default export로 제대로 불러와졌는지 확인

export const LayoutContainer = styled.div`
    display: flex;
    height: calc(100vh - 60px);
    margin-top: 60px; /* Navbar 고정을 위해 여유 공간 추가 */
`;

export const StyledNavbar = styled(Navbar)`  /* StyledNavbar로 이름 변경 */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;  /* 최상단에 고정되도록 z-index 설정 */
    background-color: #111;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;



export const Content = styled.div`
    flex: 1;
    margin-left: 290px; /* 사이드바 너비만큼의 여백 추가 */
    padding: 20px;
    background-color: #000;
    color: #fff;
    overflow-y: auto;
    z-index: 500; /* Sidebar 및 Navbar 위로 출력되도록 설정 */
    /* 스크롤바는 숨기되 스크롤은 유지 */
    overflow: auto;

    /* Webkit 기반 브라우저(크롬, 사파리)에서 스크롤바 숨기기 */
    ::-webkit-scrollbar {
    display: none; /* 스크롤바 숨김 */
    } 

    /* Firefox에서 스크롤바 숨기기 */
    scrollbar-width: none; /* 스크롤바 숨김 */
`;