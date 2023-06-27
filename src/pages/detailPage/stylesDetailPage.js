import {
  buttonText,
  cardColor,
  darkGreenColor,
  sandColor,
  shadow,
  turqColor,
} from "../../assets/colors";

import { size } from "../../assets/breakpoints";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 87vh;
  width: 90%;
  scroll-behavior: smooth;
  margin: auto;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  box-shadow: ${shadow};
  padding: 25px;
  border-radius: 3px;
  background-color: ${cardColor};
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 2;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
    box-shadow: ${shadow};
  }
  video {
    width: 852px;
    height: 480px;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: ${shadow};
    z-index: 0;

    @media (max-width: ${size.laptop}) {
      height: 324px;
      width: 576px;
    }

    @media (max-width: ${size.tablet}) {
      height: 252px;
      width: 448px;
    }
    @media (max-width: ${size.tablet}) {
      height: 180px;
      width: 320px;
    }
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div {
    width: 100%;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 10px;
      margin: 5px 0;
      background-color: ${turqColor};
      color: ${buttonText};
      border: none;
      border-radius: 3px;
      font-size: 0.7rem;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;

      &:hover {
        box-shadow: ${shadow};
        color: ${sandColor};
        transform: scale(1.05);
      }
    }
  }
  @media (max-width: ${size.mobile}) {
    height: 230px;
    width: 100%;
    gap: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    font-size: 0.9rem;
    font-weight: 500;
  }
  h4 {
    margin-bottom: 5px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    span {
      margin-top: 10px;
      text-align: center;
      font-size: 0.8rem;
      max-width: 80px;
      padding: 5px;
      border-bottom: 2px solid ${darkGreenColor};
    }
  }
`;

export const Downloads = styled.div`
  span {
    margin-top: 10px;
    text-align: center;
    font-size: 0.7rem;
    i {
      font-weight: 600;
      margin-right: 5px;
    }
    svg {
      margin: 0px 5px;
    }
  }
`;
