import { useMovieListFetch } from "../../react-query/queries/movies";
import { useMovieList } from "../../context/movieListContext.jsx";
import React from "react";

function MovieListFetcher({url, children}) {
    const { data, isLoading, error, fetchNextPage } = useMovieListFetch(url);
    const { setMovies, setIsLoading, setFetchNextPage } = useMovieList();

    React.useEffect(() => {
        if (data) {
            const allMovies = data.pages.flat();
            setMovies(allMovies);
        }
        setIsLoading(isLoading);
        setFetchNextPage(() => fetchNextPage);
    }, [data, isLoading, fetchNextPage]);

    if (error) throw error;

    return children;
}

export default MovieListFetcher;