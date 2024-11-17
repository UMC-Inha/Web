import { useMovieDetailFetch } from "../../react-query/queries/movies";
import React from "react";

function MovieDetailFetcher({id,children}) {
    const { data, isLoading, error } = useMovieDetailFetch(id);

    if(isLoading) return <div>로딩중...</div>;
    if(error) throw error;


    return React.cloneElement(children, {detail:data});
}

export default MovieDetailFetcher;