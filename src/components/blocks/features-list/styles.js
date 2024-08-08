import styled from "styled-components";
import { Section } from "../../styled";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";

const Features = styled(Section)`
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
    padding-top: 64px;
  }

  @media screen and (max-width: 425px) {
    padding-top: 48px;
  }

  @media screen and (max-width: 375px) {
    padding-top: 32px;
  }
`;

const StyledTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    margin-bottom: 48px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 64px;

  @media screen and (max-width: 768px) {
    margin-top: 48px;
  }

  @media screen and (max-width: 515px) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 425px) {
    margin-top: 32px;
  }

  @media screen and (max-width: 375px) {
    margin-top: 24px;
  }
`;

export { Features, StyledTitle, StyledButton };
