import { MainContainer,PostSkeleton } from "./styled/styled"
import MoviePost from "../post/post"

export default function Feed({movies,isLoading}){
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
                    return(
                        <MoviePost key={index} movie={movie}/>
                    )
                }    
                )
            }
        </MainContainer>
    )
}