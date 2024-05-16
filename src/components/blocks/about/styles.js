import styled from "styled-components";
import { P, Section } from "../../styled";
import aboutImage from "../../../assets/about.svg";

const StyledAbout = styled(Section)`
  position: relative;
  min-height: 550px;
  padding-top: 183px;
  padding-bottom: 145px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
  align-items: center;
  z-index: 1;
  flex-direction: column;

  &::after {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;

const Text = styled(P)`
  box-sizing: border-box;
  max-width: 650px;
  margin-top: 24px;
  padding-right: 116px;
  margin-bottom: 40px;
`;

export { StyledAbout, Text };
