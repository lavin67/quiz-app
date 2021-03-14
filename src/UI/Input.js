import styled from "styled-components";

export const Input = styled.input`
  height: 32px;
  width: 252px;
  background-color: ${(props) => props.theme.colors.inputColor};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  &:active {
    border: ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.inputColor}
  }
  &:hover {
    border: ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.inputColor}
  }
  &:focus {
    border: ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.inputColor}
  }
`;