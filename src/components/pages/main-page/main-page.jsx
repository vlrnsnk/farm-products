import React from "react";
import "./style.css";
import About from "../../blocks/about/about";
import FeaturesList from "../../blocks/features-list/features-list";

export default function MainPage({ features }) {
  return (
    <>
      <About />
      <FeaturesList features={features} />
    </>
  );
}
