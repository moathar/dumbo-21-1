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
import Welcome from "./comps/welcome";
import Profile from "./comps/profile";

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
        >
          <Route
            index
            element={
              <AuthGuard>
                <Welcome />
              </AuthGuard>
            }
          />

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
                    {/* <p>Please select a customer!</p> */}
                  </main>
                </AuthGuard>
              }
            />
            <Route
              path=":id"
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
            {/* <Route
              path=":code"
              element={
                <AuthGuard>
                  {" "}
                  <Product />{" "}
                </AuthGuard>
              }
            /> */}
          </Route>
          <Route
            path="product/:code"
            element={
              <AuthGuard>
                {" "}
                <Product />{" "}
              </AuthGuard>
            }
          />

          <Route
            path="profile"
            element={
              <AuthGuard>
                {" "}
                <Profile />{" "}
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
