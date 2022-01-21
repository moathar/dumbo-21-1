import { Link } from "react-router-dom";
export default function BadLink() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>This page doesn't exist or has been removed. Sorry for trouble</h1>
      <hr />
      <Link to="/home">Let's go back Back Home</Link>
    </main>
  );
}
