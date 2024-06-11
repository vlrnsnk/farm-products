import React from "react";
import FeatureCard from "../../ui/feature-card/feature-card";
import { Ul, Li } from "../../styled";
import { Features, StyledButton, StyledTitle } from "./styles";
import { AppRoute } from "../../../const.js";

function FeaturesList({ features }) {
  return features && features.length ? (
    <Features>
      <StyledTitle as="h2">Why are farm products better?</StyledTitle>
      <Ul $isGridList>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton link={AppRoute.ORDER}>Order</StyledButton>
    </Features>
  ) : null;
}

export default FeaturesList;
