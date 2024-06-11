import React from "react";
import { GlobalStyle } from "./styles";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import features from "../../mocks/features";
import products from "../../mocks/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path={AppRoute.MAIN}>
            <Route
              index
              element={<PageWrapper features={features} products={products} />}
            />
            <Route
              exact
              path={AppRoute.ORDER}
              element={<PageWrapper features={features} products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
