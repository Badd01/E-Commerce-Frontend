import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";

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
      {
        path: "/shop",
        Component: ShopPage,
      },
    ],
  },
]);

export default router;
