import {
    PostImage,
    PostContainer,
    PostTitle,
    PostDate,
    PostDetailContainer
} from './styled/styled'

export default function MoviePost({movie}){
    const { poster_path,title,release_date} = movie;

    return(
        <PostContainer>
            <PostImage onMouseOver={(e)=>{
                e.target.style.filter='brightness(0.5)'
            }} onMouseOut={(e)=>{
                e.target.style.filter='brightness(1)'
            }} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title}/>

            <PostDetailContainer>

                <PostTitle>{title}</PostTitle>
                <PostDate>{release_date}</PostDate>
            </PostDetailContainer>
        </PostContainer>
    )
}
