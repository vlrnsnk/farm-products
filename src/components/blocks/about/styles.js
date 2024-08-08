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

  @media screen and (max-width: 1190px) {
    padding-right: 90px;
    padding-top: 90px;
    padding-bottom: 40px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding-right: 48px;
    padding-top: 64px;
  }

  @media screen and (max-width: 425px) {
    padding-right: 24px;
    padding-top: 48px;
  }

  @media screen and (max-width: 375px) {
    padding-right: 16px;
    padding-top: 32px;
  }

  @media screen and (max-width: 320px) {
    padding-right: 8px;
    padding-top: 32px;
  }

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

    @media screen and (max-width: 1190px) {
      display: none;
    }
  }
`;

const Text = styled(P)`
  box-sizing: border-box;
  max-width: 650px;
  margin-top: 24px;
  padding-right: 116px;
  margin-bottom: 40px;

  @media screen and (max-width: 1190px) {
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export { StyledAbout, Text };
