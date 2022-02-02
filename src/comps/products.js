import { Outlet, Link, NavLink } from "react-router-dom";
import { getProducts, getProductsByCat } from "../../data/products";
// this has some nody examples of using state and effects
import React, { useState, useEffect } from "react";

import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button
} from "@mui/material";

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

  //TOOD: user data grid

  return (
    <Grid container spacing={1}>
      {products.map((prod) => (
        <Grid item xs={12} sm={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography>{prod.name}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "green" : ""
                    };
                  }}
                  to={`/home/product/${prod.code}`}
                >
                  Details
                </NavLink>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Grid item sx={12}>
        <Outlet />
      </Grid>
    </Grid>
    // <div style={{ padding: "1rem 0", paddingLeft: "10px" }}>
    //   <h1>Products</h1>
    //   <button onClick={() => SetFilter("all")}> All</button>{" "}
    //   <button onClick={() => SetFilter("fruit")}> Fruit</button>{" "}
    //   <button onClick={() => SetFilter("veg")}> Veg</button> {}
    //   <div style={{ padding: "1rem 0", paddingLeft: "50px" }}>
    //     {products.map((prod) => (
    //       <NavLink
    //         style={({ isActive }) => {
    //           return {
    //             display: "block",
    //             margin: "1rem 0",
    //             color: isActive ? "green" : ""
    //           };
    //         }}
    //         to={`/home/products/${prod.code}`}
    //         key={prod.code}
    //       >
    //         {prod.name} | {prod.price}
    //       </NavLink>
    //     ))}
    //   </div>
    //   <Outlet />
    // </div>
  );
}
