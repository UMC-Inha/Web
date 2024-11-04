import React from "react";
import apiConfig from "../../../../../Shared/config/apiConfig";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const BASE_IMG_URL = "https://image.tmdb.org/t/p/";
const BASE_IMG_SIZE = "w500";

const useMovieList = (category, page) => {
  const [movieList, setMovieList] = React.useState([]);

  React.useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `${BASE_URL}/account/${1}`,
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

      result.forEach(e => {
        e.poster_path = `${BASE_IMG_URL}${BASE_IMG_SIZE}${e.poster_path}`;
      });
    
      setMovieList(result);
    };

    fetchMovie();
  }, [category, page]);

  return [movieList.results];
};
export default useMovieList;
