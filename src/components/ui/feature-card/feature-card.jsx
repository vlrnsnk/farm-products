import React from "react";
import "./style.css";
import Title, { TitleSize } from "../title/title";

export default function FeatureCard() {
  return (
    <section className="feature">
      <header className="feature__header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src="https://i.ibb.co/xGg2GfP/eat-1.png"
          alt="The food tastes so much better"
        />
        <div>
          <span className="feature__owner">Farm products</span>
          <Title size={TitleSize.EXTRA_SMALL}>
            The food tastes so much better
          </Title>
        </div>
      </header>
      <p className="feature__text">
        Homemade sausage made from meat, salt and spices and sausage from the
        store are two products so different that they aren't even related
      </p>
    </section>
  );
}
