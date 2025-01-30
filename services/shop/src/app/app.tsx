import styles from "./app.module.css";

import { Link, Outlet } from "react-router-dom";

import { shopRoutes } from "@packages/shared";

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "aqua",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Page shop</h1>

      <ul className={styles.listLink}>
        <li>
          <Link to={shopRoutes.main} className={styles.itemLink}>
            shop
          </Link>
        </li>
        <li>
          <Link to={shopRoutes.phone} className={styles.itemLink}>
            phone
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default App;
