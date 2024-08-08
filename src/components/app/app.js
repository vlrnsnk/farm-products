import React from "react";
import { GlobalStyle } from "./styles";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import features from "../../mocks/features";
import products from "../../mocks/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const.js";
import MainPage from "../pages/main-page/main-page";
import Order from "../pages/order/order";
import ScrollTop from "../ui/scroll-top/scroll-top";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
