import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <NavContainer>
            <Link to={'/'}>YONGCHA</Link>
            <div>
            <Link to={'/login'}><button>로그인</button></Link>
            <Link to={'/signup'}><button>회원가입</button></Link>
            </div>
        </NavContainer>
    );
};

export default Navbar;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: rgb(42, 37, 37);
`