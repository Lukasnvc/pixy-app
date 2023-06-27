import { darkGreenColor, shadow, turqColor } from "../../assets/colors";

import { NavLink } from "react-router-dom";
import { size } from "../../assets/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  scroll-behavior: smooth;
`;

export const AllPics = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  width: 200px;
  height: 200px;
  transition: all 0.2s;
  position: relative;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 2%;
  }
  div {
    position: absolute;
    right: 5px;
    bottom: 5px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: all 0.3s;
    span {
      font-size: 0.6rem;
      padding: 2px;
      margin-bottom: 2px;
      background-color: ${turqColor};
      opacity: 0.8;
      border-radius: 5%;
      color: ${darkGreenColor};
    }
  }
  &:hover {
    box-shadow: ${shadow};
    cursor: pointer;
    transform: scale(1.1);
    div {
      opacity: 1;
    }
  }
  @media (max-width: ${size.mobile}) {
    width: 140px;
    height: 140px;
  }
`;

export const NotFound = styled.img`
  width: 55%;
  height: 55%;
  object-fit: contain;
  @media (max-width: ${size.mobile}) {
    width: 100%;
    height: 100%;
  }
`;
