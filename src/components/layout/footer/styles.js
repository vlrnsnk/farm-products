import styled from "styled-components";
import { Section } from "../../styled";

const StyledSection = styled(Section)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  height: 79px;
  background-color: ${(props) => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Copyright = styled.span`
  min-width: 148px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  vertical-align: middle;
  text-align: right;
`;

export { StyledSection, Copyright };
