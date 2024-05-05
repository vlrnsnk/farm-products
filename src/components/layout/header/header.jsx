import React from "react";
import "./style.css";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}
