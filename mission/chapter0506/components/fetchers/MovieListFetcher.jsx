import useMovieFetch from "../../hooks/useMovieFetch";
import React from "react";

function MovieListFetcher({url,children}) {
    const { data, loading, error } = useMovieFetch(url);

    if(error) throw error;

    return React.cloneElement(children, {movies:data,isLoading:loading});
}

export default MovieListFetcher;