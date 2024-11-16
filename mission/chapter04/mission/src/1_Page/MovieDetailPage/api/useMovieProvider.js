import React from "react";
import fetchData from "../../../3_Shared/config/apiConfig";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const BASE_IMG_URL = "https://image.tmdb.org/t/p/";
const BASE_IMG_SIZE = "w185";

const useMovieProvider = (id) => {
  const [loading, setLoading] = React.useState(true);
  const [movieProvider, setMovieProvider] = React.useState([]);
  React.useEffect(() => {
    const fetchMovie = async () => {
      let movieProviderResult = await fetchData( // 영화 제작진
        "GET",
        `${BASE_URL}/movie/${id}/credits?language=ko-KR`
      );

      movieProviderResult.cast.forEach((element) => {
        element.profile_path = `${BASE_IMG_URL}${BASE_IMG_SIZE}${element.profile_path}`
      });
      movieProviderResult.crew.forEach((element) => {
        element.profile_path = `${BASE_IMG_URL}${BASE_IMG_SIZE}${element.profile_path}`
      });
      setMovieProvider(movieProviderResult);
      setLoading(false);
    };

    fetchMovie();
  }, [id]);
  return [movieProvider, loading];
};
export default useMovieProvider; 
