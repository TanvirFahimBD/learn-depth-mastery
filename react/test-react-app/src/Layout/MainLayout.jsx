// import { Outlet, Link } from "react-router-dom";

import { Link, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/login">Login</Link>
      </nav>

      <hr />

      {/* Page content will render here */}
      <Outlet />
    </div>
  );
};

export default MainLayout;