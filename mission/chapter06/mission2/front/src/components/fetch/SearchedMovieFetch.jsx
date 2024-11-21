import Card from '../Card/Card.jsx';
import { useCustomFetch } from '../../hooks/useCustomFetch.js';
import { useSearchParams } from 'react-router-dom';
import SkeletonList from '../skeleton/SkeletonList.jsx';
import * as S from './SearchedMovieFetch.style.js';

const SearchedMovieFetch = () => {
    const [searchParams] = useSearchParams({query: ''});
    const query = searchParams.get('query');
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=ko-KR&page=1   `;
    const { data: movies, error, loading } = useCustomFetch(url);

    console.log(movies);

    if(error){
        return <h2>에러가 발생했습니다.</h2>
    }

    if(loading) {
        return <SkeletonList number={20}/>
    }

    if(query && movies.results?.length === 0) {
        return (
            <div>
                <h2>해당하는 검색어 {query}에</h2>
                <h2>해당하는 데이터가 없습니다.</h2>
            </div>
        )
    }

    

    return (
        
        <S.MovieGrid>
            {movies.results?.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </S.MovieGrid>
    );
}

export default SearchedMovieFetch;