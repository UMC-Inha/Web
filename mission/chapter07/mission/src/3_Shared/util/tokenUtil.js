export const isTokenValid = (token) => {
  if (!token) return false;
  const decoded = JSON.parse(atob(token.split('.')[1])); // Base64 디코딩
  const now = Math.floor(Date.now() / 1000); // 현재 시간 (초 단위)
  return decoded.exp > now; // 만료 시간(exp)과 비교
};


