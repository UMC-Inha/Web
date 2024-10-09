import "../App.css"

const MoviePoster = (props)=>{
    const {poster_path} = props
    return (
        <div className='movie_item'>
          <img className='poster_img' src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
          <div className='poster_hover'/>
        </div>
      )
}

export default MoviePoster;