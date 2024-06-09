import React from "react";
import { StyledOrder, LeftColumn } from "./styles";
import Panel from "../../../components/ui/panel/panel";

function Order() {
  return (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}></Panel>
        <Panel></Panel>
      </LeftColumn>
      <div>slider with products goes here</div>
    </StyledOrder>
  );
}

export default Order;
