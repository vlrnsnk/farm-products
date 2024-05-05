import React from "react";
import "./style.css";
import Logo from "../../ui/logo/logo";
import Copyright from "../../ui/copyright/copyright";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <Copyright />
    </footer>
  );
}
