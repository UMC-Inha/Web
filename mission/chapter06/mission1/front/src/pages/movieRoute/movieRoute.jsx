import { useParams } from "react-router-dom";
import MoviesPage from "../Movies/movies";
import MovieDetailPage from "../Movies/movieDetailPage";


const MovieRoute = () => {
    const { categoryOrmovieId } = useParams();
    const isNumber = /^\d+$/.test(categoryOrmovieId);
    return isNumber ? <MovieDetailPage movieId ={categoryOrmovieId} />
                    : <MoviesPage category ={categoryOrmovieId}/>
}

export default MovieRoute;