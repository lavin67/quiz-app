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


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 24px;
    font-weight: normal;
  }
  p {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 18px;
    text-align: center;
  }
`;

export const PageName = styled.div`
  color: ${(props) => props.theme.colors.secondaryTextColor};
  font-size: 16px;
  margin: 24px;
`;

export const Score = styled.div`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 24px;
`;

export const RewardsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, minmax(80px, 1fr));
  grid-template-columns: repeat(3,  minmax(80px, 1fr));
  margin: 8px;
  row-gap: 8px;
  column-fill: balance;
  column-gap: 8px;
  flex: 1;
  height: 100%;
 
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
`;

export const WhiskyIcon = styled(Whisky)`
  height: 64px;
  width: 64px;
`;

export const WineIcon = styled(Wine)`
  height: 64px;
  width: 64px;
`;

export const BeerIcon = styled(Beer)`
  height: 64px;
  width: 64px;

`;
export const MartiniIcon = styled(Martini)`
  height: 64px;
  width: 64px;
  grid-column: 2/ 3;
  grid-row: 3 / 3;
  
`;

export const RumIcon = styled(Rum)`
  height: 64px;
  width: 64px;
`;

export const VodkaIcon = styled(Vodka)`
  height: 64px;
  width: 64px;
`;

export const TequilaIcon = styled(Tequila)`
  height: 64px;
  width: 64px;
`;
export const CocktailIcon = styled(Cocktail)`
  height: 8rem;
  width: 8rem;
`;

export const ButtonContainer = styled.div`
margin: 40px;
`;

export const CocktailContainer = styled.div`
margin: 3rem;
`;
