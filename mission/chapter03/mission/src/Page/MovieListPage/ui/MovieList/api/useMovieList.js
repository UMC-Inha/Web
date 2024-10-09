import React from "react";
import apiConfig from "../../../../../Shared/config/apiConfig";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const useMovieList = (category, page) => {
  const [movieList, setMovieList] = React.useState([]);

  React.useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `${BASE_URL}/movie/${category}?language=ko-KR&page=${page}`,
        apiConfig("GET"),
      );

      let result = [];
      const status = response.status;
      switch (status) {
        case 200:
          result = await response.json();
          break;
        default:
          alert("api error");
          result = null;
          break;
      }
      setMovieList(result);
    };

    fetchMovie();
  }, [category, page]);

  return [movieList.results];
};
export default useMovieList;
