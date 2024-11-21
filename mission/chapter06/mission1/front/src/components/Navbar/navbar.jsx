import { useEffect, useState } from 'react';
import * as S from './navbar.style';

const Navbar = () => {
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        const fetchNickname = () => {
            const storedNickname = localStorage.getItem('nickname');
            if(storedNickname){
                setNickname(storedNickname);
            } else {
                setNickname('');
            }
        };

        fetchNickname();

        window.addEventListener('storage', fetchNickname);

        return () => {
            window.removeEventListener('storage', fetchNickname);
        };
        
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('nickname');
        setNickname('');
    }

    return (
        <S.NavbarContainer>
            <S.Logo to="/">YONGCHA</S.Logo>
            <S.AuthButtons>
                {nickname ? (
                    <>
                        <S.WelcomeMessage>{nickname}님 반갑습니다.</S.WelcomeMessage>
                        <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
                    </>
                ): (
                    <>
                        <S.LoginButton to="/login">로그인</S.LoginButton>
                        <S.SignupButton to="/signup">회원가입</S.SignupButton>
                    </>
                )}
                
            </S.AuthButtons>
        </S.NavbarContainer>
    );
};

export default Navbar;
