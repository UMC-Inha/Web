import { useState, useEffect } from 'react'
import MoviePoster from '../components/moviePoster.jsx';
import './moviesPages.css'
import axios from "axios";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Yzk1MjQ3ZGU3NDUxMzY0MjM0MmE2MTc4ODQzOWYzNiIsIm5iZiI6MTcyODQ3OTkwOS44MDczNjEsInN1YiI6IjY3MDY3YmFkNTk3YzEyNmYwN2RkYzRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.56L6fv17OgkRqftv2BLlKCJiw3-4w9Ym_g_sFhPyP-E`
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);


    return (
      <>
        <div className="movie_poster_list">
          {movies.data?.results.map((movie) => (
              <MoviePoster poster_path={movie.poster_path}/>
          ))}
          {console.log(movies)}
        </div>
      </>
    )
}

export default MoviesPage;