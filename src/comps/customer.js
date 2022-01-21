import { useParams } from "react-router-dom";
import { getCustomer } from "../../data/customers";

export default function Customer() {
  let params = useParams();
  let customer = getCustomer(parseInt(params.number, 10)); // TODO should come from query param

  return (
    <div style={{ padding: "1rem 0", paddingLeft: "10px" }}>
      <h1>Customer Details:</h1>

      <div style={{ padding: "1rem 0", paddingLeft: "50px" }}>
        Name: {customer.name} | Number: {customer.number} | Type:{" "}
        {customer.type}
      </div>
    </div>
  );
}
