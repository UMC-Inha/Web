import styled from "styled-components";

const STYLE = {
  MovieList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 16px;
    background-color: ${({ theme }) => theme.background};
    align-content: start;
  `,
  Movie: styled.div`
    position: relative;
    width: 160px;
    height: 240px;
    flex-basis: 160px;
  `,
  Thumbnail: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    margin: 0;
  `,
  ThumbnailHoverEffectDiv: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: gray;
    opacity: 0;
    border-radius: 8px;
    &:hover {
      opacity: 0.5;
    }

  `,

};

export default STYLE;
