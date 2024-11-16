import React from "react";
import {fetchRequest} from "../../../3_Shared/config/apiConfig";
const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const BASE_IMG_URL = "https://image.tmdb.org/t/p/";
const BASE_IMG_SIZE = "original";

const useMovieDetail = (id) => {
  const [loading, setLoading] = React.useState(true);
  const [movieDetail, setMovieDetail] = React.useState([]);
  React.useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      let movieDetailResult = await fetchRequest(
        // 영화 정보
        "GET",
        `${BASE_URL}/movie/${id}?language=ko-KR`,
        null,
        API_TOKEN
      );

      movieDetailResult.backdrop_path = `${BASE_IMG_URL}${BASE_IMG_SIZE}${movieDetailResult.backdrop_path}`;
      setMovieDetail(movieDetailResult);

      setLoading(false);
    };

    fetchMovie();
  }, [id]);
  return [movieDetail, loading];
};
export default useMovieDetail;
