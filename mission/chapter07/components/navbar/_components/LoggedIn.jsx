import {
    RightContainer,
} from "../styled/styled";
import Button from "../../button/button";
import { useNavigate } from "react-router-dom";

export default function LoggedIn({ children }) {
    const navigate = useNavigate();
    return (
        <RightContainer>
            <Button onClick={()=>{
                navigate("/login")
            }} color="black">로그인</Button>
            <Button onClick={()=>{
                navigate("/signup")
            }} color="red">로그아웃</Button>
    </RightContainer>
    )
}