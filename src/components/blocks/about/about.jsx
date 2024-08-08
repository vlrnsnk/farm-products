import React from "react";
import { StyledAbout, Text } from "./styles";
import Title, { TitleSize } from "../../ui/title/title";

function About() {
  return (
    <StyledAbout>
      <Title size={TitleSize.BIG}>Farm products store with delivery</Title>
      <Text>
        All products are made to order. Farmers start preparing the products the
        day before the order is sent to customers. That's why we take orders in
        advance and deliver products as fresh as possible.
      </Text>
    </StyledAbout>
  );
}

export default About;
