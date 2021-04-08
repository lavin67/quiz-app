import React, { useState, useEffect } from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
import { Button } from "../../../UI/Button";
import { Input } from "../../../UI/Input";
import { NavLink, useLocation } from "react-router-dom";
import { MainContainer, Description, PrizeContainer } from "./Prize.styles";
import {
  WhiskyIcon,
  BeerIcon,
  TequilaIcon,
  RumIcon,
  WineIcon,
  VodkaIcon,
  MartiniIcon,
  CocktailIcon,
} from "../Result/Result.styles";

const Prize = ({ selectedPrize }) => {
  return (
    <MobileContainer>
      <MainContainer>
        <Description>Enjoy your {selectedPrize.key} :)</Description>
        <PrizeContainer>{selectedPrize.icon}</PrizeContainer>
        <NavLink to="/quiz-property">
          <Button primary>TAKE NEW QUIZ</Button>
        </NavLink>
      </MainContainer>
    </MobileContainer>
  );
};

export default Prize;
