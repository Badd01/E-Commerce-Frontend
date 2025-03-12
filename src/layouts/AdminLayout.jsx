import AdminSidebar from "../components/admin/AdminSidebar";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminFooter from "../components/admin/AdminFooter";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { useRefreshTokenMutation } from "../redux/api/authApi";
import { useEffect } from "react";
import { logout, tokenReceived } from "../redux/features/authSlice";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [refreshToken] = useRefreshTokenMutation();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleRefresh = async () => {
      if (token) return;
      try {
        const refreshResult = await refreshToken().unwrap();
        if (refreshResult) {
          dispatch(tokenReceived(refreshResult));
        } else {
          dispatch(logout());
          navigate("/auth/login");
        }
      } catch (err) {
        console.error("Error refresh token:", err);
        dispatch(logout());
        navigate("/auth/login");
      }
    };

    handleRefresh();
  }, [refreshToken, navigate, dispatch, token]);

  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      <div className="flex flex-grow">
        <AdminSidebar />
        <Outlet />
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
