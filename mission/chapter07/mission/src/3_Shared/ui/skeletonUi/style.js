import styled from "styled-components";

export const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
  align-content: start;
`;
export const CardSkeleton = styled.div`
  width: 160px;
  height: 240px;
  border-radius: 8px;
  margin: 0;
  background-color: gray;
  opacity: 0.7;
`;
