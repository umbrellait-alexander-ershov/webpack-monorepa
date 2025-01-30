import { Link, Outlet } from "react-router-dom";
import { useCountStore } from "./store";

import { adminRoutes } from "@packages/shared";

const App = () => {
  const { count, dec, inc } = useCountStore();

  return (
    <div
      style={{
        width: "100%",
        background: "pink",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Page Admin</h1>

      <ul>
        <li>
          <Link to={adminRoutes.main}>admin</Link>
        </li>
        <li>
          <Link to={adminRoutes.users}>users</Link>
        </li>
      </ul>

      <h3>{count}</h3>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>

      <Outlet />
    </div>
  );
};

export default App;
