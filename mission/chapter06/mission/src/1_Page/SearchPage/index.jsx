import { handleNavigation } from "../../3_Shared/model/handleNavigate";
import { useNavigate } from "react-router-dom";
import MovieList from "../../2_Widget/MovieList";
import React from "react";
import { LongInput } from "../../3_Shared/ui/Input";
const SearchPage = ()=>{
  const navigate = useNavigate();
  const keyword = React.useRef("");
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        handleNavigation(navigate, `/search?keyword=${keyword.current.value}`)}}>
        <LongInput type="text" ref={keyword} placeholder="검색"/>
      </form>
      <MovieList />
    </div>
  )
}

export default SearchPage;