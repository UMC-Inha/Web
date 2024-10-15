import { useState, useEffect } from 'react'
import MoviePoster from '../components/moviePoster/moviePoster.jsx';
import './moviesPages.css'
import axios from "axios";
import { useParams } from 'react-router-dom';

const APIurl={
  "now-playing" : 'https://api.themoviedb.org/3/movie/now_playing?language=kr-KR&page=1',
  "popular" : 'https://api.themoviedb.org/3/movie/popular?language=kr-KR&page=1',
  "top-rated" : 'https://api.themoviedb.org/3/movie/top_rated?language=kr-KR&page=1', 
  "up-coming" :'https://api.themoviedb.org/3/movie/upcoming?language=kr-KR&page=1'
}

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const {category} = useParams();
    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(APIurl[category], {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, [category]);


    return (
      <>
        <div className="movie_poster_list">
          {movies.data?.results.map((movie) => (
              <MoviePoster poster_path={movie.poster_path} 
                          title = {movie.title} 
                          release_date = {movie.release_date}/>
          ))}
        </div>
      </>
    )
}

export default MoviesPage;