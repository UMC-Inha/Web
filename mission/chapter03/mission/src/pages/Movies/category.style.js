import styled from "styled-components";

// 전체 카테고리 컨테이너
export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: black;
  width: 100%;
`;

// 카테고리 박스 스타일
export const CategoryBox = styled.div`
  width: 200px;
  height: 100px;
  margin: 10px;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  // 카테고리 이름이 들어가는 부분
  p {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
  }

  // 배경 이미지 스타일 (선택사항)
  background: white; // 원하는 이미지 URL로 변경
  background-size: cover;
  background-position: center;
`;
