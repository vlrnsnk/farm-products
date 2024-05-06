import React from "react";
import "./style.css";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import features from "../../mocks/features";

export default function App() {
  return <PageWrapper features={features} />;
}
