import styled from "styled-components";

const STYLE = {
  Aside: styled.aside`
    min-width: 240px;
    padding: 8px 0 0 16px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.midBlack};
  `,
  AsideTab: styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 8px;
    cursor: pointer;
  `,
  AsideTabIcon: styled.img`
    width: 24px;
  `
};
export default STYLE;
