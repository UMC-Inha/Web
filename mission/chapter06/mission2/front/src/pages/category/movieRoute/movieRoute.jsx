import { useParams } from "react-router-dom";
import MoviesPage from "../../../components/movie/movielist/movies";
import MovieDetailPage from "../../../components/movie/detail/movieDetailPage";


const MovieRoute = () => {
    const { categoryOrmovieId } = useParams();
    const isNumber = /^\d+$/.test(categoryOrmovieId);
    return isNumber ? <MovieDetailPage movieId ={categoryOrmovieId} />
                    : <MoviesPage category ={categoryOrmovieId}/>
}

export default MovieRoute;