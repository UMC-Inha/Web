const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

const apiConfig = (method) => {
  return {
    method: method,
    headers: {
      //"Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
};

const fetchData = async (method, url) => {
  try {
    const response = await fetch(url, apiConfig(method));

    let result;
    switch (response.status) {
      case 200:
        result = await response.json();
        break;
      default:
        alert("API error"); // 상태 코드가 200이 아닌 경우 경고
        result = null;
        break;
    }

    return result;
  } catch (error) {
    console.error("Network or fetch error:", error); // 네트워크 오류 등 처리
    alert("Network error occurred");
    return null;
  }
};

export default fetchData;
