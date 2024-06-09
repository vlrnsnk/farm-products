import React from "react";
import { Main } from "./styles";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Order from "../../pages/order/order";
import Footer from "../footer/footer";

export default function PageWrapper({ features, products }) {
  return (
    <>
      <Header />
      <Main>
        {/* <MainPage features={features} /> */}
        <Order products={products} />
      </Main>
      <Footer />
    </>
  );
}
