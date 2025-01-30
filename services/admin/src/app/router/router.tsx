import { createBrowserRouter } from "react-router-dom";
import { AppLazy } from "../index";
import { Suspense } from "react";

import { adminRoutes } from "@packages/shared";
import { LazyUsers } from "../../components";

const mockLoading = <h4>loading...</h4>;

const routes = [
  {
    path: adminRoutes.main,
    element: (
      <Suspense fallback={mockLoading}>
        <AppLazy />
      </Suspense>
    ),
    children: [
      {
        path: adminRoutes.users,
        element: <LazyUsers userId={1} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
