import React from "react";
import "./style.css";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";

export default function PageWrapper({ features }) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage features={features} />
      </main>
      <Footer />
    </>
  );
}
