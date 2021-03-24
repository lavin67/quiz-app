import React, { useState, useEffect } from "react";
import MobileContainer from "../../../UI/Mobile-Container";
import MainLogo from "../../../UI/MainLogo";
import { Button } from "../../../UI/Button";
import { Input } from "../../../UI/Input";
import { NavLink, useLocation } from "react-router-dom";
import { MainContainer, Description, PrizeContainer } from "./Prize.styles";

const Prize = ({
  CocktailIcon,
  WhiskyIcon,
  BeerIcon,
  TequilaIcon,
  RumIcon,
  WineIcon,
  VodkaIcon,
  MartiniIcon,
}) => {
  return (
    <MobileContainer>
      <MainContainer>
        <Description>Enjoy</Description>
        <PrizeContainer>{CocktailIcon}</PrizeContainer>
        <PrizeContainer>{WhiskyIcon}</PrizeContainer>
        <PrizeContainer>{BeerIcon}</PrizeContainer>
        <PrizeContainer>{TequilaIcon}</PrizeContainer>
        <PrizeContainer>{RumIcon}</PrizeContainer>
        <PrizeContainer>{WineIcon}</PrizeContainer>
        <PrizeContainer>{VodkaIcon}</PrizeContainer>
        <PrizeContainer>{MartiniIcon}</PrizeContainer>
      </MainContainer>
    </MobileContainer>
  );
};

export default Prize;
