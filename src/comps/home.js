// this is a sample home page
// TODO: layout, header, footer, menubars etc.
import { ConstructionOutlined } from "@mui/icons-material";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button
} from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserStore } from "../../store/userStore";
import OurAppBar from "./ourAppBar";
import Welcome from "./welcome";

export default function Home() {
  const userName = UserStore.useState((s) => s.name);
  console.log("home page:", userName);

  return (
    // overall layout

    <Grid container spacing={1}>
      <Grid container>
        <OurAppBar />
      </Grid>
      <Outlet />
    </Grid>
  );
}
