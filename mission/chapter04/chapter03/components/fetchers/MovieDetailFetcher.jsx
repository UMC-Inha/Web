import useMovieDetailFetch from "../../hooks/useMovieDetailFetch";
import React from "react";

function MovieDetailFetcher({id,children}) {
    const { data, loading, error } = useMovieDetailFetch(id);

    if(loading) return <div>로딩중...</div>;
    if(error) throw error;


    return React.cloneElement(children, {detail:data});
}

export default MovieDetailFetcher;