import styled from "styled-components";

const STYLE = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  Input: styled.input`
    width: 360px;
    height: 60px;
    border-radius: 8px;
    outline: none;
    color: black;
    &:focus {
      background-color: cyan;
    }
  `,
  ErrMsg: styled.div`
    font-size: small;
    color: red;
  `,
};

export default STYLE;
