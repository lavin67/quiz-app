import styled from 'styled-components';
import "../../../UI/Fonts.css";
import { ReactComponent as LearningSVG } from "../../../Icons/Learning.svg";

export const Discription = styled.p`
  color: #f3e6ff;
  font-size: 20px;
  font-family: "Lato", sans-serif;
  line-height: 32px;
`;

export const LearningIcon = styled(LearningSVG)`
  height: 236px;
  width: 321px;
`;
export const Container = styled.div`
  display: flex;
  margin-top: 1rem;
`;