import { MainContainer,PostSkeleton } from "./styled/styled"
import MoviePost from "../post/post"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react";
import { useMovieList } from "../../context/movieListContext";


export default function Feed({isInfinite = false}){
    const [ref, inView] = useInView();
    const { movies, isLoading, fetchNextPage } = useMovieList();

    useEffect(()=>{
        if(inView && isInfinite){
            fetchNextPage();
        }
    },[inView, isInfinite])

    if(!movies) return null;

    return(
        <MainContainer> 
            
            {/* 로딩중일때 10개의 스켈레톤을 렌더링 */}
            {
                isLoading && Array.from({length:10}).map((_,index)=>{
                    return(
                        <PostSkeleton key={index}/>
                    )
                })
            }

            {/* 로딩이 끝나면 영화 목록을 렌더링 */}
            {
                !isLoading && movies.map((movie,index)=>{

                    if(movies.length -1 === index){
                        return (
                            <div ref={ref} key={index} >
                                <MoviePost movie={movie}/>
                            </div>
                        )
                    }

                    return(
                        <MoviePost key={index} movie={movie}/>
                    )
                }    
                )
            }
        </MainContainer>
    )
}