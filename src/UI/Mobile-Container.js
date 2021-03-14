import styled from "styled-components";
import { sizes, devices } from "../Devices/Devices";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.colors.backgroundColor};
  margin: 0 auto;

  // Law 7ajma baraw sarawa
  @media ${devices.mobileS} {
    max-width: ${sizes.mobileS};
  }
`;

export default Container;
