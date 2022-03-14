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
import { ThemeProvider } from "@mui/material/styles";

import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserStore, ThemeStore } from "../../store/userStore";
import { themeLight, themeDark } from "../../data/themes";

import OurAppBar from "./ourAppBar";
import Welcome from "./welcome";

export default function Home() {
  const userName = UserStore.useState((s) => s.name);
  console.log("home page - user is:", userName);

  const themeName = ThemeStore.useState((t) => t.currentTheme);
  const initialTheme = themeName === "light" ? themeLight : themeDark;
  const [mode, setMode] = React.useState(initialTheme);

  React.useEffect(() => {
    const unsubscribeThemeStore = ThemeStore.subscribe(
      (t) => t.currentTheme,
      (theme) => {
        let newTheme = theme === "light" ? themeLight : themeDark;
        console.log("home page, theme updated to ", theme);
        setMode(newTheme);
      }
    );

    return () => {
      unsubscribeThemeStore();
    };
  }, []);

  return (
    // overall layout
    <ThemeProvider theme={mode}>
      <Grid container spacing={1} sx={{ margin: "auto", maxWidth: "0.80" }}>
        <Grid container>
          <OurAppBar />
        </Grid>
        <Outlet />
      </Grid>
    </ThemeProvider>
  );
}
