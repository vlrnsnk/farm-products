import React from "react";
import "./style.css";
import Title from "../title/title";

export default function FeatureCard() {
  return (
    <section className="feature">
      <header className="feature__header">
        <img
          className="feature_img"
          width={56}
          height={56}
          src="https://i.ibb.co/xGg2GfP/eat-1.png"
          alt="The food tastes so much better"
        />
        <div>
          <span className="feature__owner">Farm products</span>
          <Title>The food tastes so much better</Title>
        </div>
      </header>
      <p className="feature__text">
        Homemade sausage made of&nbsp;meat, salt and&nbsp;spices
        and&nbsp;sausage from&nbsp;the&nbsp;store&nbsp;sausage from a
        store&nbsp;&mdash; two products so different that they are not even
        related
      </p>
    </section>
  );
}
