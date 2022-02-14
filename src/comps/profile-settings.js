import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  CardHeader,
  Switch,
  Select,
  MenuItem,
  inputLabelClasses,
  InputLabel,
  FormGroup,
  FormControl,
  FormControlLabel
} from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserStore } from "../../store/userStore";
import OurAppBar from "./ourAppBar";

export default function Settings() {
  const userName = UserStore.useState((s) => s.name);
  const theme = UserStore.useState((s) => s.currentTheme); // tidy this up
  const [isDarkTheme, setDarkTheme] = React.useState(false);
  const [font, setFont] = React.useState("Roboto");

  const handleThemeChange = (event) => {
    setDarkTheme(event.target.checked);
  };

  const handleFontChange = (event) => {
    setFont(event.target.value);
  };

  return (
    // overall layout

    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardHeader subheader="Typography" />
          <CardContent>
            <FormControl fullWidth>
              <InputLabel id="font-select">Font</InputLabel>
              <Select
                id="font-select"
                value={font}
                label="Font"
                onChange={handleFontChange}
              >
                <MenuItem value={"Roboto"}>Roboto</MenuItem>
                <MenuItem value={"Times Roman"}>Times Roman</MenuItem>
                <MenuItem value={"Verdana"}>Verdana</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardHeader subheader="Theme" />
          <CardContent>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch checked={isDarkTheme} onChange={handleThemeChange} />
                }
                label="Dark Theme"
              />
            </FormGroup>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
