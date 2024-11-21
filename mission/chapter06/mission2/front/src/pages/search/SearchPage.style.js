import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh; // 검색 결과가 많을 때 스크롤 가능하게 변경
    background-color: black;
    padding-top: 40px; 
`;



export const ResultsContainer = styled.div`
    width: 90%; // 검색 결과 컨테이너 폭을 조금 넓혀 좌우 여백을 줄임
    max-width: 1200px;
    padding: 20px 0;
    background-color: #111;
    color: white;
    min-height: 100vh;
`;

export const SearchHeader = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    h1 {
        font-size: 24px;
        color: #f5f5f5;
    }
`;

export const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
`;

export const MovieCard = styled.div`
    background-color: #222;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
    color: white;

    &:hover {
        transform: scale(1.05);
    }
`;

export const MovieImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
`;

export const MovieTitle = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; // 텍스트가 길 경우 말줄임표 처리
`;

export const ReleaseDate = styled.p`
    font-size: 14px;
    color: #999;
    margin: 0;
`;

export const NoResultsMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #f5f5f5;
    padding: 40px 0;
    text-align: center;
    line-height: 1.5;
`;
