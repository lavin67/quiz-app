import React from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
import { Discription, LearningIcon, Container } from "./Landing.styles";
import { Button } from "../../../UI/Button";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <MobileContainer>
      <MainLogo />
      <Discription>
        El-Quizo is an application that makes learning fun!
        <br />
        Answer all the questions correctly and win your favorite drink!
      </Discription>

      <NavLink to="/quiz-property">
        <Button style={{ marginTop: "2rem" }} primary>
          START THE QUIZ
        </Button>
      </NavLink>
      <Container>
        <LearningIcon />
      </Container>
    </MobileContainer>
  );
};

export default LandingPage;
