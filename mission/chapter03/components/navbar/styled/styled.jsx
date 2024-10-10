import { styled } from 'styled-components';

const NavbarContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background-color: #282c34;
    color: white;
    font-size: 24px;
`

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: red;
`

const NavbarHeader = styled.header`
    position:sticky;
    height: 60px;
    background-color: #282c34;
    color: white;
    font-size: 24px;
    width:100%;
`

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export {
    NavbarContainer,
    Logo,
    NavbarHeader,
    RightContainer
}