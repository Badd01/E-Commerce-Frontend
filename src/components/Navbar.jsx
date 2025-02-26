import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClose = (e) => {
    if (isCartOpen) {
      handleCartToggle(e);
    }
  };

  // Dropdown after login
  const [isDropdown, setIsDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdown(!isDropdown);
  };
  const { user } = useSelector((state) => state.auth);
  const dropdownMenu =
    user?.role === "Admin"
      ? [
          {
            label: "Quản lý",
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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();
  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <nav>
        <div className="flex items-center text-2xl md:hidden ">
          <button>
            <RiMenu2Fill />
          </button>
        </div>

        <div className="text-3xl text-yellow-400 flex items-center font-bold font-serif">
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

        <div className="items-center flex justify-end relative  gap-4 md:gap-10 ">
          <span className="flex items-center hover:text-primary ">
            <button
              title="Tìm kiếm"
              className="text-xl"
              onClick={() => navigate("/search")}
            >
              <RiSearchLine />
            </button>
          </span>

          <span className="flex items-center hover:text-primary ">
            <button
              title="Giỏ hàng"
              className="flex text-xl"
              onClick={handleCartToggle}
            >
              <RiShoppingCartLine />
              <sup className="text-sm px-1 text-white rounded-full bg-primary text-center">
                {products.length}
              </sup>
            </button>
          </span>

          <span className="flex items-center hover:text-primary ">
            {user ? (
              <button>
                <span onClick={handleDropdownToggle}>
                  <RiUserShared2Line />
                </span>
                {isDropdown && (
                  <div className="top-10 right-0 bg-white border border-black rounded-md z-20 absolute">
                    <ul
                      className="px-3 py-2"
                      onMouseLeave={() => setIsDropdown(false)}
                    >
                      {dropdownMenu.map((item, index) => (
                        <li key={index} className="relative p-1.5 text-black ">
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}

                      <li className="p-1.5 text-black">
                        <Link onClick={handleLogout}>Đăng xuất</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </button>
            ) : (
              <button className="text-xl" title="Đăng nhập">
                <Link to="/login">
                  <RiUserReceivedLine />
                </Link>
              </button>
            )}
          </span>
        </div>
      </nav>

      <Overlay isOpen={isCartOpen} isForm={false} onClose={handleClose}>
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      </Overlay>
    </header>
  );
};

export default Navbar;
