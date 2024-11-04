//커스텀 훅을 사용한 리팩토링
import { useState, useEffect } from "react";
import axios from "axios";

const APIurl = {
    "now-playing": "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
    "popular": "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    "top-rated": "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
    "up-coming": "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1"
};

// 매개변수로 category를 받아, 
// 이 값을 기반으로 영화 데이터를 가져옴
export const useFetchMovies = (category) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    // category가 변경될 때마다 실행
    useEffect(() => { 
        const getMovies = async () => {
            setLoading(true); // 로딩 시작
            // try, catch문을 활용한 에러 처리
            try {
                const response = await axios.get(APIurl[category], {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
                    }
                });
                setMovies(response.data.results);
            } catch (err) {
                setError("Failed to fetch movies. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false); // 요청 완료 후 로딩 종료
            }
        };
        
        // category 값이 존재할 때만 getMovies 함수 호출
        if (category) {
            getMovies();
        }
    }, [category]);

    return { movies, error, loading };
};
