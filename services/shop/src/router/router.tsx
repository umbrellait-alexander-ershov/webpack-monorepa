import { createBrowserRouter } from "react-router-dom";
import { AppLazy } from "../app";
import { PhoneLazy } from "../components";
import { Suspense } from "react";

import { shopRoutes } from "@packages/shared";

const mockLoading = <h4>loading...</h4>;

const routes = [
  {
    path: shopRoutes.main,
    element: (
      <Suspense fallback={mockLoading}>
        <AppLazy />
      </Suspense>
    ),
    children: [
      {
        path: shopRoutes.phone,
        element: (
          <Suspense fallback={mockLoading}>
            <PhoneLazy />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
