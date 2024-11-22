import {
    NavbarContainer,
    Logo,
    NavbarHeader,
    RightContainer
} from "./styled/styled";
import Button from "../button/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoggedIn from "./_components/LoggedIn"
import NotLoggedIn from "./_components/NotLoggedIn"

export default function Navbar() {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    return (
        <NavbarHeader>
            <NavbarContainer>
                <Logo>
                    <Link to={"/"}>
                        YONGCHA
                    </Link>
                </Logo>

                {
                    accessToken ? (
                        <LoggedIn />
                    ) : (
                        <NotLoggedIn/>
                    )
                }
            </NavbarContainer>
        </NavbarHeader>
    )
}