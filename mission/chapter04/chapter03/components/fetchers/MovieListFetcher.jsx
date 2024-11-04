import useMovieFetch from "../../hooks/useMovieFetch";
import React from "react";

function MovieListFetcher({url,children}) {
    const { data, loading, error } = useMovieFetch(url);

    if(loading) return <div>로딩중...</div>;
    if(error) throw error;


    return React.cloneElement(children, {movies:data});
}

export default MovieListFetcher;