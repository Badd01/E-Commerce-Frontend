import AdminSidebar from "../components/admin/AdminSidebar";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminFooter from "../components/admin/AdminFooter";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { useRefreshTokenMutation } from "../redux/api/authApi";
import { useEffect } from "react";
import { logout, setCredentials } from "../redux/features/authSlice";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [refreshToken] = useRefreshTokenMutation();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const handleRefresh = async () => {
      try {
        const refreshResult = await refreshToken().unwrap();
        console.log(refreshResult);
        if (refreshResult?.data?.token) {
          dispatch(setCredentials({ ...refreshResult.data, user }));
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
  }, [refreshToken, dispatch, navigate, user]);

  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <Outlet />
      </div>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
