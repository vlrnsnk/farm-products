import React from "react";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const.js";

function Nav() {
  return (
    <nav>
      <Button link={AppRoute.ORDER}>Order</Button>
    </nav>
  );
}

export default Nav;
