import { useState } from 'react';
import * as S from './SearchPage.style';
import SearchBar from '../../components/search/SearchBar';
import SearchedMovieFetch from '../../components/fetch/SearchedMovieFetch';
import useDebouncedSearch from '../../hooks/useDebouncedSearch';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    useDebouncedSearch(searchTerm);

    return (
        <S.Container>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <SearchedMovieFetch/>
        </S.Container>
    );
};

export default SearchPage;
