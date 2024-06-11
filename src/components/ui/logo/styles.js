import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  margin-left: -4px;
  height: 44px;
  align-items: center;
  color: ${(props) => props.theme.fontColorBlack};
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: ${(props) => props.theme.fontColorBlack};
  }
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

export const Text = styled.span`
  display: flex;
  min-height: 44px;
  margin-left: 25px;
  font-weight: bold;
  font-size: 28px;
  line-height: 44px;
  color: ${(props) => props.theme.colorBlackForText};
`;
