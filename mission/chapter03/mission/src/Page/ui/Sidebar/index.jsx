import STYLE from "./style";
import { handleNavigation } from "../../../Shared/model/handleNavigate";
import { useNavigate } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { RiMovie2Line } from "react-icons/ri";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <STYLE.Aside>
      <STYLE.AsideTab
        onClick={() => {
          handleNavigation(navigate, "search");
        }}
      >
        <HiOutlineMagnifyingGlass /> 찾기
      </STYLE.AsideTab>
      <STYLE.AsideTab
        onClick={() => {
          handleNavigation(navigate, "category");
        }}
      >
        <RiMovie2Line /> 영화
      </STYLE.AsideTab>
    </STYLE.Aside>
  );
};

export default Sidebar;
