import React from "react";
import { StyledLogo, Text, StyledLogoMainPage } from "./styles";
import { ReactComponent } from "../../../assets/logo.svg";
import { AppRoute } from "../../../const.js";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <ReactComponent />
      <Text>Farm Products</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <ReactComponent />
      <Text>Farm Products</Text>
    </StyledLogo>
  );
}

export default Logo;
