import React from "react";
import "./style.css";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";

export default function PageWrapper() {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage />
      </main>
    </>
  );
}
