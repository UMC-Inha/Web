import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Label = styled.p`
  font-size: large;
  padding-left: 8px;
`;

export const DefaultInput = styled.input`
  width: 360px;
  height: 50px;
  border-radius: 8px;
  outline: none;
  color: black;
  &:focus {
    background-color: cyan;
  }
`;

export const LongInput = styled.input`
  width: 720px;
  height: 50px;
  border-radius: 8px;
  outline: none;
  color: black;
`

export const SubmitInput = styled.input`
  width: 360px;
  height: 50px;
  border-radius: 8px;
  outline: none;
  color: black;
  background-color: ${(props) => (props.disabled ? "gray" : "red")};
  &:focus {
    background-color: cyan;
  }
`;

export const InputErrMsg = styled.p`
  font-size: smaller;
  color: red;
`;
