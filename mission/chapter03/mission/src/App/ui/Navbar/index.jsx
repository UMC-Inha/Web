import STYLE from "./style";
import { handleNavigation } from "../../../Shared/model/handleNavigate";
import logoImg from "./assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <STYLE.Nav>
      <STYLE.Logo src={logoImg} onClick={() => {
            handleNavigation(navigate, "/");
          }}/>
      <STYLE.Container>
        <STYLE.SignIn
          onClick={() => {
            handleNavigation(navigate, "login");
          }}
        >
          로그인
        </STYLE.SignIn>
        <STYLE.SignUp
          onClick={() => {
            handleNavigation(navigate, "signup");
          }}
        >
          회원가입
        </STYLE.SignUp>
      </STYLE.Container>
    </STYLE.Nav>
  );
};

export default Navbar;
