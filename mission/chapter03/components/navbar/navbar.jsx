import {
    NavbarContainer,
    Logo,
    NavbarHeader,
    RightContainer
} from "./styled/styled";
import Button from "../button/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <NavbarHeader>
            <NavbarContainer>
                <Logo>
                    <Link to={"/"}>
                        YONGCHA
                    </Link>
                </Logo>

                <RightContainer>
                    <Button onClick={()=>{
                        navigate("/login")
                    }} color="black">로그인</Button>
                    <Button onClick={()=>{
                        navigate("/signup")
                    }} color="red">회원가입</Button>
                </RightContainer>
            </NavbarContainer>
        </NavbarHeader>
    )
}