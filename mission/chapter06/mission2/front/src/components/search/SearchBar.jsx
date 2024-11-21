import * as S from './SearchBar.style.js';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <S.SearchContainer>
            <S.SearchInput
                placeholder="영화 제목을 입력해주세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </S.SearchContainer>
    );
};

export default SearchBar;