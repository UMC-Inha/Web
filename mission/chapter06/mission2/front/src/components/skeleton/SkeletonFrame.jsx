import * as S from './SkeletonFrame.style';

const SkeletonFrame = () => {
    return (
        <S.MovieCard>
            <S.MovieImage />
            <S.MovieTitle/>
            <S.ReleaseDate/>
        </S.MovieCard>
    )
}

export default SkeletonFrame;