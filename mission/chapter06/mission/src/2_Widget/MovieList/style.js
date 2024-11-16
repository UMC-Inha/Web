import styled from "styled-components";

const STYLE = {
  MovieList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 16px;
    background-color: ${({ theme }) => theme.background};
    align-content: start;
  `
};

export default STYLE;
