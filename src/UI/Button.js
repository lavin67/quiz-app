import styled, { css } from "styled-components";

export const Button = styled.button`
  height: 2.5rem;
  width: 9rem;
  border-radius: 5px;
  border: none;
  /* margin-top: 2rem; */
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
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => props.theme.colors.textColor};
      background-color: ${(props) => props.theme.colors.inputColor};
      /* 
      &:active {
        border: ${(props) => props.theme.colors.border};
        background-color: ${(props) => props.theme.colors.inputColor};
      } */
      /* &:hover {
        border: ${(props) => props.theme.colors.border};
        background-color: ${(props) => props.theme.colors.inputColor};
      } */
      /* &:focus {
        border: ${(props) => props.theme.colors.border};
        background-color: ${(props) => props.theme.colors.inputColor};
      } */
      outline: none;
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
