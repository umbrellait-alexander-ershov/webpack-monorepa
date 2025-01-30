import { Link, Outlet } from "react-router-dom";

import { shopRoutes, adminRoutes } from "@packages/shared";

export const App = () => {
  return (
    <div style={{ width: "100%", background: "yellow" }}>
      <h1>home</h1>

      <ul>
        <li>
          <Link to={shopRoutes.main}>shop</Link>
        </li>
        <li>
          <Link to={adminRoutes.main}>admin</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
