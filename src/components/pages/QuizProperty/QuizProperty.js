import React from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
import "../../../UI/Fonts.css";
import {
  StyledNavLink,
  Container,
  StyledNameLabel,
  QuizPropsContainer,
  StyledPropertyLabel,
  ButtonContainer,
} from "./QuizProperty.styles";
import { Button } from "../../../UI/Button";
import { Input } from "../../../UI/Input";

const QuizPropertyPage = () => {
  return (
    <MobileContainer>
      <Container>
        <StyledNavLink to="/">
          <MainLogo />
        </StyledNavLink>
        <StyledNameLabel>What's your name?</StyledNameLabel>
        <Input />
      </Container>
      <QuizPropsContainer>
        <StyledPropertyLabel>Number of questions:</StyledPropertyLabel>
        <Input />
        <StyledPropertyLabel>Select category:</StyledPropertyLabel>
        <Input />
        <StyledPropertyLabel>Select type:</StyledPropertyLabel>
        <Input />
        <StyledPropertyLabel>Select difficulty:</StyledPropertyLabel>
        <Input />
      </QuizPropsContainer>
      <ButtonContainer>
        <Button>START</Button>
      </ButtonContainer>
    </MobileContainer>
  );
};

export default QuizPropertyPage;
