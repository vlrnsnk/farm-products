import React from "react";
import "./style.css";

const currentYear = new Date().getFullYear();

export default function Copyright() {
  return <span>Copyright © {currentYear}</span>;
}
