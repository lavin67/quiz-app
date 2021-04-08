import React, { useState } from "react";
import MobileContainer from "../../../UI/Mobile-Container";

import { Button } from "../../../UI/Button";

import { NavLink } from "react-router-dom";
import {
  MainContainer,
  HeaderContainer,
  RewardsContainer,
  ButtonContainer,
  PageName,
  Score,
  WhiskyIcon,
  WineIcon,
  BeerIcon,
  MartiniIcon,
  RumIcon,
  TequilaIcon,
  VodkaIcon,
  CocktailIcon,
  CocktailContainer,
} from "./Result.styles";
import Prize from "../Prize/Prize";
import { useMediaQuery } from "react-responsive";
import {  devices } from "../../../Devices/Devices";

const Result = ({ questions, score, name }) => {
  const [prizeRecieved, setPrizeRecieved] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState({});

  const handleSelectedPrize = (prize) => {
    setPrizeRecieved(true);
    setSelectedPrize(prize);
    console.log(selectedPrize);
  };

  const isLaptop = useMediaQuery({
    query: devices.laptopM,
  });

  const losingPrize = [
    {
      key: "cocktail",
      icon: <CocktailIcon />,
    },
  ];

  const winningPrizesLaptop = [
    {
      key: "whiskey",
      icon: <WhiskyIcon />,
    },
    {
      key: "beer",
      icon: <BeerIcon />,
    },
    {
      key: "tequila",
      icon: <TequilaIcon />,
    },
    {
      key: "martini",
      icon: <MartiniIcon />,
    },
    {
      key: "rum",
      icon: <RumIcon />,
    },
    {
      key: "wine",
      icon: <WineIcon />,
    },
    {
      key: "vodka",
      icon: <VodkaIcon />,
    },
  ];

  const winningPrizesMobile = [
    {
      key: "whiskey",
      icon: <WhiskyIcon />,
    },
    {
      key: "beer",
      icon: <BeerIcon />,
    },
    {
      key: "tequila",
      icon: <TequilaIcon />,
    },
    {
      key: "rum",
      icon: <RumIcon />,
    },
    {
      key: "wine",
      icon: <WineIcon />,
    },
    {
      key: "vodka",
      icon: <VodkaIcon />,
    },
    {},
    {
      key: "martini",
      icon: <MartiniIcon />,
    },
  ];
  return (
    <>
      {prizeRecieved ? (
        <Prize selectedPrize={selectedPrize} />
      ) : (
        <>
          {score === questions.length ? (
            <MobileContainer>
              <MainContainer>
                <HeaderContainer>
                  <PageName>Quiz Result</PageName>
                  <Score>
                    {score}/{questions.length}
                  </Score>
                  <h1>Congratulations {name}!</h1>
                  <p>As a reward for winning get your favorite drink </p>
                </HeaderContainer>
                <RewardsContainer>
                  {isLaptop
                    ? winningPrizesLaptop.map((prize) => {
                        return (
                          <div
                            onClick={() => handleSelectedPrize(prize)}
                            secondary
                            isSelected={selectedPrize.key === prize.key}
                          >
                            {prize.icon}{" "}
                          </div>
                        );
                      })
                    : winningPrizesMobile.map((prize) => {
                        return (
                          <div
                            onClick={() => handleSelectedPrize(prize)}
                            secondary
                            isSelected={selectedPrize.key === prize.key}
                          >
                            {prize.icon}{" "}
                          </div>
                        );
                      })}
                </RewardsContainer>

                <ButtonContainer>
                  <NavLink to="/quiz-property">
                    <Button primary>TAKE NEW QUIZ</Button>
                  </NavLink>
                </ButtonContainer>
              </MainContainer>
            </MobileContainer>
          ) : (
            <MobileContainer>
              <MainContainer>
                <HeaderContainer>
                  <PageName>Quiz Result</PageName>
                  <Score>
                    {score}/{questions.length}
                  </Score>
                  <h1>Not so bad {name}!</h1>
                  <p>
                    Try again and win your drink But here is a prize for your
                    participation{" "}
                  </p>
                </HeaderContainer>
                <CocktailContainer>
                  {losingPrize.map((prize) => {
                    return (
                      <div
                        onClick={() => handleSelectedPrize(prize)}
                        secondary
                        isSelected={selectedPrize.key === prize.key}
                      >
                        {prize.icon}{" "}
                      </div>
                    );
                  })}
                </CocktailContainer>
                <ButtonContainer>
                  <NavLink to="/quiz-property">
                    <Button primary>TAKE NEW QUIZ</Button>
                  </NavLink>
                </ButtonContainer>
              </MainContainer>
            </MobileContainer>
          )}
        </>
      )}
    </>
  );
};

export default Result;
