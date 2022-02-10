import * as React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import LinearProgress from "@mui/material/LinearProgress";

import { Dialog } from "@mui/material";
import { TextField, Grid } from "@mui/material";

import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PrivacyDialog(props) {
  const [open] = React.useState(true);
  const [progress, setProgress] = React.useState(100);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleClose = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let code = data.get("code");
    if (code !== props.userName) {
      setError("Incorrect pass code, please try again...");
    } else {
      props.callBack();
    }
  };

  // TOOD: use a proper timeout, one min should be fine for demos
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 0) {
          navigate("/");
        }
        return oldProgress - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
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
          <Typography component="h6" color="red" ml={2}>
            This session has been locked. Please enter your pass code to
            continue. The session will expire automatically if you don't
            continue within the session expiry time.
          </Typography>
          <Box sx={{ width: "96%", mt: 2 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ height: 14, borderRadius: 2 }}
            />
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
                <Button type="submit" variant="contained" sx={{ mt: 1, mb: 2 }}>
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
    </Box>
  );
}
