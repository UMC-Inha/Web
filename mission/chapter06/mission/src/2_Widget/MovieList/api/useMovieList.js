import React from "react";
import { fetchRequest } from "../../../3_Shared/config/apiConfig";
const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const BASE_IMG_URL = "https://image.tmdb.org/t/p/";
const BASE_IMG_SIZE = "w500";

const useMovieList = (category, page, isSearch) => {
  const [loading, setLoading] = React.useState(false);
  const [movieList, setMovieList] = React.useState([]);
  const [lastCategory, setLastCategory] = React.useState(null); // 이전 카테고리 추적
  const [lastIsSearch, setLastIsSearch] = React.useState(null); // 이전 검색 상태 추적

  React.useEffect(() => {
    if (category === "" || page > 500) {
      setLoading(false);
      return;
    }

    // 검색어 또는 카테고리가 변경되었을 때 데이터 초기화
    if (category !== lastCategory || isSearch !== lastIsSearch) {
      setMovieList([]);
      setLastCategory(category);
      setLastIsSearch(isSearch);
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        let url;
        if (isSearch) {
          url = `${BASE_URL}/search/movie?query=${encodeURIComponent(
            category
          )}&include_adult=false&language=ko-KR&page=${page}`;
        } else {
          url = `${BASE_URL}/movie/${category}?language=ko-KR&page=${page}`;
        }

        const result = await fetchRequest("GET", url, null, API_TOKEN);

        // 결과 데이터 가공
        const processedResults = result.results.map((movie) => ({
          ...movie,
          poster_path: `${BASE_IMG_URL}${BASE_IMG_SIZE}${movie.poster_path}`,
        }));

        setMovieList(
          (prevList) =>
            category !== lastCategory || isSearch !== lastIsSearch
              ? processedResults // 검색어나 카테고리가 변경되면 데이터 덮어쓰기
              : [...prevList, ...processedResults] // 페이지네이션일 경우 데이터 추가
        );
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchMovies();
  }, [category, page, isSearch, lastCategory, lastIsSearch]);

  return [movieList, loading];
};

export default useMovieList;
