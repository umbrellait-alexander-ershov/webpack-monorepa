import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<RouterProvider router={router} />);
