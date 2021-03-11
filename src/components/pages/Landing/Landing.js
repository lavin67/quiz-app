import React from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
import "../../../UI/Fonts.css";
import {Discription, LearningIcon, Container} from './Landing.styles';
import {Button} from "../../../UI/Button";

const LandingPage = () => {
  return (
    <MobileContainer>
      <MainLogo />
      <Discription>
        El-Quizo is an application that makes learning fun!
        <br/>
        Answer all the
        questions correctly and win your favorite drink!
      </Discription>
      <Button>START THE QUIZ</Button>
      <Container>
        <LearningIcon />
        
      </Container>
    </MobileContainer>
  );
};

export default LandingPage;
