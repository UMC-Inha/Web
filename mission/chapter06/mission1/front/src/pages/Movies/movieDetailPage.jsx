import { useCustomFetch } from '../../hooks/useCustomFetch.js';
import * as S from './movieDetailPage.style.js';

const MovieDetailPage = ({movieId}) => {

    const { data : movie, error, loading } = useCustomFetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR&append_to_response=credits`);

    if (loading) {
        return <p>로딩 중...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!movie) {
        return <p>영화 데이터를 불러올 수 없습니다.</p>; 
    }

    return (
        <S.Container>
            <S.Header $backdropPath={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}>
                <S.Title>{movie.title}</S.Title>
                <S.Rating>평균 {movie.vote_average}</S.Rating>
                <S.Runtime>{movie.runtime}분</S.Runtime>
                <S.Tagline>{movie.tagline}</S.Tagline>
                <S.Overview>{movie.overview}</S.Overview>
            </S.Header>
            <S.CastSection>
                <S.CastTitle>감독/출연</S.CastTitle>
                <S.CastList>
                    {movie.credits?.cast.map((actor) => (
                        <S.CastItem key={actor.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                            <p>{actor.name}</p>
                            <p>({actor.character})</p>
                        </S.CastItem>
                    ))}
                </S.CastList>
            </S.CastSection>
        </S.Container>
    );
};

export default MovieDetailPage;
