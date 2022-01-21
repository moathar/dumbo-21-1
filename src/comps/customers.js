import { Outlet, NavLink } from "react-router-dom";
import { getCustomers } from "../../data/customers";

export default function Customers() {
  let customers = getCustomers();

  return (
    <div style={{ padding: "1rem 0", paddingLeft: "10px" }}>
      <h1>Customers</h1>
      <div style={{ padding: "1rem 0", paddingLeft: "50px" }}>
        {customers.map((cust) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "green" : ""
              };
            }}
            to={`/home/customers/${cust.number}`}
            key={cust.number}
          >
            {cust.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
