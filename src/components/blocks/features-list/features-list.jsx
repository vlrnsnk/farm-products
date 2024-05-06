import React from "react";
import "./style.css";
import Button from "../../ui/button/button";
import Title from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";

export default function FeaturesList({ features }) {
  return features && features.length ? (
    <section className="features">
      <Title>Why are farm products better?</Title>
      <ul className="features__list">
        {features.map((feature) => (
          <li className="features__item" key={feature.id}>
            <FeatureCard {...feature} />
          </li>
        ))}
      </ul>
      <Button>Buy</Button>
    </section>
  ) : null;
}
