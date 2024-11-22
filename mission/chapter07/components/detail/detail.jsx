import { MainContainer } from "./styled/styled"

export default function Detail({detail}){
    console.log(detail)
    return(
        <MainContainer> 
            {
                <div>
                    <h1>{detail.backdrop_path}</h1>
                    <p>{detail.original_title}</p>
                </div>
            }
        </MainContainer>
    )
}