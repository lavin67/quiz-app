import styled from "styled-components";
import { ReactComponent as Luck } from "../../../Icons/Luck.svg";
import { Button } from "../../../UI/Button";

import { sizes, devices } from "../../../Devices/Devices";

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
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    align-self: center;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;
  ${Button} {
    @media ${devices.laptopM} {
      max-width: ${sizes.laptopM};

      font-size: 16px;
    }
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
    @media ${devices.laptopM} {
      max-width: ${sizes.laptopM};
      font-size: 18px;
    }
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 20px;
  line-height: 32px;
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    font-size: 24px;
    line-height: 38px;
    margin-top: 4rem;
    margin-bottom: 4rem;
   // margin-bottom: 2.1rem;
    //margin-bottom: 2.1rem;
  }
`;

export const OrdinaryContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${Description}{
  margin-top: 4rem;
  margin-bottom: 4rem;
  align-self: center;
}
`;