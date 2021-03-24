import React, { useState, useEffect } from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
import { Button } from "../../../UI/Button";
import { Input } from "../../../UI/Input";
import { NavLink, useLocation } from "react-router-dom";
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
import Prize from '../Prize/Prize';

const Result = ({ questions, score }) => {

  const [SelectedPrize, setSelectedPrize] = useState(false);

const handleSelectedPrize = () => {
  setSelectedPrize(true);
}

  return (
    <>
    {SelectedPrize ? <Prize
     WhiskyIcon={<WhiskyIcon/>}
     BeerIcon={<BeerIcon/>}
     TequilaIcon={<TequilaIcon/>}
     RumIcon={<RumIcon/>}
     WineIcon={<WineIcon/>}
     VodkaIcon={<VodkaIcon/>}
     MartiniIcon={<MartiniIcon/>}
     CocktailIcon={<CocktailIcon/>}
     /> :
    <>
    {score === questions.length ? (
      <MobileContainer>
        <MainContainer>
          <HeaderContainer>
            <PageName>Quiz Result</PageName>
            <Score>
              {score}/{questions.length}
            </Score>
            <h1>Congratulations!</h1>
            <p>As a reward for winning get your favorite drink </p>
          </HeaderContainer>
          <RewardsContainer>
            <WhiskyIcon onClick={handleSelectedPrize}/>
            <BeerIcon onClick={handleSelectedPrize}/>
            <TequilaIcon onClick={handleSelectedPrize}/>
            <RumIcon onClick={handleSelectedPrize}/>
            <WineIcon onClick={handleSelectedPrize}/>
            <VodkaIcon onClick={handleSelectedPrize}/>
            <MartiniIcon onClick={handleSelectedPrize}/>
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
            <h1>Not so bad!</h1>
            <p>
              Try again and win your drink But here is a prize for your
              participation{" "}
            </p>
          </HeaderContainer>
          <CocktailContainer>
            <CocktailIcon onClick={handleSelectedPrize}/>
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
    
    }
    
    
    </>
  );
};

export default Result;
