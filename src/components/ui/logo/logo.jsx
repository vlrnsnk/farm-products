import React from "react";
import "./style.css";
import logo from "../../../assets/logo.svg";

export default function Logo() {
  return (
    <a href="/" className="logo__link">
      <img src={logo} alt="logo" />
      <span className="logo__text">Farm Products</span>
    </a>
  );
}
