import { useMovieListPaginationFetch } from "../../react-query/queries/movies";
import { useMovieList } from "../../context/movieListContext.jsx";
import React from "react";

function MovieListFetcher({url, children}) {
    const { data, isLoading, error } = useMovieListPaginationFetch(url);
    const { setMovies, setIsLoading } = useMovieList();

    React.useEffect(() => {
        if (data) {
            const allMovies = data.pages.flat();
            setMovies(allMovies);
        }
        setIsLoading(isLoading);
    }, [data, isLoading]);

    if (error) throw error;

    return children;
}

export default MovieListFetcher;