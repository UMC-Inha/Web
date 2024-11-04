import useMovieList from "./api/useMovieList";
import STYLE from "./style";
import React from "react";
import Movie from "./ui/Movie";
import { useParams } from "react-router-dom";
const MovieList = React.memo(() => {
  const { category } = useParams();
  const [page, setPage] = React.useState(1);
  const [movieList, loading] = useMovieList(category, page);

  const observer = React.useRef();
  // const lastMovieElementRef = React.useCallback(
  //   (node) => {
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting) {
  //         setPage((prevPage) => prevPage + 1); // 페이지 증가
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading]
  // );
  const lastMovieElementRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1); // 페이지 증가
      }
    });
    if (node) observer.current.observe(node);
  }

  if (loading) return <div>still loading...</div>;
  return (
    <STYLE.MovieList>
      {movieList.map((elem, index) => {
        // 마지막 아이템에 ref 추가하여 관찰
        console.log(index + "렌더링");
        return (
          <Movie
            lastMovieElementRef={index === movieList.length - 1 ? lastMovieElementRef : null}
            key={index}
            data={elem}
          />
        );
      })}
      {loading && <div>Loading more movies...</div>}
    </STYLE.MovieList>
  );
});
MovieList.displayName= "MovieList"

export default MovieList;
