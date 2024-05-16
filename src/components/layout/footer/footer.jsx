import React from "react";
import { StyledSection, Copyright } from "./styles";
import Logo from "../../ui/logo/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Copyright © {currentYear}</Copyright>
    </StyledSection>
  );
}
