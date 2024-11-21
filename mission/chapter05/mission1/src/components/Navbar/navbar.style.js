import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between; /* 로고와 버튼을 양 끝으로 배치 */
    align-items: center;
    padding: 10px 20px;
    background-color: #111;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 40px);
    z-index: 1000;
`;

export const Logo = styled(Link)`
    font-size: 24px;
    font-weight: bold;
    color: #f04e4e;
    text-decoration: none;
    &:hover {
        color: #fff;
    }
`;

export const AuthButtons = styled.div`
    display: flex;
    gap: 15px;
`;

export const LoginButton = styled(Link)`
    padding: 8px 16px;
    border: none;
    background-color: transparent;
    color: #ccc;
    border-radius: 4px;
    text-decoration: none;
    &:hover {
        color: #fff;
    }
`;

export const SignupButton = styled(Link)`
    padding: 8px 16px;
    border: none;
    background-color: #f04e4e;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    &:hover {
        background-color: #d43a3a;
    }
`;
