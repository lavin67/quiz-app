import React from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
import {
  Description,
  LearningIcon,
  LearningIconContainer,
  MainContainerForLaptop,
  MainContainer,
  StyledButton,
  PrimaryContainer,
} from "./Landing.styles";
//import { Button } from "../../../UI/Button";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <MobileContainer>
      <MainContainerForLaptop>
        <MainContainer>
          <MainLogo />
          <Description>
            El-Quizo is an application that makes learning fun!
            <br />
            Answer all the questions correctly and win your favorite drink!
          </Description>

          <NavLink to="/quiz-property">
            <StyledButton primary>START THE QUIZ</StyledButton>
          </NavLink>
        </MainContainer>
        <PrimaryContainer>
          <LearningIconContainer>
            <LearningIcon />
          </LearningIconContainer>
        </PrimaryContainer>
      </MainContainerForLaptop>
    </MobileContainer>
  );
};

export default LandingPage;
