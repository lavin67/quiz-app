import React, { useState } from "react";
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
import { Select } from "../../../UI/Select";

import axios from "axios";

const api = axios.create({
  baseURL:
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
});

const QuizPropertyPage = () => {

//from here
  const [name, setName] = useState({
    userName: "",
  });
  const { userName} = name;
  const onChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  //till here, is to make the name input work.


  const [currentAmount, setCurrentAmount] = useState({});

  api.get("/").then((res) => {
    console.log(res.data);
  });

  return (
    <MobileContainer>
      <Container>
        <StyledNavLink to="/">
          <MainLogo />
        </StyledNavLink>
        <StyledNameLabel>What's your name?</StyledNameLabel>
        <Input
          onSubmit={onSubmit}
          onChange={onChange}
          name="userName"
          value={userName}
        />
      </Container>
      <QuizPropsContainer>
        <StyledPropertyLabel>Number of questions:</StyledPropertyLabel>
        <Input />
        <StyledPropertyLabel>Select category:</StyledPropertyLabel>
        <Select name="category">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Select>
        <StyledPropertyLabel>Select type:</StyledPropertyLabel>
        <Select name="type">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Select>
        <StyledPropertyLabel>Select difficulty:</StyledPropertyLabel>
        <Select name="difficulty">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Select>
      </QuizPropsContainer>
      <ButtonContainer>
        <Button>START</Button>
      </ButtonContainer>
    </MobileContainer>
  );
};

export default QuizPropertyPage;
