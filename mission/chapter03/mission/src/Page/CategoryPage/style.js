import styled from "styled-components";

const STYLE = {
  CategoryCardContainer: styled.div`
    display: flex;
    gap: 12px;
  `,
  CategoryCard: styled.div`
    width: 240px;
    height: 120px;
    cursor: pointer;
    display: flex;
    align-items: end;
    background-image: url(${(props) => props.backgroundImg});
    background-size: cover;
  `,
  CardText: styled.p`
    background-color: gray;
    font-size: large;
    padding: 4px;
    border-radius: 4px;
    font-weight: 400;
  `
};

export default STYLE;
