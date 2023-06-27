import { backgroundColor, darkGreenColor, sandColor } from "../../assets/colors";

import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: static;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${darkGreenColor};
  padding: 10px 0;
  p {
    margin: 0 10px;
    font-size: 0.6rem;
    color: ${backgroundColor};
  }
  svg {
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: ${sandColor};
    }
  }
`;

export const Slink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
