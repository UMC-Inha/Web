const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

const apiConfig = (method) => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
};

export default apiConfig;
