import React from "react";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const.js";
import { StyledButton } from "./styles";
import { useLocation } from "react-router";
import { Ul, Li } from "../../styled";

const links = [
  {
    to: AppRoute.MAIN,
    item: <StyledButton link={AppRoute.MAIN}>Homepage</StyledButton>,
  },
  { to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Order</Button> },
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <Ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
      </Ul>
    </nav>
  );
}

export default Nav;
