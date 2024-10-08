import styled from "styled-components";

const STYLE = {
  Nav: styled.nav`
    padding: 8px 32px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    background-color: ${({ theme }) => theme.midBlack};

  `,
  Logo: styled.img`
    width: 120px;
    cursor: pointer;
  `,
  Container: styled.div`
    display: flex;
    gap: 4px;
  `,
  SignUp: styled.div`
    background-color: ${({ theme }) => theme.btnRed};
    width: 80px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `,
  SignIn: styled.div`
    width: 80px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `,
};

export default STYLE;
