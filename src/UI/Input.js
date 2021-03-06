import styled, { css } from "styled-components";
import { sizes, devices } from "../Devices/Devices";

export const Input = styled.input`
  height: 38px;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  outline: none;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.inputColor};

  &:active {
    border: ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.inputColor};
  }
  &:hover {
    border: ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.inputColor};
  }
  &:focus {
    border: ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.inputColor};
  }

  ${(props) =>
    props.isSelected &&
    css`
      color: ${(props) => props.theme.colors.textColor};
      background-color: ${(props) => props.theme.colors.inputColor};
      

      outline: none;
    `}

  ${(props) =>
    props.isUnavailabe &&
    css`
      &:active {
        
        border: none;
      }

      &:focus {
          border: ${(props) => props.theme.colors.wrongRed};
      
        }
        &:hover {
          border: ${(props) => props.theme.colors.wrongRed};
          
        }

      border:${(props) => props.theme.colors.wrongRed};
    `}
    ${(props) =>
    props.isAvailabe &&
    css`
      &:active {
        border: ${(props) => props.theme.colors.border};
      }

      &:focus {
        border: ${(props) => props.theme.colors.border};
      }
      border: none;
      outline: none;
    `}
  
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    width: 100%;
    font-size: 14px;
    margin-bottom: 24px;
  }
`;
