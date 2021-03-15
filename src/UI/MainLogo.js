import { ReactComponent as Logo } from "../Icons/Logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    font-size: 32px;
    color: ${(props) => props.theme.colors.textColor};
  }
`;

const LogoSVG = styled(Logo)`
  width: 36px;
  height: 50px;
  margin-left: 8px;
`;

const MainLogo = () => {
  return (
    <LogoContainer>
      <p>El-Quizo</p>
      <LogoSVG />
    </LogoContainer>
  );
};

export default MainLogo;
