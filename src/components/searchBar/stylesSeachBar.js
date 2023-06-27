import { darkGreenColor, sandColor, turqColor } from "../../assets/colors";

import { styled } from "styled-components";

export const Search = styled.div`
  margin: 20px auto;
  form {
    display: flex;
    align-items: center;
    border: 1px solid ${darkGreenColor};
    border-radius: 5px;
    input {
      width: 270px;
      height: 30px;
      padding-left: 5px;
      outline: none;
      border: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      color: ${darkGreenColor};
      font-size: 1.1rem;
    }
    button {
      height: 30px;
      padding: 0 8px;
      border: none;
      background-color: ${turqColor};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
      svg {
        color: ${darkGreenColor};
        font-size: 1.2rem;
        transition: all 0.3s;
      }
      &:hover {
        svg {
          transform: scale(1.3);
          color: ${sandColor};
        }
      }
    }
  }
`;
