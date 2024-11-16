const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

const handleStatus = async (response) => {
  switch (response.status) {
    case 200:
    case 201:
      return await response.json();
    default:
      alert("API error"); // 상태 코드가 200이 아닌 경우 경고
      return null;
  }
};

const apiConfig = (method, bodyData = null) => {
  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: bodyData ? JSON.stringify(bodyData) : null,
  };
  return config;
};

const TMDB_apiConfig = (method) => {
  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
  return config;
};

export const fetchRequest = async (method, url, bodyData = null) => {
  const response = await fetch(url, apiConfig(method, bodyData));

  let result = handleStatus(response);
  return result;
};

export const TMDB_fetchRequest = async (method, url) => {
  const response = await fetch(url, TMDB_apiConfig(method));

  let result = handleStatus(response);
  return result;
};
