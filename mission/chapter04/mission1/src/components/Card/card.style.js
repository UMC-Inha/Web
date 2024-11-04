import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  width: 150px; /* 카드의 너비를 적절하게 조정 */
  height: 265px; /* 카드의 높이 */
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover div {
    opacity: 1;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 85%;
  border-radius: 10px;
  object-fit: cover;
`;

export const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 검정색 + 50% 불투명
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const MovieTitle = styled.h3`
  font-size: 0.5rem;
  color: white;
`;

export const ReleaseDate = styled.p`
  font-size: 0.5rem;
  color: grey;
`;
