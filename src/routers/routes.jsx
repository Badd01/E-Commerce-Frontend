import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/categories/:categoryName",
        Component: CategoryPage,
      },
      {
        path: "/search",
        Component: Search,
      },
    ],
  },
]);

export default router;
