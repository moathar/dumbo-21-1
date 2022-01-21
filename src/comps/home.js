// this is a sample home page
// TODO: layout, header, footer, menubars etc.
import { Grid, Typography, Item } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserStore } from "../../store/userStore";
import OurAppBar from "./ourAppBar";

export default function Home() {
  const userName = UserStore.useState((s) => s.name);

  return (
    // overall layout

    <Grid container spacing={1}>
      <Grid container>
        <OurAppBar />
      </Grid>
      <Grid></Grid>
      <Outlet />
    </Grid>
  );
}
