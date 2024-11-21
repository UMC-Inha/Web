import styled, {keyframes} from 'styled-components';

const skeleton = keyframes`
    0% {
        opacity: 1;
    }
    25% {
        opacity: 0.75;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 0.75;
    }
    100% {
        opacity: 1;
    }
`;

export const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 150px; /* 카드의 너비를 적절하게 조정 */
    height: 265px; /* 카드의 높이 */
    overflow: hidden;    
`;

export const MovieImage = styled.img`
    background: rgb(230, 230, 230);
    width: 100%;
    height: 237px;
    border-radius: 10px;
    object-fit: cover;
    animation: ${skeleton} 3s 1s infinite linear alternate;

`;

export const MovieTitle = styled.p`
    background: rgb(230, 230, 230);
    width: 100%;
    height: 10px;  
    margin: 0;  
    border-radius: 10px;
    animation: ${skeleton} 3s 1s infinite linear alternate;

`;

export const ReleaseDate = styled.p`
    background: rgb(230, 230, 230);
    width: 100%;
    height: 8px;
    margin: 0;
    border-radius: 10px;
    animation: ${skeleton} 3s 1s infinite linear alternate;

`;