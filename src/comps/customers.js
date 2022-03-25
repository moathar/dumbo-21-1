// customers list with the search fields
import { Outlet, NavLink } from "react-router-dom";
import * as React from "react";
import { getCustomers } from "../../data/customers";
import {
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Card,
  Box,
  TextField,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  InputAdornment
} from "@mui/material";

import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

import { DataGrid } from "@mui/x-data-grid";

export default function Customers() {
  const [showSearch, setShowSearch] = React.useState(false);
  let customers = getCustomers();

  const columns = [
    { field: "id", headerName: "", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 130,
      renderCell: (params) => (
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "green" : ""
            };
          }}
          to={`/home/customers/${params.id}`}
        >
          {params.value}
        </NavLink>
      )
    },
    { field: "type", headerName: "Status", width: 130 }
  ];

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        {showSearch ? (
          <Box
            component="form"
            // onSubmit={handleSubmit}
            //noValidate // put back if needed.
            sx={{ mt: 1 }}
          >
            <Typography variant="h6">Scan Code</Typography>

            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <QrCodeScannerIcon fontSize="large" />
                  </InputAdornment>
                )
              }}
              variant="standard"
              margin="normal"
              fullWidth
              id="name"
              // label="Scan Code"
              name="code"
              autoFocus
            />

            <Typography variant="h6" mt={4}>
              Search
            </Typography>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              name="address"
              label="Address"
              id="status"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
        ) : (
          <p />
        )}

        <Typography variant="body2" marginLeft={1}>
          Members
        </Typography>
        <hr style={{ backgroundColor: "green" }} />
        <Grid item xs={12}>
          <DataGrid
            rows={customers}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            // checkboxSelection
            autoHeight
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} marginTop={4}>
        <Typography></Typography>
        <Outlet />
      </Grid>
    </Grid>
  );
}
