import { fetchRequest } from "../config/apiConfig";

const BASE_URL = import.meta.env.VITE_UMC_BASE_URL;

const refreshAccessToken = async (refreshToken) => {
  try {
    const fetchAccessTokenResult = await fetchRequest(
      "POST",
      `${BASE_URL}/auth/token/access`,
      null,
      refreshToken
    );
    return fetchAccessTokenResult;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    return null;
  }
};

export default refreshAccessToken;
