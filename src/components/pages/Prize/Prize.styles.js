import styled from "styled-components";
import { ReactComponent as Luck } from "../../../Icons/Luck.svg";
import { Button } from "../../../UI/Button";
import { NavLink } from "react-router-dom";
import { ReactComponent as Whisky } from "../../../Icons/Whisky.svg";
import { ReactComponent as Wine } from "../../../Icons/wine.svg";
import { ReactComponent as Beer } from "../../../Icons/beer.svg";
import { ReactComponent as Martini } from "../../../Icons/martini.svg";
import { ReactComponent as Rum } from "../../../Icons/rum.svg";
import { ReactComponent as Tequila } from "../../../Icons/tequila.svg";
import { ReactComponent as Vodka } from "../../../Icons/vodka.svg";
import { ReactComponent as Cocktail } from "../../../Icons/cocktail.svg";
import { sizes, devices } from "../../../Devices/Devices";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Description = styled.p`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 28px;
  @media ${devices.laptopM} {
    font-size: 40px;
  }
`;

export const PrizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    height: 213px;
    width: 9rem;
    margin-bottom: 6rem;
    margin-top: 3rem;
  }
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg{
      width: 12rem;
      height: 12rem;
    }
  }
 
`;
