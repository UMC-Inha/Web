import * as S from './SkeletonList.style';
import SkeletonFrame from './SkeletonFrame';

const SkeletonList = ({number}) => {
    return (
        <S.MovieGrid>
            {new Array(number).fill(0).map((_, index) => <SkeletonFrame key={index}/>)}
        </S.MovieGrid>
    )
}

export default SkeletonList;