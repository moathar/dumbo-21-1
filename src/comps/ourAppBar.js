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
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LogoutIcon from "@mui/icons-material/Logout";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";

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
import PrivacyDialog from "./privacyDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OurAppBar = () => {
  const [open, setOpen] = React.useState(false);
  const userName = UserStore.useState((s) => s.name);

  const [progress, setProgress] = React.useState(90);

  const [error, setError] = React.useState("");

  const lockScreen = () => {
    console.log("locking screen...");
    setError("");
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar margin={4}>
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
            Dumbo Foods
          </Typography>
          <Link style={{ color: "white" }} to="/home/customers">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <GroupIcon />
            </IconButton>
          </Link>
          <Link style={{ color: "white" }} to="/home/products">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FastfoodIcon />
            </IconButton>
          </Link>
          <Link style={{ color: "white" }} to="/home/profile">
            {/* <Button color="inherit">Profile</Button> */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <PersonIcon />
            </IconButton>
          </Link>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LockIcon onClick={lockScreen} color={"warning"} />
          </IconButton>

          <Link color={"secondary.light"} to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LogoutIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      {open === true ? (
        <PrivacyDialog userName={userName} callBack={handleClose} />
      ) : (
        <p />
      )}

      {/* <Box sx={{ flexGrow: 1 }}>
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
          
            <Typography component="h6" color="red" ml={2}>
              This session has been locked. Please enter your pass code to
              continue. The session will expire automatically if you don't
              continue within the session expiry time.
            </Typography>
            <Box sx={{ width: "96%", mt: 2 }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Box component="form" onSubmit={handleClose} sx={{ mt: 2 }}>
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
                    variant="contained"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography color="red">{error}</Typography>
              </Grid>
            </Box>
          </Box>
        </Dialog>
      </Box> */}
    </Box>
  );
};

export default OurAppBar;
