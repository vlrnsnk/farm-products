import React from "react";
import {
  StyledOrder,
  LeftColumn,
  AddressInput,
  PriceLabel,
  PriceValue,
} from "./styles";
import Panel from "../../../components/ui/panel/panel";
import Title, { TitleSize } from "../../ui/title/title";

function Order() {
  return (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Choose your products
          </Title>
          Checkbox with products list
        </Panel>
        <Panel>
          <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Place order
          </Title>
          <AddressInput placeholder="Enter your delivery address" />
          <PriceLabel as="span">Price</PriceLabel>
          <PriceValue>400</PriceValue>
        </Panel>
      </LeftColumn>
      <div>slider with products goes here</div>
    </StyledOrder>
  );
}

export default Order;
