import { ReactComponent as Logo } from "../Icons/Logo.svg";
import styled from "styled-components";
import './Fonts.css';

const LogoContainer = styled.div`
display: flex;
flex-direction: row;
align-items:center;
justify-content: center;

p {
    font-size: 40px;
    color: #F3E6FF;
    font-family: 'Lato', sans-serif;
}
`;

const LogoSVG = styled(Logo)`
width: 40px;
height: 54px;
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