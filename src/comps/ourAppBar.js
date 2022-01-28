// a simple form which is styled through bulma css lib, it uses a backing custom
// hook to deal with storing values. The call back is provided by the client component.

import React from "react";
import { Link } from "react-router-dom";
import { UserStore } from "../../store/userStore";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const OurAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fruitulous!
          </Typography>
          <Link style={{ color: "white" }} to="/home/customers">
            <Button color="inherit">Community</Button>
          </Link>
          <Link style={{ color: "white" }} to="/home/products">
            <Button color="inherit">Recipes</Button>
          </Link>
          <Link style={{ color: "yellow" }} to="/">
            <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default OurAppBar;
