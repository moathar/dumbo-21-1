import { useParams } from "react-router-dom";
import { getCustomer } from "../../data/customers";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardHeader
} from "@mui/material";

export default function Customer() {
  let params = useParams();
  let customer = getCustomer(parseInt(params.id, 10));

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card>
          <CardHeader title={customer.name}></CardHeader>
          <CardContent>
            <Typography>
              is a <span style={{ color: "green" }}>{customer.type}</span>{" "}
              visitor at our store and described as: <br />
              {customer.desc}
            </Typography>
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
