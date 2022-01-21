import { Outlet, NavLink } from "react-router-dom";
import { getProducts, getProductsByCat } from "../../data/products";
// this has some nody examples of using state and effects
import React, { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState(getProducts());

  useEffect(() => {}, [products]);

  // let [searchParams, setSearchParams] = useSearchParams();
  const SetFilter = (param) => {
    if (param !== "all") {
      setProducts(getProductsByCat(param));
    } else {
      setProducts(getProducts());
    }
  };

  return (
    <div style={{ padding: "1rem 0", paddingLeft: "10px" }}>
      <h1>Products</h1>
      <button onClick={() => SetFilter("all")}> All</button>{" "}
      <button onClick={() => SetFilter("fruit")}> Fruit</button>{" "}
      <button onClick={() => SetFilter("veg")}> Veg</button> {}
      <div style={{ padding: "1rem 0", paddingLeft: "50px" }}>
        {products.map((prod) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "green" : ""
              };
            }}
            to={`/home/products/${prod.code}`}
            key={prod.code}
          >
            {prod.name} | {prod.price}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
