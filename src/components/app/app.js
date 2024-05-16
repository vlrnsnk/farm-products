import React from "react";
import { GlobalStyle } from "./styles";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import features from "../../mocks/features";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={features}>Page content</PageWrapper>
    </>
  );
}
