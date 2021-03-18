import React, { useState, useEffect } from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
import { Button } from "../../../UI/Button";
import { Input } from "../../../UI/Input";
import { NavLink, useLocation } from "react-router-dom";
import Result from '../Result/Result'
import {
  LuckIcon,
  Container,
  HeaderContainer,
  CategoryName,
  TheQuestion,
  OptionsContainer,
  FooterContainer,
} from "./Quiz.styles";

import axios from "axios";

import queryString from "query-string";

const api = axios.create({
  baseURL:
    "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple",
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(false);
  const [score, setScore] =useState(0);
  const location = useLocation();
  const query = queryString.parse(location.search);
  const selectedCategory = query.category;
  const amount = query.amount;
  const difficulty = query.difficulty;
  const type = query.type;

  const handleSelectedAnswer = (answer) => {
    console.log(answer === questions[currentQuestion].correctAnswer);
    if(answer === questions[currentQuestion].correctAnswer){
      setScore(score+1);
      console.log(score)
    };
  };

  const handleNextButton = () => {

if (currentQuestion < questions.length-1){
  setCurrentQuestion(currentQuestion+1);
  console.log(currentQuestion);
}else{
  console.log("finished bitch");
   setResult(true);
}
  }

  const handleFinishButton = () => {
   
    
    
  };

  useEffect(() => {
    api
      .get(
        `https://opentdb.com/api.php?amount=${amount}&category=${selectedCategory}&difficulty=${difficulty}&type=${type}`
      )
      .then((res) => {
        const questions = res.data.results.map((question) => {
          const incorrectAnswers = question.incorrect_answers;
          const correctAnswers = question.correct_answer;
          const answers = [...incorrectAnswers, correctAnswers];
          shuffle(answers);

          return {
            question: question.question,
            answers,
            correctAnswer: question.correct_answer,
            category: question.category,
            type: question.type,
          };
        });

        setQuestions(questions);
        console.log(type);
      });
  }, []);

  return (
    
    <>
    { result ? <Result questions={questions} score={score}/> :
    <>
    {questions.length > 0 && (
        <MobileContainer>
          <HeaderContainer>
            <CategoryName>{questions[currentQuestion].category}</CategoryName>
            <Container>
              <p>
                Question {currentQuestion + 1}/{questions.length}
              </p>
              <LuckIcon />
            </Container>
          </HeaderContainer>

          <TheQuestion>{questions[currentQuestion].question}</TheQuestion>
          {type === "multiple" ? (
            <div>
              <OptionsContainer>
                {questions[currentQuestion].answers.map((answer) => {
                  return (
                    <Button
                      secondary
                      onClick={() => handleSelectedAnswer(answer)}
                      key={answer}
                    >
                      {answer}
                    </Button>
                  );
                })}
              </OptionsContainer>
              <FooterContainer>
                <NavLink to="/quiz-property">Quit quiz :(</NavLink>
                {currentQuestion < questions.length-1 ?  <Button primary onClick={() => handleNextButton()}>NEXT</Button>
                : <Button primary onClick={() => handleNextButton()}>FINISH</Button>}
               
              </FooterContainer>
            </div>
          ) : (
            <div>
              <OptionsContainer
              //style={{ marginBottom: "6rem" }}
              >
                {questions[currentQuestion].answers.map((answer) => {
                  return (
                    <Button
                      secondary
                      onClick={() => handleSelectedAnswer(answer)}
                      key={answer}
                    >
                      {answer}
                    </Button>
                  );
                })}
              </OptionsContainer>
              <FooterContainer>
                <NavLink to="/quiz-property">Quit quiz :(</NavLink>
                  {currentQuestion < questions.length-1 ?  <Button primary onClick={() => handleNextButton()}>NEXT</Button>
                : <Button primary onClick={() => handleNextButton()}>FINISH</Button>}
              </FooterContainer>
            </div>
          )}
        </MobileContainer>
        
      )}</> }
      
    </>
  );
};

export default Questions;
