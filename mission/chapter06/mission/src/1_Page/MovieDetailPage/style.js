import styled from "styled-components";

const STYLE = {
  MovieDetail: styled.div`
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  MovieBanner: styled.div`
    display: flex;
    flex-direction: column;
    line-height: 24px;
    height: 360px;
    background-size: cover;
    background-position: center -60px;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.backgroundImg});
  `,
  MovieInfoContainer: styled.div`
    display: flex;
    gap: 12px;
  `,
  MovieProviderContainer: styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  `,
  MovieProvider: styled.div`
  width: 120px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    font-size: smaller;
  `,
  MovieProviderProfile: styled.div`
    background-image: url(${(props) => props.profileImg});
    background-color: black;
    background-size: cover;
    background-position: center -8px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  `,
};

export default STYLE;
