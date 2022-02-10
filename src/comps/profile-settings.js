import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  CardHeader
} from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserStore } from "../../store/userStore";
import OurAppBar from "./ourAppBar";

export default function Settings() {
  const userName = UserStore.useState((s) => s.name);
  const theme = UserStore.useState((s) => s.currentTheme);

  return (
    // overall layout

    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardHeader title="Theme" />
          <CardContent> </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
