import React from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
import { ReactComponent as LearningSVG } from "../../../Icons/Learning.svg";
import styled from "styled-components";
import "../../../UI/Fonts.css";

const Discription = styled.p`
  color: #f3e6ff;
  font-size: 24px;
  font-family: "Lato", sans-serif;
`;

const LearningIcon = styled(LearningSVG)`
  height: 236px;
  width: 321px;
`;
const Container = styled.div`
  display: flex;
  margin-top: 4rem;
`;
const LandingPage = () => {
  return (
    <MobileContainer>
      <MainLogo />
      <Discription>
        El-Quizo is an application that makes learning fun! Answer all the
        questions correctly and win your favorite drink!
      </Discription>
      <Container>
        <LearningIcon />
      </Container>
    </MobileContainer>
  );
};

export default LandingPage;
