import Card from "../../components/Card/card.jsx";
import * as S from './movies.style.js'
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom"; // useParams를 사용하여 경로 파라미터 가져오기
import axios from "axios";

const APIurl = {
    "now-playing":"https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
    "popular":"https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    "top-rated":"https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
    "up-coming":"https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1"
}

const MoviesPage = () => {
    const { category } = useParams(); // 경로 파라미터에서 'category' 값 받아오기
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const response = await axios.get(APIurl[category], {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
                }
            })
            setMovies(response);
        }
        if (category) {
            getMovies();
        }
    }, [category]);

    return (
        <S.CardList>
            {movies.data?.results.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </S.CardList>
    )
};

export default MoviesPage;


