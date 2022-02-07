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

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { TextField, Grid, Card, CardActions, CardContent } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OurAppBar = () => {
  const [open, setOpen] = React.useState(false);
  const userName = UserStore.useState((s) => s.name);
  const [code, setCode] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Link style={{ color: "white" }} to="/home/profile">
            <Button color="inherit">Profile</Button>
          </Link>
          <Button style={{ color: "white" }} onClick={handleClickOpen}>
            Lock{" "}
          </Button>

          <Link style={{ color: "yellow" }} to="/">
            <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1 }}>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          contentAlign={"center"}
        >
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography component="h6" variant="h6" color="red">
              This session has been locked. Please enter your pass code to
              continue.
            </Typography>
            <Box component="form" onSubmit={handleClose} sx={{ mt: 1 }}>
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    name="code"
                    label="Pass Code"
                    type="password"
                    id="code"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
};

export default OurAppBar;
