import { useState } from 'react'
import movies from './movieList/movies.js'
import './App.css'

function App() {

  const [movieList, setMovieList] = useState(movies.results);


  return (
    <>
      <div className="movie_poster_list">
        {movieList.map((movie) => {
          return (
            <div className='movie_item'>
              <img className='poster_img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
              <div className='poster_hover'/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
