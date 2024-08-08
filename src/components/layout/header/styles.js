import styled from "styled-components";
import { Section } from "../../styled";

const StyledSection = styled(Section)`
  position: relative;
  max-width: ${(props) => props.theme.pageWidth};
  min-height: 80px;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  background-color: green;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 5;

  @media screen and (max-width: 620px) {
    flex-direction: column;
    gap: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export { StyledSection };
