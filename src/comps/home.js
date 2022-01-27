// this is a sample home page
// TODO: layout, header, footer, menubars etc.
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

export default function Home() {
  const userName = UserStore.useState((s) => s.name);

  return (
    // overall layout

    <Grid container spacing={1}>
      <Grid container>
        <OurAppBar />
      </Grid>

      <Grid item>
        <Typography>
          Wohoo <span style={{ color: "green" }}>{userName}</span>, the breaking
          news is that bannana milkshakes are the thing.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography>
              Check out the latest fruitulous recipes here to fill the life of
              your customers with joy!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Recipes</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography>
              Connect with the community and meet Dumbo's extended family of
              fruit farmers
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Connect</Button>
          </CardActions>
        </Card>
      </Grid>

      <Outlet />
    </Grid>
  );
}
