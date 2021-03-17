import React, { useState } from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
import { Button } from "../../../UI/Button";
import { Input } from "../../../UI/Input";
import { NavLink } from "react-router-dom";
import {
  LuckIcon,
  Container,
  HeaderContainer,
  CategoryName,
  TheQuestion,
  OptionsContainer,
  FooterContainer,
} from "./Quiz.styles";

const Questions = ({ category }) => {
  //  // api
  //   .get(
  //     `https://opentdb.com/api.php?amount=${amount}&category=${selectedCategory}&difficulty=${difficulty}&type=${type}`
  //   )
  //   .then((res) => console.log(res.data));
  return (
    <MobileContainer>
      <HeaderContainer>
        <CategoryName>Biology Quiz</CategoryName>
        <Container>
          <p>Question 1/2</p>
          <LuckIcon />
        </Container>
      </HeaderContainer>
      <TheQuestion>The energy released by 1 gram of glucose is ?</TheQuestion>
      <OptionsContainer>
        <Button secondary>100</Button>
        <Button secondary>200</Button>
        <Button secondary>300</Button>
        <Button secondary>400</Button>
      </OptionsContainer>
      <FooterContainer>
        <NavLink to="/quiz-property">Quit quiz :(</NavLink>
        <Button primary>NEXT</Button>
      </FooterContainer>
    </MobileContainer>
  );
};

export default Questions;
