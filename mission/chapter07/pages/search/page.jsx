import {
    SearchWrapper,
    SearchInput,
    SearchButton,
} from './styled';
import Feed from '../../components/feed/feed';   
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MovieListFetcher from '../../components/fetchers/MovieListFetcher';
import ApiErrorBoundary from '../../components/error-boundaries/ApiErrorBoundary';
import useSearchHook from '../../hooks/useSearchHook';

export default function Search() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams({search:''});
    const { search, handleSearchChange, handleSearch } = useSearchHook();
    const querySearch = searchParams.get('search');

    return(
        <SearchWrapper>
            <SearchInput 
                value={search}
                onChange={handleSearchChange}
            />
            <SearchButton onClick={()=>{
                handleSearch();
                navigate(`/search?search=${search}`);
            }}>검색</SearchButton>

            {querySearch && (
               <>
                   <ApiErrorBoundary>
                       <MovieListFetcher url={`https://api.themoviedb.org/3/search/movie?language=ko-KR&page=1&query=${search}`}>
                           <Feed />
                       </MovieListFetcher>
                   </ApiErrorBoundary>
               </>
           )}
        </SearchWrapper>
    )
}