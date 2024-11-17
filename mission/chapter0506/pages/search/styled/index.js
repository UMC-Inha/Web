import styled from 'styled-components';

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

export const SearchInput = styled.input`
    width: 300px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    margin-right: 10px;
`;

export const SearchButton = styled.button`
    height: 30px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`;