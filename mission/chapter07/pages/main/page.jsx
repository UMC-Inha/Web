import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import Feed from "../../components/feed/feed";
import { fetchMovieList} from "../../services/movies";
import { MovieListProvider, useMovieList } from "../../context/movieListContext";

// Main 컴포넌트를 두 개로 분리
function MainContent() {
    const [page, setPage] = useState(1);
    const { movies, setMovies } = useMovieList();
    
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['movies', page],
        queryFn: async () => fetchMovieList(`https://api.themoviedb.org/3/movie/upcoming?language=ko-KR`,page)
    });

    useEffect(()=>{
        if(data){
            setMovies(data);
        }
    },[data, setMovies])

    if (isLoading) return <div>로딩 중...</div>;
    if (isError) return <div>에러: {error.message}</div>;

    return (
        <div>
            <div className="movies-grid">
                <Feed/>     
            </div>
            
            <div className="pagination">
                <button 
                    onClick={() => setPage(old => Math.max(old - 1, 1))}
                    disabled={page === 1}
                >
                    이전
                </button>
                <span>페이지 {page}</span>
                <button 
                    onClick={() => setPage(old => old + 1)}
                    disabled={data.length < 20}
                >
                    다음
                </button>
            </div>
        </div>
    );
}

// Provider로 감싸는 메인 컴포넌트
export default function Main() {
    return (
        <MovieListProvider>
            <MainContent />
        </MovieListProvider>
    );
}