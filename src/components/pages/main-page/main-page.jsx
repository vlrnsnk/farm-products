import React from "react";
import About from "../../blocks/about/about";
import FeaturesList from "../../blocks/features-list/features-list";

function MainPage({ features }) {
  return (
    <>
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
