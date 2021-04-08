import styled from "styled-components";
import { ReactComponent as LearningSVG } from "../../../Icons/Learning.svg";
import { sizes, devices } from "../../../Devices/Devices";
import { Button } from "../../../UI/Button";

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
  }
`;

export const LearningIcon = styled(LearningSVG)`
  height: 236px;
  width: 321px;
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    height: 400px;
    width: 559px;
  }
`;
export const LearningIconContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 4rem;
    margin-left: 6rem;
  }
`;

export const MainContainerForLaptop = styled.div`
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const MainContainer = styled.div`
  @media ${devices.laptopM} {
    max-width: ${sizes.laptopM};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 2rem;
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


