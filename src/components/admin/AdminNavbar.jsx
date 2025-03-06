import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  RiSearchLine,
  RiUserReceivedLine,
  RiUserShared2Line,
} from "react-icons/ri";
import { useLogoutUserMutation } from "../../redux/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";

const AdminNavbar = () => {
  const [isUserDropdown, setIsUserDropdown] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const dropdownMenu = [
    {
      label: "Dashboard",
      path: "#",
    },
    {
      label: "Tài khoản",
      path: "/profile",
    },
  ];
  return (
    <header className="bg-dark text-white shadow-lg">
      <nav className="mx-auto flex items-center justify-between bg-dark px-4 py-2">
        <div className="text-3xl text-yellow-400 flex items-center font-bold ">
          <Link to="/">
            EComm<span className="text-secondary">.</span>
          </Link>
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
    </header>
  );
};

export default AdminNavbar;
