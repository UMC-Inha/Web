import styled from "styled-components";
import { Link } from "react-router-dom";
const SideBar = () => {
    return (
        <SideBarContainer>
            <Link to={'/search'}>찾기</Link>
            <Link to={'/movies'}>영화</Link>
        </SideBarContainer>
    );
};

export default SideBar;

const SideBarContainer = styled.div`
    dispaly: flex;
    width; 200px;
    height: 100vh;
    background-color: rgb(42, 37, 37);
   
`
