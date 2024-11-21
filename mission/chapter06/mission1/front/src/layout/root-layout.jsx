import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/sidebar';
import * as S from './root-layout.style';  // 스타일 파일 가져오기

const RootLayout = () => {
    return (
        <>
            <S.StyledNavbar />  {/* Navbar 스타일 컴포넌트 */}
            <S.LayoutContainer>
                <Sidebar />
                <S.Content>
                    <Outlet />  {/* 자식 경로 컴포넌트를 렌더링 */}
                </S.Content>
            </S.LayoutContainer>
        </>
    );
};

export default RootLayout;
