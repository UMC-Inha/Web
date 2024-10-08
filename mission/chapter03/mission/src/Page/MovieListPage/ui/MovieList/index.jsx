import useMovieList from "./api/useMovieList";
import STYLE from "./style";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/";
const BASE_IMG_SIZE = "w500";
const MovieList = () => {
  const [movieList] = useMovieList();
  if (!movieList) return null;
  return (
    <STYLE.MovieList>
      {movieList.map((elem, index) => {
        return (
          <STYLE.Movie className="movie" key={index}>
            <STYLE.Thumbnail
              src={`${BASE_IMG_URL}${BASE_IMG_SIZE}${elem.poster_path}`}
              alt="movie poster"
            />
            <STYLE.ThumbnailHoverEffectDiv />
          </STYLE.Movie>
        );
      })}
    </STYLE.MovieList>
  );
};

export default MovieList;
