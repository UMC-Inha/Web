import styled from "styled-components";

export const MovieGrid = styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 20px; 
    padding: 0;
    list-style-type: none; 
`;

export const MovieCard = styled.div`
    background: #222;
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
    background-color: rgb(230, 230, 230);
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
`;

export const MovieTitle = styled.p`
    background-color: rgb(230, 230, 230);
    margin: 5px 0;
    white-space: nowrap;
    overflow: hidden;

`;

export const ReleaseDate = styled.p`
    background-color: rgb(230, 230, 230);
    font-size: 14px;
    margin: 0;

`;