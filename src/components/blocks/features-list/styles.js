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
`;

const StyledTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 64px;
`;

export { Features, StyledTitle, StyledButton };
