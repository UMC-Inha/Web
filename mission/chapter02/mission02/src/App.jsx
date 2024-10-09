import { useState } from 'react'
import movies from './movieList/movies.js'
import MoviePoster from './component/moviePoster.jsx';
import './App.css'

function App() {

  const [movieList, setMovieList] = useState(movies.results);


  return (
    <>
      <div className="movie_poster_list">
        {movieList.map((movie) => (
            <MoviePoster poster_path={movie.poster_path}/>
        ))}
      </div>
    </>
  )
}

export default App
