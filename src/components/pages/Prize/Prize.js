import React from "react";
import MobileContainer from "../../../UI/Mobile-Container";

import { Button } from "../../../UI/Button";

import { NavLink } from "react-router-dom";
import { MainContainer, Description, PrizeContainer } from "./Prize.styles";


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
