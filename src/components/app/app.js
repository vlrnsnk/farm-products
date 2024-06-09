import React from "react";
import { GlobalStyle } from "./styles";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import features from "../../mocks/features";
import products from "../../mocks/products";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={features} products={products}>
        Page content
      </PageWrapper>
    </>
  );
}
