import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
// import CategoryPage from "../pages/category/CategoryPage";
// import Search from "../pages/search/Search";
// import ShopPage from "../pages/shop/ShopPage";
// import SingleProduct from "../pages/shop/productDetails/SingleProduct";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import Users from "../pages/admin/Users";
import Products from "../pages/admin/Products";
import Orders from "../pages/admin/Orders";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      // {
      //   path: "/categories/:categoryName",
      //   Component: CategoryPage,
      // },
      // {
      //   path: "/search",
      //   Component: Search,
      // },
      // {
      //   path: "/shop",
      //   Component: ShopPage,
      // },
      // {
      //   path: "/shop/:id",
      //   Component: SingleProduct,
      // },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: Products,
      },
      {
        path: "users",
        Component: Users,
      },
      {
        path: "orders",
        Component: Orders,
      },
    ],
  },
]);

export default router;
