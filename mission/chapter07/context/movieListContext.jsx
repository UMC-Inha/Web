import { createContext, useContext, useState } from "react";

export const MovieListContext = createContext();


export const MovieListProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchNextPage, setFetchNextPage] = useState(null);

    return(
        <MovieListContext.Provider value={{movies, setMovies, isLoading, setIsLoading, fetchNextPage, setFetchNextPage}}>
            {children}
        </MovieListContext.Provider>
    )
}

export const useMovieList = () => {
    return useContext(MovieListContext);
}

