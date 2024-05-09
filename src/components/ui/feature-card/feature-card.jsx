import React from "react";
import "./style.css";
import Title, { TitleSize } from "../title/title";

export default function FeatureCard({ title, owner, isNegative, img, text }) {
  return (
    <section className={`feature${isNegative ? " feature_negative" : ""}`}>
      <header className="feature__header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src={img}
          alt={title}
        />
        <div>
          <span
            className={`feature__owner${isNegative ? " feature_negative__owner" : ""}`}
          >
            {owner}
          </span>
          <Title size={TitleSize.EXTRA_SMALL} as="h3">
            {title}
          </Title>
        </div>
      </header>
      <p
        className="feature__text"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </section>
  );
}
