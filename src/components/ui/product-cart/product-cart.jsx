import React from "react";
import Panel from "../../ui/panel/panel";
import { ProductImage, ContentWrapper, ProductTitle, Price } from "./styles";
import { TitleSize } from "../title/title";
import Tabs from "../tabs/tabs";
import OptionsList from "../options-list/options-list";

function ProductCart({ product }) {
  const tabsList = [
    {
      title: "Description",
      content: product.description,
    },
    {
      title: "Characteristics",
      content: <OptionsList list={product.specifications} />,
    },
    {
      title: "Properties",
      content: <OptionsList list={product.structure} />,
    },
  ];

  return (
    <Panel>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>
          {product.name}
        </ProductTitle>
        <Tabs maxContentHeight="105px" tabsList={tabsList} />
        <Price>
          {product.price} $ / {product.weight} g.
        </Price>
      </ContentWrapper>
    </Panel>
  );
}

export default ProductCart;
