import { Link } from "react-router";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;