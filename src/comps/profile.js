import { UserStore } from "../../store/userStore";

import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardHeader
} from "@mui/material";

export default function Profile() {
  // todo get the user name from the store.
  const userName = UserStore.useState((s) => s.name);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card>
          <CardHeader title={userName}></CardHeader>
          <CardContent>
            <Typography>Your profile page will appear here soon!</Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </Grid>
    // <div style={{ padding: "1rem 0", paddingLeft: "10px" }}>
    //   <h1>Customer Details:</h1>

    //   <div style={{ padding: "1rem 0", paddingLeft: "50px" }}>
    //     Name: {customer.name} | Number: {customer.number} | Type:{" "}
    //     {customer.type}
    //   </div>
    // </div>
  );
}
