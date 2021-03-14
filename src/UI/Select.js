import styled from "styled-components";

export const Select = styled.select`
  height: 32px;
  width: 252px;
  background-color: ${(props) => props.theme.colors.inputColor};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  &:active {
    border: ${(props) => props.theme.colors.border};
  }
  &:hover {
    border: ${(props) => props.theme.colors.border};
  }

  &:focus {
    outline-color: ${(props) => props.theme.colors.border};
  }
`;
