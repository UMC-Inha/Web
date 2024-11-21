import * as S from './card.style';

const Card = ({ movie, onClick }) => {
  return (
    <S.CardWrapper onClick={onClick}>
      <S.CardImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <S.MovieTitle>{movie.title}</S.MovieTitle>
      <S.ReleaseDate>{movie.release_date}</S.ReleaseDate>
      <S.HoverOverlay />
    </S.CardWrapper>
  );
};

export default Card;
