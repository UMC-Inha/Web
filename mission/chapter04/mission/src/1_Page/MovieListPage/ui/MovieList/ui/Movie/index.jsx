import STYLE from "./style";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../../../../../../3_Shared/model/handleNavigate";
const Movie = (props) => {
  const { lastMovieElementRef, data} = props;
  const { poster_path, title, release_date, id } = data;
  const navigate = useNavigate();
  return (
    <STYLE.Movie ref={lastMovieElementRef} onClick={()=>{handleNavigation(navigate, `/movie-detail/${id}`);}}>
      <STYLE.Thumbnail src={`${poster_path}`} alt="movie poster" />
      <STYLE.ThumbnailHoverEffectDiv />
      <STYLE.MovieInfo>
        <p>{title}</p>
        <p>{release_date}</p>
      </STYLE.MovieInfo>
    </STYLE.Movie>
  );
};

export default Movie;
