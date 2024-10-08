import STYLE from "./style";
import { handleNavigation } from "../../../Shared/model/handleNavigate";
import { useNavigate } from "react-router-dom";
import asideTabIcon from "./assets/shorts.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <STYLE.Aside>
      <STYLE.AsideTab
        onClick={() => {
          handleNavigation(navigate, "search");
        }}
      >
        <STYLE.AsideTabIcon src={asideTabIcon} />
        찾기
      </STYLE.AsideTab>
      <STYLE.AsideTab
        onClick={() => {
          handleNavigation(navigate, "category");
        }}
      >
        <STYLE.AsideTabIcon src={asideTabIcon} />
        영화
      </STYLE.AsideTab>
    </STYLE.Aside>
  );
};

export default Sidebar;
