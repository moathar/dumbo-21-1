import { Outlet, NavLink } from "react-router-dom";
import { getCustomers } from "../../data/customers";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Customers() {
  let customers = getCustomers();

  return (
    <Grid container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
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
                    to={`/customers/${row.number}`}
                    key={row.number}
                  >
                    {row.name}
                  </NavLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Outlet />
    </Grid>

    // <div style={{ padding: "1rem 0", paddingLeft: "10px" }}>
    //   <h1>Customers</h1>
    //   <div style={{ padding: "1rem 0", paddingLeft: "50px" }}>
    //     {customers.map((cust) => (
    //       <NavLink
    //         style={({ isActive }) => {
    //           return {
    //             display: "block",
    //             margin: "1rem 0",
    //             color: isActive ? "green" : ""
    //           };
    //         }}
    //         to={`/home/customers/${cust.number}`}
    //         key={cust.number}
    //       >
    //         {cust.name}
    //       </NavLink>
    //     ))}
    //   </div>
    //   <Outlet />
    // </div>
  );
}
