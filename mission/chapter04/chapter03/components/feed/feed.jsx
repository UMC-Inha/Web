import { MainContainer } from "./styled/styled"
import MoviePost from "../post/post"

export default function Feed({movies}){
    return(
        <MainContainer> 
            {
                movies.map((movie,index)=>{
                    return(
                        <MoviePost key={index} movie={movie}/>
                    )
                }    
                )
            }
        </MainContainer>
    )
}