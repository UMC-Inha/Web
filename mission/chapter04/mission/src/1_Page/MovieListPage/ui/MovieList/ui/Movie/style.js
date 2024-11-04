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
    flex-basis: 160px;
  `,
  Thumbnail: styled.img`
    width: 160px;
    height: 240px;
    border-radius: 8px;
    margin: 0;
  `,
  ThumbnailHoverEffectDiv: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 240px;
    background-color: gray;
    opacity: 0;
    border-radius: 8px;
    &:hover {
      opacity: 0.5;
    }
  `,
  MovieInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 2px;
    font-size: small;
  `,
};

export default STYLE;
