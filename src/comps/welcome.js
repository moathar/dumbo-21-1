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

export default function Welcome() {
  const userName = UserStore.useState((s) => s.name);

  return (
    // overall layout

    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography>
              Welcome {userName}, check out the latest fruitulous recipes here
              to fill the life of your customers with joy!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to="/home/Products">Recipes</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography>
              Connect with our community of visitors which come from all walks
              of life, mostly the fake ones!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              {" "}
              <Link to="/home/Customers">Connect</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
