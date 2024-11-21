import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    width: 80%;
    max-width: 800px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px; // 검색창과 결과 간의 여백 추가
`;

export const SearchInput = styled.input`
    flex: 1;
    padding: 16px;
    font-size: 16px;
    border: none;
    outline: none;
    color: #333;
`;

export const SearchButton = styled.button`
    background-color: #ff4b5c;
    color: white;
    padding: 16px 24px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    outline: none;

    &:hover {
        background-color: #ff3a4a;
    }
`;