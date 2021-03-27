import styled from "styled-components";
import { sizes, devices } from "../Devices/Devices";


export const Select = styled.select`
  height: 38px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.inputColor};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  outline: none;
  appearance: none;
  text-indent: 1rem;
  &:active {
    border: ${(props) => props.theme.colors.border};
  }
  &:hover {
    border: ${(props) => props.theme.colors.border};
  }

  &:focus {
    outline-color: ${(props) => props.theme.colors.border};
  }

  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    width: 100%;
    font-size: 14px;
    margin-bottom: 24px;
  }
`;
