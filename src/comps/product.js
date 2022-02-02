import { useParams } from "react-router-dom";
import { getProduct } from "../../data/products";

export default function Product() {
  let params = useParams();
  let prod = getProduct(params.code);

  return (
    <div style={{ padding: "1rem 0", paddingLeft: "10px" }}>
      <h1>{prod.name} Details:</h1>

      <div style={{ padding: "1rem 0", paddingLeft: "50px" }}>
        Price: {prod.price} | Category: {prod.category} | Quantity: tbd
      </div>
    </div>
  );
}
