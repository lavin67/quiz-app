import React, { useState, useEffect } from "react";
import MobileContainer from "../../../UI/Mobile-Container";

import { Button } from "../../../UI/Button";

import { NavLink, useLocation } from "react-router-dom";
import Result from "../Result/Result";
import { ThreeDots } from "svg-loaders-react";

import * as he from "he";

import {
  LuckIcon,
  Container,
  HeaderContainer,
  CategoryName,
  TheQuestion,
  OptionsContainer,
  FooterContainer,
  Description,
  OrdinaryContainer,
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
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [status, setStatus] = useState("idle");

  const location = useLocation();
  const query = queryString.parse(location.search);
  const selectedCategory = query.category;
  const amount = query.amount;
  const difficulty = query.difficulty;
  const type = query.type;
  const name = query.name;

  const handleSelectedAnswer = (answer) => {
    setSelectedAnswer(answer);
    //console.log(answer === questions[currentQuestion].correctAnswer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      //console.log(score)
    }
  };

  const handleNextButton = () => {
    console.log("im here bitch");
    setSelectedAnswer("");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      console.log(currentQuestion);
    } else {
      console.log("finished bitch");
      setResult(true);
    }
  };

  // Sends a request (idle)
  // Wait for the data to come (pending)
  // Success (Show the things)
  // Error (An error has occured1)
  useEffect(() => {
    setStatus("pending");
    api
      .get(
        `https://opentdb.com/api.php?amount=${amount}&category=${selectedCategory}&difficulty=${difficulty}&type=${type}`
      )
      .then((res) => {
        setStatus("fulfilled");
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
      })
      .catch((e) => {
        setStatus("rejected");
      });
  }, []);

  if (status === "pending") {
    return (
      <MobileContainer>
        <OrdinaryContainer>
          <Description>
            <ThreeDots width={64} height={64} />
          </Description>
        </OrdinaryContainer>
      </MobileContainer>
    );
  }
  if (questions.length === 0 && type === "boolean" && status === "fulfilled") {
    return (
      <MobileContainer>
        <OrdinaryContainer>
          <Description>
            Too Many Questions
            <br />
            Please choose the right amount of questions!
          </Description>

          <NavLink to="/quiz-property">
            <Button primary>GO BACK</Button>
          </NavLink>
        </OrdinaryContainer>
      </MobileContainer>
    );
  }
  return (
    <>
      {result ? (
        <Result questions={questions} score={score} name={name} />
      ) : (
        <>
          {questions.length > 0 && (
            <MobileContainer>
              <HeaderContainer>
                <CategoryName>
                  {questions[currentQuestion].category}
                </CategoryName>
                <Container>
                  <p>
                    Question {currentQuestion + 1}/{questions.length}
                  </p>
                  <LuckIcon />
                </Container>
              </HeaderContainer>

              <TheQuestion>
                {console.log(questions[currentQuestion].correctAnswer)}
                {he.decode(questions[currentQuestion].question)}
              </TheQuestion>
              {type === "multiple" ? (
                <div>
                  <OptionsContainer>
                    {questions[currentQuestion].answers.map((answer) => {
                      return (
                        <Button
                          secondary
                          isSelected={selectedAnswer === answer}
                          onClick={() => handleSelectedAnswer(answer)}
                          key={answer}
                        >
                          {he.decode(answer)}
                        </Button>
                      );
                    })}
                  </OptionsContainer>
                  <FooterContainer>
                    {console.log(selectedAnswer)}
                    <NavLink to="/quiz-property">Quit quiz :(</NavLink>
                    {currentQuestion < questions.length - 1 ? (
                      <Button
                        primary
                        onClick={() => handleNextButton()}
                        disabled={selectedAnswer.length === 0 ? true : false}
                      >
                        NEXT
                      </Button>
                    ) : (
                      <Button
                        primary
                        onClick={() => handleNextButton()}
                        disabled={selectedAnswer.length === 0 ? true : false}
                      >
                        FINISH
                      </Button>
                    )}
                  </FooterContainer>
                </div>
              ) : (
                <div>
                  <OptionsContainer>
                    {questions[currentQuestion].answers
                      .sort()
                      .reverse()
                      .map((answer) => {
                        // {console.log(questions[currentQuestion].answers)}
                        return (
                          <Button
                            secondary
                            onClick={() => handleSelectedAnswer(answer)}
                            key={answer}
                            isSelected={selectedAnswer === answer}
                          >
                            {answer}
                          </Button>
                        );
                      })}
                  </OptionsContainer>

                  <FooterContainer>
                    <NavLink to="/quiz-property">Quit quiz :(</NavLink>
                    {currentQuestion < questions.length - 1 ? (
                      <Button
                        primary
                        onClick={() => handleNextButton()}
                        disabled={selectedAnswer.length === 0 ? true : false}
                      >
                        NEXT
                      </Button>
                    ) : (
                      <Button
                        primary
                        onClick={() => handleNextButton()}
                        disabled={selectedAnswer.length === 0 ? true : false}
                      >
                        FINISH
                      </Button>
                    )}
                  </FooterContainer>
                </div>
              )}
            </MobileContainer>
          )}
        </>
      )}
    </>
  );
};

export default Questions;
