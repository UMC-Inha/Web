import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "./api/useMovieDetail";
import useMovieProvider from "./api/useMovieProvider";
import STYLE from "./style";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieInfo, movieInfoLoading] = useMovieDetail(id);
  const [movieProvider, movieProviderLoading] = useMovieProvider(id);
  if (movieInfoLoading || movieProviderLoading)
    return <div>still loading...</div>;
  return (
    <STYLE.MovieDetail>
      <STYLE.MovieBanner backgroundImg={movieInfo.backdrop_path}>
        {/* movieInfo.poster_path */}
        <h3>{movieInfo.title}</h3>
        <p>{movieInfo.vote_average}점</p>
        <p>{movieInfo.runtime}분</p>
      </STYLE.MovieBanner>
      <h3>출연 / 감독</h3>
      {/* CAST */}
      <STYLE.MovieProviderContainer>
        {movieProvider.cast.map((elem, index) => {
          return (
            <STYLE.MovieProvider key={index}>
              <STYLE.MovieProviderProfile profileImg={elem.profile_path} />
              {elem.name}
            </STYLE.MovieProvider>
          );
        })}
      </STYLE.MovieProviderContainer>
      {/* CREW */}
      <STYLE.MovieProviderContainer>
        {movieProvider.crew.map((elem, index) => {
          return (
            <STYLE.MovieProvider key={index}>
              <STYLE.MovieProviderProfile profileImg={elem.profile_path} />
              {elem.name}
            </STYLE.MovieProvider>
          );
        })}
      </STYLE.MovieProviderContainer>
    </STYLE.MovieDetail>
  );
};

export default MovieDetailPage;
