import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import CartModal from "../pages/shop/CartModal";
import {
  RiSearchLine,
  RiUserReceivedLine,
  RiUserShared2Line,
  RiShoppingCartLine,
  RiMenu2Fill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Overlay from "./Overlay";
import { useLogoutUserMutation } from "../redux/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/authSlice";
import { shopApi } from "../redux/api/shopApi";
import { setShopData } from "../redux/features/shopSlice";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavDropdown, setIsNavDropdown] = useState(false);
  const [isUserDropdown, setIsUserDropdown] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { data } = shopApi.useGetAllShopQuery();

  const { shopData } = useSelector((state) => state.shop);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  useEffect(() => {
    if (data) {
      dispatch(setShopData(data));
      sessionStorage.setItem("shopData", JSON.stringify(data));
    }
  }, [data, dispatch]);

  const handleClose = (e) => {
    if (e.target === e.currentTarget) setIsCartOpen(false);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const dropdownMenu =
    user?.role === "Admin"
      ? [
          {
            label: "Dashboard",
            path: "#",
          },
          {
            label: "Profile",
            path: "/profile",
          },
        ]
      : [
          {
            label: "Profile",
            path: "/profile",
          },
          {
            label: "Orders",
            path: "/order",
          },
          {
            label: "History",
            path: "#",
          },
        ];

  const dropdownProducts = [
    {
      label: "New Products",
      path: "/shop/new",
    },
    { label: "2025 Collection", path: "/shop/2025" },
    { label: "2024 Collection", path: "/shop/2024" },
  ];

  const dropdownCategories = shopData?.categories.map((category) => ({
    label: category.name,
    path: `/shop/categories/${category.id}`,
  }));

  if (!shopData) return <div className="text-xl font-semibold">Loading...</div>;

  return (
    <header className="bg-dark text-white shadow-lg">
      <nav className="max-w-maxi mx-auto flex items-center justify-between bg-dark px-4 py-2">
        <div
          onMouseEnter={() => setIsNavDropdown(true)}
          onMouseLeave={() => {
            setIsNavDropdown(false);
            setIsProductsOpen(false);
            setIsCategoriesOpen(false);
          }}
          className="relative md:hidden"
        >
          <button className=" flex items-center text-xl">
            <RiMenu2Fill />
          </button>

          {isNavDropdown && (
            <div className="absolute top-full left-0 w-50 bg-white shadow-lg rounded-lg py-2 font-semibold">
              <ul>
                <li className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-100">
                  <Link to="/">Home</Link>
                </li>
                <li className="relative block px-4 py-2 text-black ">
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center justify-between w-full hover:text-primary"
                  >
                    <span>Products</span>
                    <RiArrowDownSLine
                      className={`transition-transform duration-200 ${
                        isProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isProductsOpen && (
                    <ul className="bg-white rounded-lg py-2 mt-2">
                      {dropdownProducts.map((item, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:text-primary hover:bg-gray-100"
                        >
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="relative block px-4 py-2 text-black">
                  <button
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className="flex items-center justify-between w-full hover:text-primary"
                  >
                    <span>Categories</span>
                    <RiArrowDownSLine
                      className={`transition-transform duration-200 ${
                        isCategoriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isCategoriesOpen && (
                    <ul className="bg-white rounded-lg py-2 mt-2">
                      {dropdownCategories.map((item, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:text-primary hover:bg-gray-100"
                        >
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="text-3xl text-yellow-400 flex items-center font-bold ">
          <Link to="/">
            EComm<span className="text-secondary">.</span>
          </Link>
        </div>

        <div className="hidden md:flex">
          <ul className="items-center flex gap-4 font-semibold ">
            <li className="hover:text-primary">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-primary relative group">
              <span>Products</span>
              <div className="absolute left-0 top-full hidden group-hover:block">
                <ul className="w-48 text-dark bg-white shadow-lg rounded-lg py-2">
                  {dropdownProducts.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:text-primary hover:bg-gray-100"
                    >
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="hover:text-primary relative group">
              <span>Categories</span>
              <div className="absolute left-0 top-full hidden group-hover:block">
                <ul className="w-48 text-dark bg-white shadow-lg rounded-lg py-2">
                  {dropdownCategories.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:text-primary hover:bg-gray-100"
                    >
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className=" flex items-center justify-end relative  gap-3 sm:gap-7 ">
          <div className="flex items-center hover:text-primary ">
            <button
              title="Search"
              className="text-xl"
              onClick={() => navigate("/search")}
            >
              <RiSearchLine />
            </button>
          </div>

          <div className="flex items-center hover:text-primary ">
            <button
              title="Cart"
              className="flex text-xl"
              onClick={handleCartToggle}
            >
              <RiShoppingCartLine />
              <sup className="flex items-center justify-center text-sm px-1 text-white rounded-full bg-primary text-center">
                0{/* {products.length} */}
              </sup>
            </button>
          </div>
          {user ? (
            <div
              onMouseEnter={() => setIsUserDropdown(true)}
              onMouseLeave={() => setIsUserDropdown(false)}
              className="relative "
            >
              <button className="text-xl  flex items-center hover:text-primary">
                <RiUserShared2Line />
                <span className="text-sm ml-1">Hi, {user.name}</span>
              </button>

              {isUserDropdown && (
                <div className="absolute top-full right-0 w-50 bg-white shadow-lg rounded-lg py-2 font-semibold">
                  <ul>
                    {dropdownMenu.map((item, index) => (
                      <li
                        key={index}
                        className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-100"
                      >
                        <Link to={item.path}>{item.label}</Link>
                      </li>
                    ))}

                    <li className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-100">
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div>
              <button
                onClick={() => navigate("/auth/login")}
                className="text-xl flex items-center gap-2 hover:scale-105 transition-all duration-300 bg-primary rounded-lg px-2 py-1"
                title="Login"
              >
                <span>
                  <RiUserReceivedLine />
                </span>
                <span>Login</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* cart modal- handleClose default receive event <=> handleClose(e) */}
      <Overlay isOpen={isCartOpen} isAdd={false} onClose={handleClose}>
        <CartModal isOpen={isCartOpen} onClose={handleCartToggle} />
      </Overlay>
    </header>
  );
};

export default Navbar;
