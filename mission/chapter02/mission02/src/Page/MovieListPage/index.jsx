import useMovieList from "./api/useMovieList";
import "./style.css";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/";
const BASE_IMG_SIZE = "w500";

const MovieList = () => {
  const [movieList] = useMovieList();
  if (!movieList) return null;
  return (
    <div className="movieList">
      {movieList.map((elem, index) => {
        return (
          <div className="movie" key={index}>
            <img
              src={`${BASE_IMG_URL}${BASE_IMG_SIZE}${elem.poster_path}`}
              alt="movie poster"
              className="thumbnail"
            />
            <div className="thmubnailHoverEffect"></div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
