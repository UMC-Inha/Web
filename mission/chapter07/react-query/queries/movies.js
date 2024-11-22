import {useQuery ,useInfiniteQuery} from '@tanstack/react-query';
import { fetchMovieDetail, fetchMovieList } from '../../services/movies';

export const useMovieDetailFetch = (id) => {
    return(
        useQuery({
            queryKey: ['movie', id],
            queryFn: () => fetchMovieDetail(id)
        })
    )    
}

export const useMovieListPaginationFetch = (url) => {
    return(
        useQuery({
            queryKey: ['movieList', url],
            queryFn: () => fetchMovieList(url)
        })
    )
}

export const useMovieListFetch = (url) => {
    return(
        useInfiniteQuery({
            queryKey: ['movieList', url],
            queryFn: ({ pageParam = 1 }) =>fetchMovieList(url, pageParam),
            getNextPageParam: (lastPage, allPages) => {
                if ( lastPage.length < 20) return undefined;
                return allPages.length + 1;
            },
            initialPageParam: 1
        })  
    )
}