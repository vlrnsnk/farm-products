import React from "react";
import "./style.css";
import Title, { TitleSize } from "../../ui/title/title";

export default function About() {
  return (
    <section className="about">
      <Title size={TitleSize.BIG}>Farm products store with delivery</Title>
      <p className="about__text">
        All products are made to order. Farmers start preparing the products the
        day before the order is sent to customers. That's why we take orders in
        advance and deliver products as fresh as possible.
      </p>
    </section>
  );
}
