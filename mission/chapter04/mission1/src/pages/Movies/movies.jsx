import Card from "../../components/Card/card.jsx";
import * as S from './movies.style.js';
import { useParams } from "react-router-dom";
import { useFetchMovies } from "../../hooks/useFetchMovies.js"; // 커스텀 훅 임포트

const MoviesPage = () => {
    const { category } = useParams();
    const { movies, error, loading } = useFetchMovies(category); // 커스텀 훅 사용하여 데이터 및 에러 상태 받아오기

    if (loading) {
        return <p>로딩 중...</p>; // 로딩 중일 때 표시
    }

    if(error) {
        return <p>{error}</p>; // 에러 발생 시 표시
    }

    return (
        <S.CardList>
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </S.CardList>
    );
};

export default MoviesPage;
