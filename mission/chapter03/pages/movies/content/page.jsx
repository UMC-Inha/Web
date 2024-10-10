import axios from 'axios';
import Feed from '../../../components/feed/feed';
import { useEffect, useState } from 'react';

const APIurl = {
    "now-playing":"https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
    "popular":"https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    "top-rated":"https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
    "up-coming":"https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1"
}

export default function Content({path}) {
    const [movies, setMovies] = useState([]);

    const fetchNowPlaying = async () => {
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`
            }
        }

        const response = await axios.get(`${APIurl[path]}`,headers);
        setMovies(response.data.results);
    }

    useEffect(()=>{
        fetchNowPlaying();
    },[])

    return (
        <>
            {
                movies&&<Feed movies={movies}/>
            }
        </>
    )
}