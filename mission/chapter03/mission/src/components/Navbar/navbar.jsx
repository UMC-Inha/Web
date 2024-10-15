import * as S from './navbar.style';

const Navbar = () => {
    return (
        <S.NavbarContainer>
            <S.Logo to="/">YONGCHA</S.Logo>
            <S.AuthButtons>
                <S.LoginButton to="/login">로그인</S.LoginButton>
                <S.SignupButton to="/signup">회원가입</S.SignupButton>
            </S.AuthButtons>
        </S.NavbarContainer>
    );
};

export default Navbar;
