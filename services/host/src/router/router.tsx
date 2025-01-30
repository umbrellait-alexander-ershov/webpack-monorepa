import { createBrowserRouter } from "react-router-dom";
import { App } from "../app/app";

import { mainRoute } from "@packages/shared";

//@ts-ignore
import shopRouter from "shop/router";
//@ts-ignore
import adminRouter from "admin/router";

import { Redirect } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Redirect pathTo={mainRoute} />,
  },
  {
    path: mainRoute,
    element: <App />,
    children: [...shopRouter, ...adminRouter],
  },
  {
    path: "*",
    element: <h1 style={{ margin: "200px auto" }}>Page not found</h1>,
  },
]);
