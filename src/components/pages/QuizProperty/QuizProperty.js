import React, { useState, useEffect } from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
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
import { NavLink } from "react-router-dom";

import axios from "axios";

const api = axios.create({
  baseURL:
    "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple",
});

const QuizPropertyPage = () => {
  const [amount, setAmount] = useState(10);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSthChange = () => {
    api
      .get(`https://opentdb.com/api_count.php?category=${selectedCategory}`)
      .then((e) => {
        console.log(e.data.category_question_count);
        // setAmount(event.data);
      });
  };

  useEffect(() => {
    api.get("https://opentdb.com/api_category.php").then((res) => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const onClick = () => {
    api
      .get(
        `https://opentdb.com/api.php?amount=${amount}&category=${selectedCategory}&difficulty=${difficulty}&type=${type}`
      )
      .then((res) => console.log(res.data));
  };

  //  api.get(
  //     `https://opentdb.com/api_count.php?category=${selectedCategory}`
  //   ); //Category Question Count Lookup: Returns the number of questions in the database, in a specific category

  return (
    <MobileContainer>
      <Container>
        <StyledNavLink to="/">
          <MainLogo />
        </StyledNavLink>

        {/* name section */}
        <StyledNameLabel>What's your name?</StyledNameLabel>
        <Input onChange={onNameChange} value={name}/>
      </Container>

      {/* number of questions */}
      <QuizPropsContainer>
        <StyledPropertyLabel>Number of questions:</StyledPropertyLabel>
        <Input onChange={onAmountChange} value={amount} />

        {/* select category */}
        <StyledPropertyLabel>Select category:</StyledPropertyLabel>
        <Select
          name="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          defaultValue="0"
        >
          <option value="0" defaultValue="0" disabled hidden>
            Choose here
          </option>

          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
        </Select>

        {/* multiple, boolean */}
        <StyledPropertyLabel>Select type:</StyledPropertyLabel>
        <Select name="type" onChange={onTypeChange} value={type}>
          <option value="" defaultValue="" disabled hidden>
            Choose here
          </option>
          {/* //question type */}
          <option value="multiple">Multiple Choice Questions</option>
          <option value="boolean">True/False</option>
        </Select>

        {/* //difficulty */}
        <StyledPropertyLabel>Select difficulty:</StyledPropertyLabel>
        <Select
          name="difficulty"
          onChange={onDifficultyChange}
          value={difficulty}
        >
          <option value="" defaultValue="" disabled hidden>
            Choose here
          </option>

          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
      </QuizPropsContainer>
      <ButtonContainer>
        <div style={{ color: "white" }}>
          {difficulty +
            " : " +
            type +
            " : " +
            selectedCategory +
            " : " +
            amount + " : " + name}
        </div>
        <NavLink to="/questions">
          <Button onClick={onClick} primary style={{ marginTop: "1rem" }}>
            START
          </Button>
        </NavLink>
      </ButtonContainer>
    </MobileContainer>
  );
};

export default QuizPropertyPage;
