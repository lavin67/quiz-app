import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { sizes, devices } from "../../../Devices/Devices";
import { Input } from "../../../UI/Input";
import { Button } from "../../../UI/Button";

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
 
  color: ${(props) => props.theme.colors.textColor};
  font-size: 1.1rem;
  margin-bottom: 16px;
  margin-top: 8px;
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    font-size: 1.3rem;
  }
`;

export const StyledPropertyLabel = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 1.1rem;
  margin: 8px;
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    font-size: 1.3rem;
    align-self: flex-start;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

export const QuizPropContForLaptop = styled.div`
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 8px;
  }
`;

export const CategoryAndTypeContainer = styled.div`
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
  }
`;

export const DifficultyAndAmountContainer = styled.div`
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20.5%;
  }
`;

export const NameInput = styled(Input)`
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    width: 20%;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: -1rem;
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    height: 3rem;
    width: 11rem;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    outline: none;
  }
`;

export const EachPropContainer = styled.div`
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
  }
`;

