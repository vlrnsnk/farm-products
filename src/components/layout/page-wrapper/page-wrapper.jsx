import React from "react";
import { Main } from "./styles";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";

export default function PageWrapper({ features }) {
  return (
    <>
      <Header />
      <Main>
        <MainPage features={features} />
      </Main>
      <Footer />
    </>
  );
}
