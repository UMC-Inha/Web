import Feed from '../../../components/feed/feed';
import MovieListFetcher from '../../../components/fetchers/MovieListFetcher';
import ApiErrorBoundary from '../../../components/error-boundaries/ApiErrorBoundary';

const APIurl = {
    "now-playing":"https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
    "popular":"https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    "top-rated":"https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
    "up-coming":"https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1"
}

export default function MovieList({path}) {

    return (
        <>
            <ApiErrorBoundary>
                <MovieListFetcher url={APIurl[path]} >
                    <Feed/>
                </MovieListFetcher>
            </ApiErrorBoundary>
        </>
    )
}