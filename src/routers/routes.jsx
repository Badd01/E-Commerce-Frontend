import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";
import SingleProduct from "../pages/shop/productDetails/SingleProduct";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

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
      {
        path: "/shop/:id",
        Component: SingleProduct,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);

export default router;
