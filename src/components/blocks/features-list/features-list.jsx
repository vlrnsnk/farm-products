import React from "react";
import "./style.css";
import Button from "../../ui/button/button";
import Title from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";

export default function FeaturesList() {
  return (
    <section className="features">
      <Title>Why are farm products better?</Title>
      <ul className="features__list">
        <li className="features__item">
          <FeatureCard />
        </li>
        <li className="features__item">
          <FeatureCard />
        </li>
        <li className="features__item">
          <FeatureCard />
        </li>
        <li className="features__item">
          <FeatureCard />
        </li>
      </ul>
      <Button>Buy</Button>
    </section>
  );
}
