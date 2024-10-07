import styled from "styled-components";

const STYLE = {
  Nav: styled.nav`
    padding-top: 4px;
    padding-left: 12px;
    padding-right: 12px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  `,
  Logo: styled.img`
    width: 120px;
  `,
  Container: styled.div`
    display: flex;
    gap: 4px;
  `,
  SignIn: styled.div`
    background-color: ${({ theme }) => theme.btnRed};
    width: 64px;
    height: 32px;
    border-radius: 8px;
  `,
  SignUp: styled.div``,
};

export default STYLE;
