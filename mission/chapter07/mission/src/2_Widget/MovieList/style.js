import styled from "styled-components";

const STYLE = {
  Main: styled.div`
    display: flex;
    flex-direction: column;
  `,
  MovieList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 16px;
    background-color: ${({ theme }) => theme.background};
    align-content: start;
  `,
  BtnContainer: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
  `,
  PageBtn: styled.input`
    border-radius: 8px;
    margin: 16px;
    width: 200px;
    height: 60px;
    background-color: aliceblue;
    color: black;
    border: 8px;
    &:hover {
      background-color: cyan;
    }
  `,
};

export default STYLE;
