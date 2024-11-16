import { fetchRequest } from "../../../3_Shared/config/apiConfig";
import { setCookie } from "../../../3_Shared/util/cookies";
const BASE_URL = import.meta.env.VITE_UMC_BASE_URL;

const authLogin = (data) => {
  const { email, password } = data;
  const body = {
    email: email,
    password: password,
  };
  const login = async () => {
    const loginResult = await fetchRequest(
      "POST",
      `${BASE_URL}/auth/login`,
      body
    );
    console.log("login", loginResult)
    let expiration = new Date();
    expiration.setTime(expiration.getTime() + 3600 * 24 * 1000); // 1일 후 만료

    setCookie("accessToken", loginResult.accessToken, {
      path: "/",
      expires: expiration,
    });
    setCookie("refreshToken", loginResult.refreshToken, {
      path: "/",
      expires: expiration,
      //httpOnly: true
    });
    return loginResult;
  };
  return login();
};
export default authLogin;
