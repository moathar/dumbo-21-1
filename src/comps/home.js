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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserStore } from "../../store/userStore";
import OurAppBar from "./ourAppBar";
import Welcome from "./welcome";

const themeDark = createTheme({
  status: {
    danger: orange[500]
  },
  palette: {
    mode: "dark"
  }
});

const themeLight = createTheme({
  status: {
    danger: orange[500]
  },
  palette: {
    mode: "light"
  }
});

export default function Home() {
  const userName = UserStore.useState((s) => s.name);
  console.log("home page:", userName);

  // const [mode, setMode] = React.useState(themeLight);

  return (
    // overall layout

    <Grid container spacing={1} sx={{ margin: "auto", maxWidth: "0.80" }}>
      <Grid container>
        <OurAppBar />
      </Grid>
      <Outlet />
    </Grid>
  );
}
