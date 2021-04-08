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
  QuizPropContForLaptop,
  CategoryAndTypeContainer,
  DifficultyAndAmountContainer,
  NameInput,
  StyledButton,
  EachPropContainer,
  AmountInput,
} from "./QuizProperty.styles";
import { Input } from "../../../UI/Input";
import { Select } from "../../../UI/Select";
import { useHistory } from "react-router-dom";

import axios from "axios";

const api = axios.create({
  baseURL: "https://opentdb.com/api.php",
});

const QuizPropertyPage = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCountAvailable, setIsCountAvailable] = useState(false);
  const [questionsCount, setQuestionsCount] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (questionsCount) {
      setIsCountAvailable(amount <= questionsCount.amount);
    }
  }, [amount, questionsCount]);

  useEffect(() => {
    if (selectedCategory.length > 0) {
      api
        .get(`https://opentdb.com/api_count.php?category=${selectedCategory}`)
        .then((e) => {
          if (difficulty === "easy") {
            setQuestionsCount({
              type: "easy",
              amount: e.data.category_question_count.total_easy_question_count,
            });
            console.log(questionsCount && questionsCount.amount);
          } else if (difficulty === "medium") {
            setQuestionsCount({
              type: "medium",
              amount:
                e.data.category_question_count.total_medium_question_count,
            });
            console.log(questionsCount && questionsCount.amount);
          } else if (difficulty === "hard") {
            setQuestionsCount({
              type: "hard",
              amount: e.data.category_question_count.total_hard_question_count,
            });
            console.log(questionsCount && questionsCount.amount);
          }
        });
    }
  }, [selectedCategory, difficulty]);

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

  const onGenerateTheQuiz = () => {
    history.push(
      `/quiz?amount=${amount}&category=${selectedCategory}&difficulty=${difficulty}&type=${type}&name=${name}`
    );
  };

  const isDisabled = !(
    selectedCategory.length > 0 &&
    type.length > 0 &&
    difficulty.length > 0 &&
    name.length > 0 &&
    amount.length > 0 &&
    isCountAvailable
  );

  {
    console.log(isCountAvailable);
  }
  //console.log(isDisabled);
  return (
    <MobileContainer>
      <Container>
        <StyledNavLink to="/">
          <MainLogo />
        </StyledNavLink>

        {/* name section */}
        <StyledNameLabel>What's your name?</StyledNameLabel>
        <NameInput onChange={onNameChange} value={name} />
      </Container>

      <QuizPropsContainer>
        <QuizPropContForLaptop>
          <CategoryAndTypeContainer>
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
              {/* difficulty */}
              <option value="multiple">Multiple Choice Questions</option>
              <option value="boolean">True/False</option>
            </Select>
          </CategoryAndTypeContainer>
          <DifficultyAndAmountContainer>
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

            {/* number of questions*/}
            <StyledPropertyLabel>Number of questions:</StyledPropertyLabel>
            <Input
              isAvailable={isCountAvailable}
              isUnavailabe={
                selectedCategory.length > 0 &&
                type.length > 0 &&
                difficulty.length > 0 &&
                name.length > 0 &&
                amount.length > 0
                  ? isCountAvailable === false
                  : false
              }
              placeholder="Choose a proper amount of questions"
              onChange={onAmountChange}
              value={amount}
            />
          </DifficultyAndAmountContainer>
        </QuizPropContForLaptop>
      </QuizPropsContainer>
      <ButtonContainer>
        {/* <div style={{ color: "white" }}>
          {difficulty +
            " : " +
            type +
            " : " +
            selectedCategory +
            " : " +
            amount +
            " : " +
            name}
        </div> */}

        <StyledButton onClick={onGenerateTheQuiz} primary disabled={isDisabled}>
          START
        </StyledButton>
      </ButtonContainer>
    </MobileContainer>
  );
};

export default QuizPropertyPage;
