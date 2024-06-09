import React from "react";
import { StyledOrder, LeftColumn } from "./styles";

function Order() {
  return (
    <StyledOrder as="form">
      <LeftColumn></LeftColumn>
      <div>slider with products goes here</div>
    </StyledOrder>
  );
}

export default Order;
