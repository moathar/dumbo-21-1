import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./comps/customers";
import Customer from "./comps/customer";
import Product from "./comps/product";
import Products from "./comps/products";

//import "bulma/css/bulma.css";

import App from "./App";
import Home from "./comps/home";
import BadLink from "./etc/badlink";
import AuthGuard from "./guards/authguard";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="home"
          element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          }
        ></Route>
        {/* <Route
            index
            element={
              <AuthGuard>
                <main style={{ padding: "1rem" }}>
                  <p>
                    wohoo, you have landed on the home page, now select what you
                    want to do.
                  </p>
                </main>
              </AuthGuard>
            }
          /> */}
        <Route
          path="customers"
          element={
            <AuthGuard>
              <Customers />
            </AuthGuard>
          }
        >
          <Route
            index
            element={
              <AuthGuard>
                <main style={{ padding: "1rem" }}>
                  <p>Please select a customer!</p>
                </main>
              </AuthGuard>
            }
          />
          <Route
            path=":number"
            element={
              <AuthGuard>
                {" "}
                <Customer />{" "}
              </AuthGuard>
            }
          />
        </Route>
        <Route
          path="products"
          element={
            <AuthGuard>
              {" "}
              <Products />{" "}
            </AuthGuard>
          }
        >
          <Route
            path=":code"
            element={
              <AuthGuard>
                {" "}
                <Product />{" "}
              </AuthGuard>
            }
          />
        </Route>

        <Route path="*" element={<BadLink />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
