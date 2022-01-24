// a simple form which is styled through bulma css lib, it uses a backing custom
// hook to deal with storing values. The call back is provided by the client component.

import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { UserStore } from "../../store/userStore";

import "bulma/css/bulma.css";

import useLoginForm from "./useLoginForm";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginForm = (prop) => {
  const { values, handleChange, handleSubmit } = useLoginForm(doLogin);

  let navigate = useNavigate();
  let location = useLocation();

  // work out the return url if any and take the user there after successful login
  // the from prop should be set up by our auth guard.
  let from = location.state?.from?.pathname || "/home";

  console.log("login form recieved return url", from);

  function doLogin() {
    UserStore.update((s) => {
      s.name = values.email;
      s.email = values.email;
      s.id = "123356";
    });

    navigate(from);
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <div className="control">
                  <TextField
                    fullWidth
                    label="Email"
                    variant="standard"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <TextField
                    fullWidth
                    label="Password"
                    variant="standard"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    required
                  />
                </div>
              </div>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
