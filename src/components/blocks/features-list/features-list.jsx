import React from "react";
import "./style.css";
import Button from "../../ui/button/button";
import Title from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";

export default function FeaturesList() {
  return (
    <section className="features-list">
      <Title>Features List</Title>
      <FeatureCard />
      <Button>Buy</Button>
    </section>
  );
}
