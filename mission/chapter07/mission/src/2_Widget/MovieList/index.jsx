import useMovieList from "./api/useMovieList";
import STYLE from "./style";
import React from "react";
import Movie from "./ui/Movie";
import { SkeletonContainer, CardSkeleton } from "../../3_Shared/ui/skeletonUi";
import { useParams, useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const MovieList = () => {
  const [page, setPage] = React.useState(1);
  const { category } = useParams();

  // 쿼리 문자열 가져오기
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const isSearch = !category && !!keyword;
  const [movieList, loading] = useMovieList(
    isSearch ? keyword : category,
    page,
    isSearch
  );

  const { ref, inView } = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    // if (inView && !loading) {
    //   setPage((prev) => prev + 1);
    // }
  }, [inView, loading]);

  return (
    <STYLE.Main>
      {loading && (
          <SkeletonContainer>
            {new Array(10).fill(null).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </SkeletonContainer>
        )}
        {/* 무한스크롤 일 때는 스켈레톤 위치 수정해야됨 */}
      <STYLE.MovieList>
        {movieList.map((elem, index) => {
          return (
            <Movie
              observe={index === movieList.length - 1 ? ref : null}
              key={index}
              data={elem}
            />
          );
        })}
      </STYLE.MovieList>
      
      <STYLE.BtnContainer>
        <STYLE.PageBtn onClick={()=>{setPage((prev)=> prev - 1)}} disabled={page <= 1} value={"이전 페이지"} type="button" />
        <STYLE.PageBtn onClick={()=>{setPage((prev)=> prev + 1)}} disabled={page >= 500} value={"다음 페이지"} type="button" />
      </STYLE.BtnContainer>
      {!loading && movieList.length <= 0 && !!keyword && (
        <p>no result about {keyword}</p>
      )}
    </STYLE.Main>
  );
};
MovieList.displayName = "MovieList";

export default MovieList;
