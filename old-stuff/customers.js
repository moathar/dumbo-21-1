// uses the basic MUI table which is limited in usage.
import { Outlet, NavLink } from "react-router-dom";
import { getCustomers } from "../../data/customers";
import { Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Customers() {
  let customers = getCustomers();

  //TOOD: user data grid
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Typography variant="body2" marginLeft={1}>
          {" "}
          Meet the Community!
        </Typography>
        <hr style={{ backgroundColor: "green" }} />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell>Name</TableCell>
                <TableCell>Type</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          display: "block",
                          margin: "1rem 0",
                          color: isActive ? "green" : ""
                        };
                      }}
                      to={`/home/customers/${row.id}`}
                      key={row.id}
                    >
                      {row.name}
                    </NavLink>
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={6} marginTop={4}>
        <Typography></Typography>
        <Outlet />
      </Grid>
    </Grid>
  );
}
