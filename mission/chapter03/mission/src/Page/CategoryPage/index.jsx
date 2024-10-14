import { handleNavigation } from "../../Shared/model/handleNavigate";
import { useNavigate } from "react-router-dom";
import backgroundImg from "./assets/categoryCardImg";
import STYLE from "./style";
const CategoryPage = ()=>{
  const navigate = useNavigate();
  return (
    <STYLE.CategoryCardContainer>
      <STYLE.CategoryCard backgroundImg={backgroundImg.background_1} onClick={()=>{handleNavigation(navigate, "/movies/now_playing")}}><STYLE.CardText>현재 상영중인</STYLE.CardText></STYLE.CategoryCard>
      <STYLE.CategoryCard backgroundImg={backgroundImg.background_2} onClick={()=>{handleNavigation(navigate, "/movies/popular")}}><STYLE.CardText>인기 있는</STYLE.CardText></STYLE.CategoryCard>
      <STYLE.CategoryCard backgroundImg={backgroundImg.background_3} onClick={()=>{handleNavigation(navigate, "/movies/top_rated")}}><STYLE.CardText>높은 평가를 받은</STYLE.CardText></STYLE.CategoryCard>
      <STYLE.CategoryCard backgroundImg={backgroundImg.background_4} onClick={()=>{handleNavigation(navigate, "/movies/upcoming")}}><STYLE.CardText>개봉 예정중인</STYLE.CardText></STYLE.CategoryCard>
    </STYLE.CategoryCardContainer>
  )
}

export default CategoryPage;