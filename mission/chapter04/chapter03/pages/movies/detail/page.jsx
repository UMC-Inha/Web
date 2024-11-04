import MovieDetailFetcher from '../../../components/fetchers/MovieDetailFetcher';
import ApiErrorBoundary from '../../../components/error-boundaries/ApiErrorBoundary';
import Detail from '../../../components/detail/detail';

export default function MovieDetail({id}) {

    return (
        <>
            <ApiErrorBoundary>
                <MovieDetailFetcher id={id}>
                    <Detail/>
                </MovieDetailFetcher>
            </ApiErrorBoundary>
        </>
    )
}