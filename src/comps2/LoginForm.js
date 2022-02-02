import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserStore } from "../../store/userStore";
import { Button, Typography } from "antd";

export default function LoginForm() {
  let navigate = useNavigate();
  let location = useLocation();

  // work out the return url if any and take the user there after successful login
  // the from prop should be set up by our auth guard.
  let from = location.state?.from?.pathname || "/home";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    // TOOD: make the login a bit more funky, for now just accept anything

    UserStore.update((s) => {
      s.name = data.get("email");
      s.email = data.get("email");
      s.id = "123356";
    });

    navigate(from);
  };

  return (
    <div>
      <Typography>Sign in</Typography>

      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </div>
  );
}
