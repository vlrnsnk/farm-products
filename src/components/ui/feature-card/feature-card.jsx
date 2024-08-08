import React from "react";
import { Feature, Image, Owner, Header, Text } from "./styles";
import Title, { TitleSize } from "../title/title";

function FeatureCard({ title, owner, about, isNegative, image }) {
  return (
    <Feature $isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner $isNegative={isNegative}>{owner}</Owner>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }}></Text>
    </Feature>
  );
}

export default FeatureCard;
