import styled from "styled-components";

const STYLE = {
  Main: styled.main`
    display: flex;
    background-color: ${({theme}) => theme.background};
  `,
};

export default STYLE;
