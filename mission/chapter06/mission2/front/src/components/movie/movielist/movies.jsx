import { useNavigate } from 'react-router-dom';
import Card from "../../../components/Card/Card.jsx";
import { useCustomFetch } from '../../../hooks/useCustomFetch.js';
import * as S from './movies.style.js';

const APIurl = {
    "now-playing": "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
    "popular": "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    "top-rated": "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
    "up-coming": "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1"
};

const MoviesPage = ({category}) => {
    const {data : movies, error, loading} = useCustomFetch(APIurl[category]);
    const navigate = useNavigate();

    if(loading) {
        return <p>로딩 중...</p>;
    }

    if(error) {
        return <p>{error}</p>
    }

    const handleCardClick = (movie) => {
        navigate(`/movies/${movie.id}`, { state: { movie } });
    };

    return (
        <S.CardList>
            {error ? (
                <p>{error}</p> // 에러 메시지 표시
            ) : (
                movies.results?.map((movie) => (
                    <Card key={movie.id} movie={movie} onClick={() => handleCardClick(movie)} />
                ))
            )}
        </S.CardList>
    );
};

export default MoviesPage;
