import React from "react";
import "./style.css";

export default function Button({ children }) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}
