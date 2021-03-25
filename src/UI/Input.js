import styled from "styled-components";
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

  
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    width: 100%;
    font-size: 14px;

  }
`;
