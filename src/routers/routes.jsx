import { createBrowserRouter } from "react-router";
import App from "../App";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        element: <div>Hallo</div>,
      },
    ],
  },
]);

export default router;
