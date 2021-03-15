import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuizPropsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin-top: 2rem;
`;

export const StyledNameLabel = styled.p`
  color: #f3e6ff;
  font-size: 1.1rem;
  margin-bottom: 16px;
  margin-top: 8px;
`;

export const StyledPropertyLabel = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 1.1rem;
  margin: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
