import "./styles.css";

import React, { useState, useEffect } from "react";
import { UserStore, StatStore, ThemeStore } from "../../store/userStore";
import { themeLight, themeDark } from "../../data/themes";

import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import LoginForm from "./comps/LoginForm";
import OurAppBar from "./comps/ourAppBar";

// the user context will be set up by the login component when it has authenticated the user.
//export const UserContext = React.createContext({ name: "" });

// const themeDark = createTheme({
//   status: {
//     danger: orange[500]
//   },
//   palette: {
//     mode: "dark"
//   }
// });

// const themeLight = createTheme({
//   status: {
//     danger: orange[500]
//   },
//   palette: {
//     mode: "light"
//   }
// });

export default function App() {
  const [user, setUser] = useState("");
  const userCount = StatStore.useState((s) => s.userCount);
  const themeName = ThemeStore.useState((t) => t.currentTheme);
  const initialTheme = themeName === "light" ? themeLight : themeDark;
  const [mode, setMode] = React.useState(initialTheme);

  // subscribe to theme changes
  useEffect(() => {
    const unsubscribeThemeStore = ThemeStore.subscribe(
      (t) => t.currentTheme,
      (theme) => {
        let newTheme = themeName === "light" ? themeLight : themeDark;
        setMode(newTheme);
      }
    );

    return () => {
      unsubscribeThemeStore();
    };
  }, []);

  // try out the reaction where you can update a property based on an observerd changed.
  useEffect(() => {
    const unsubscribeUserStore = UserStore.createReaction(
      (s) => s,
      (s) => {
        setUser(s.name);
        StatStore.update((s) => {
          s.userCount = userCount + 1;
        });
      }
    );

    return () => {
      unsubscribeUserStore();
    };
  }, []);

  return (
    <ThemeProvider theme={mode}>
      <Grid container spacing={2}>
        <Grid item xs={12} marginTop={4}>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            Welcome to Dumbo Foods
          </Typography>
          <LoginForm />
          {userCount ? (
            <Typography
              variant="body1"
              style={{ textAlign: "center", fontSize: "80%", marginTop: "4" }}
            >
              we have served {userCount} happy customers today
            </Typography>
          ) : (
            <p />
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
    // <div className="App">
    //   <h3>Welcome {user} please log in to our fruitulous service...</h3>
    //   {/* <LoginForm callback={setUserContext} /> */}
    //   <LoginForm />

    //   {userCount ? (
    //     <h5>we have served {userCount} happy customers today</h5>
    //   ) : (
    //     <p />
    //   )}
    // </div>
  );
}
