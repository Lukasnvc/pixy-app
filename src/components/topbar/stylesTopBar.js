import { darkGreenColor, shadow, turqColor } from "../../assets/colors";

import { NavLink } from "react-router-dom";
import { sandColor } from "../../assets/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${darkGreenColor};
  box-shadow: ${shadow};
`;

export const LogoItem = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
  span {
    margin-left: -9px;
    font-size: 0.7rem;
    color: ${turqColor};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &:hover {
    cursor: pointer;
    span {
      color: ${sandColor};
    }
  }
`;

export const PicWrapper = styled.div`
  margin-right: 20px;
  height: 100%;
  button {
    height: inherit;
    background-color: ${turqColor};
    color: ${darkGreenColor};
    font-weight: 600;
    padding: 0 10px;
    border: none;
    margin: 0 2px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: ${sandColor};
      box-shadow: ${shadow};
      transform: scale(1.1);
    }
  }
`;

export const Slink = styled(NavLink)`
  height: inherit;
  text-decoration: none;
  color: inherit;
`;
