import { useParams } from "react-router-dom";
import MovieList from "./ui/MovieList";

const MovieListPage = () => {
  const {category} = useParams();
  return (
    <MovieList category={category}/>
  );
};

export default MovieListPage;
