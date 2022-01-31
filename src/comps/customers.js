// uses the MUI grid which is very compact but no easy or obvious way to customise
// data cells.
import { Outlet, NavLink } from "react-router-dom";
import { getCustomers } from "../../data/customers";
import { Grid, Typography } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

export default function Customers() {
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

  //TOOD: user data grid
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Typography variant="body2" marginLeft={1}>
          Meet the Community!
        </Typography>
        <hr style={{ backgroundColor: "green" }} />
        <Grid item xs={12}>
          <DataGrid
            rows={customers}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
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
