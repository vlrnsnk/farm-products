import React from "react";
import { StyledSection } from "./styles";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";

function Header() {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav />
    </StyledSection>
  );
}

export default Header;
