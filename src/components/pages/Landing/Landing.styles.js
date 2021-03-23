import styled from "styled-components";
import { ReactComponent as LearningSVG } from "../../../Icons/Learning.svg";

export const Description = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 20px;
  line-height: 32px;
`;

export const LearningIcon = styled(LearningSVG)`
  height: 236px;
  width: 321px;
`;
export const LearningIconContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;
