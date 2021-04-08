import styled, { css } from "styled-components";
import { sizes, devices } from "../Devices/Devices";

export const Button = styled.button`
  height: 2.5rem;
  width: 9rem;
  border-radius: 5px;
  border: none;

  font-size: 14px;
  outline: none;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  ${(props) =>
    props.primary &&
    css`
      background: ${props.theme.colors.buttonColor};
      color: ${props.theme.colors.textColor};

      &:active {
        background-color: #5a2290;
        border: none;
      }
      &:hover {
        background-color: #5a2290;
        border: none;
      }
      
      @media ${devices.laptopM} {
        max-width: ${sizes.laptopM};
        height: 3rem;
        width: 11rem;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        outline: none;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => props.theme.colors.textColor};
      background-color: ${(props) => props.theme.colors.inputColor};
     
      outline: none;
      @media ${devices.laptopM} {
        max-width: ${sizes.laptopM};
        width: 25%;
        font-size: 14px;
        margin: 8px;
      }
      margin: 8px;
      width: 100%;
    `}
    ${(props) =>
    props.isSelected &&
    css`
      color: ${(props) => props.theme.colors.textColor};
      background-color: ${(props) => props.theme.colors.inputColor};
      border: ${(props) => props.theme.colors.border};

      outline: none;
    `}
`;
