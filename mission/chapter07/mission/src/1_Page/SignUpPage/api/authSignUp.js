import {fetchRequest} from "../../../3_Shared/config/apiConfig";
const BASE_URL = import.meta.env.VITE_UMC_BASE_URL;

const authSignUp = (data) => {
  const { email, password, passwordCheck } = data;
  const body = {
    "email": email,
    "password": password,
    "passwordCheck": passwordCheck,
  };
  const signUp = async () => {
    const signUpResultResult = await fetchRequest(
      "POST",
      `${BASE_URL}/auth/register`,
      body
    );

    return signUpResultResult;
  };
  return signUp();
};
export default authSignUp;
