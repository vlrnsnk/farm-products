import React from "react";
import { StyledLogo, Text } from "./styles";
import { ReactComponent } from "../../../assets/logo.svg";
import { AppRoute } from "../../../const.js";

function Logo() {
  return (
    <StyledLogo to={AppRoute.MAIN}>
      <ReactComponent />
      <Text>Farm Products</Text>
    </StyledLogo>
  );
}

export default Logo;
