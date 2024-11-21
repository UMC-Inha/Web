
import { Link } from 'react-router-dom';
import { FaSearch, FaFilm } from 'react-icons/fa'; // react-icons에서 아이콘 불러오기
import * as S from './sidebar.style'; // 스타일 파일 분리

const Sidebar = () => {
    return (
        <S.SidebarContainer>
            <S.Menu>
                <S.MenuItem>
                    <FaSearch />
                    <Link to="/search">찾기</Link>
                </S.MenuItem>
                <S.MenuItem>
                    <FaFilm />
                    <Link to="/movies">영화</Link>
                </S.MenuItem>
            </S.Menu>
        </S.SidebarContainer>
    );
};

export default Sidebar;
