import Feed from '../../../components/feed/feed';
import MovieListFetcher from '../../../components/fetchers/MovieListFetcher';
import ApiErrorBoundary from '../../../components/error-boundaries/ApiErrorBoundary';
import { MovieListProvider } from '../../../context/movieListContext.jsx';

const APIurl = {
    "now-playing":"https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
    "popular":"https://api.themoviedb.org/3/movie/popular?language=ko-KR",
    "top-rated":"https://api.themoviedb.org/3/movie/top_rated?language=ko-KR",
    "up-coming":"https://api.themoviedb.org/3/movie/upcoming?language=ko-KR"
}

export default function MovieList({path}) {

    return (
        <>
            <ApiErrorBoundary>
                <MovieListProvider>
                    <MovieListFetcher url={APIurl[path]}>
                        <Feed isInfinite={true}/>
                    </MovieListFetcher>
                </MovieListProvider>
            </ApiErrorBoundary>
        </>
    )
}