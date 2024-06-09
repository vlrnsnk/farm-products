import React from "react";
import Panel from "../../ui/panel/panel";
import { ProductImage, ContentWrapper, ProductTitle, Price } from "./styles";
import { TitleSize } from "../title/title";

function ProductCart({ product }) {
  return (
    <Panel>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>
          {product.name}
        </ProductTitle>
        <Price>
          {product.price} ₴ / {product.weight} g.
        </Price>
      </ContentWrapper>
    </Panel>
  );
}

export default ProductCart;
