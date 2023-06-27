import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  scroll-behavior: smooth;
`;

export const ScrollableDiv = styled.div`
  overflow-y: auto;
  max-height: 100vh;
  flex: 1;
`;
