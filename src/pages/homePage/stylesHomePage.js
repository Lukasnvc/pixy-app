import { darkGreenColor, turqColor } from "../../assets/colors";

import { size } from "../../assets/breakpoints";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > div:first-child {
    border-right: 1px dashed ${turqColor};
  }
`;

export const ScrollableDiv = styled.div`
  overflow-y: auto;
  max-height: 100vh;
  flex: 1;
  p {
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 20px;
    color: ${darkGreenColor};
    span {
      color: ${turqColor};
      font-size: 1rem;
    }
    @media (max-width: ${size.mobile}) {
      margin-bottom: 10px;
      font-size: 0.6rem;
      line-height: 1.2;
      span {
        font-size: 0.7rem;
      }
    }
  }
`;
