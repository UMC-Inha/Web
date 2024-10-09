import { MOVIES } from "../mocks/movies.js";

function MoviePost({poster,title}){
    return(
        <div
        onMouseOver={(e)=>{
            e.target.style.filter='brightness(0.5)'
        }} onMouseOut={(e)=>{
            e.target.style.filter='brightness(1)'
        }}
            style={{width:'200px',height:'300px',borderRadius:'1rem'
        }}>
            <img
             src={poster} alt={title} style={{
                objectFit:'cover',width:'100%',height:'100%',borderRadius:'1rem',objectPosition:"center",backgroundSize:'cover'
            }}/>
        </div>
    )
}

function Container({children}){
    return(
        <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            {children}
        </div>
    )
}

export default function Mission2(){
    const _data = MOVIES.results;

    return(
        <>
            <Container>
                {
                    _data.map((movie,index) => (
                        <MoviePost key={index} poster={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} title={movie.title} />
                    ))
                }          
            </Container>
        </>
    )
}