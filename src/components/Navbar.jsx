import { useState } from "react";
import { Link, useNavigate } from "react-router";
import CartModal from "../pages/shop/CartModal";
import {
  RiSearchLine,
  RiUserReceivedLine,
  RiUserShared2Line,
  RiShoppingCartLine,
  RiMenu2Fill,
} from "react-icons/ri";
import Overlay from "./Overlay";
import { useLogoutUserMutation } from "../redux/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/authSlice";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavDropdown, setIsNavDropdown] = useState(false);
  const [isUserDropdown, setIsUserDropdown] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

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
            label: "Tài khoản",
            path: "/profile",
          },
        ]
      : [
          {
            label: "Tài khoản",
            path: "/profile",
          },
          {
            label: "Đơn hàng",
            path: "/order",
          },
          {
            label: "Lịch sử mua hàng",
            path: "#",
          },
        ];

  return (
    <header className="bg-dark text-white shadow-lg">
      <nav className="max-w-maxi mx-auto flex items-center justify-between bg-dark px-4 py-2">
        <div
          onMouseEnter={() => setIsNavDropdown(true)}
          onMouseLeave={() => setIsNavDropdown(false)}
          className="relative md:hidden"
        >
          <button className=" flex items-center text-xl">
            <RiMenu2Fill />
          </button>

          {isNavDropdown && (
            <div className="absolute top-full left-0 w-50 bg-white shadow-lg rounded-lg py-2 font-semibold">
              <ul>
                <li className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-100">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-100">
                  <Link to="/shop">Sản phẩm mới về</Link>
                </li>
                <li className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-100">
                  <Link to="/contact">Danh mục sản phẩm</Link>
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
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/product">Sản phẩm</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/categories">Danh mục</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/about">Giới thiệu</Link>
            </li>
          </ul>
        </div>

        <div className=" flex items-center justify-end relative  gap-3 sm:gap-7 ">
          <div className="flex items-center hover:text-primary ">
            <button
              title="Tìm kiếm"
              className="text-xl"
              onClick={() => navigate("/search")}
            >
              <RiSearchLine />
            </button>
          </div>

          <div className="flex items-center hover:text-primary ">
            <button
              title="Giỏ hàng"
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
                      <button onClick={handleLogout}>Đăng xuất</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center hover:text-primary ">
              <button
                onClick={() => navigate("/auth/login")}
                className="text-xl"
                title="Đăng nhập"
              >
                <RiUserReceivedLine />
              </button>
            </div>
          )}
        </div>
      </nav>

      <Overlay isOpen={isCartOpen} isForm={false} onClose={handleClose}>
        <CartModal isOpen={isCartOpen} onClose={handleCartToggle} />
      </Overlay>
    </header>
  );
};

export default Navbar;
