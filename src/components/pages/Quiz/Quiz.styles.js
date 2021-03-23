import styled from "styled-components";
import { ReactComponent as Luck } from "../../../Icons/Luck.svg";
import { Button } from "../../../UI/Button";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LuckIcon = styled(Luck)`
  width: 32px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.secondaryTextColor};
  margin-top: -16px;
  margin-bottom: 32px;
  p {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 24px;
  }
`;

export const CategoryName = styled.p`
  color: ${(props) => props.theme.colors.secondaryTextColor};
  font-size: 16px;
  margin-top: 32px;
`;

export const TheQuestion = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;
  ${Button} {
    margin: 8px;
    width: 100%;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  a {
    color: ${(props) => props.theme.colors.secondaryTextColor};
    text-decoration: none;
  }
`;
