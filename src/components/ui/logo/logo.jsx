import React from "react";
import { StyledLogo, Text } from "./styles";
import { ReactComponent } from "../../../assets/logo.svg";

function Logo() {
  return (
    <StyledLogo href="/">
      <ReactComponent />
      <Text>Farm Products</Text>
    </StyledLogo>
  );
}

export default Logo;
