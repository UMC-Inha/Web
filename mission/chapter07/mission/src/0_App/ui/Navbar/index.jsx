import STYLE from "./style";
import { handleNavigation } from "../../../3_Shared/model/handleNavigate";
import logoImg from "./assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../3_Shared/util/cookies";
import useUserInfo from "../../../3_Shared/api/useUserInfo";
import { deleteAllCookies, deleteCookie } from "../../../3_Shared/util/cookies";
const Navbar = () => {
  const navigate = useNavigate();
  const accessToken = getCookie("accessToken") || null;
  const [userInfo, userInfoLoading] = useUserInfo(accessToken);
  if (userInfoLoading) return <>still loading...</>;

  
  return (
    <STYLE.Nav>
      <STYLE.Logo
        src={logoImg}
        onClick={() => {
          handleNavigation(navigate, "/");
        }}
      />

      {accessToken !== null ? (
        <STYLE.Container>
          <STYLE.SignIn>{(userInfo.email)?.split("@")[0]}</STYLE.SignIn>
          <STYLE.SignUp
            onClick={() => {
              deleteCookie("accessToken")
              deleteCookie("refreshToken")
              handleNavigation(navigate, "/");
            }}
          >
            로그아웃
          </STYLE.SignUp>
        </STYLE.Container>
      ) : (
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
      )}
    </STYLE.Nav>
  );
};

export default Navbar;
