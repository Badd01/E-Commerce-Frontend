import { useState } from "react";
// import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { useNavigate, Link } from "react-router";
import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      const response = await loginUser(data).unwrap();
      const { user } = response;
      dispatch(setUser({ user }));
      navigate("/");
    } catch (error) {
      setMessage(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md mx-auto bg-gray-900 text-white shadow-lg rounded-2xl py-8 px-4">
        <div className=" text-3xl text-yellow-400 font-bold font-serif mb-8">
          <Link to="/">
            EComm<span className="text-secondary">.</span>
          </Link>
        </div>
        <div>
          <h4 className="text-2xl text-center font-bold mb-6">Đăng nhập</h4>
          {/* Form log in */}
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="email-signin">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="email"
                id="email-signin"
                name="email"
                placeholder="Nhập email của bạn"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="password-signin">
                Mật khẩu
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="password"
                id="password-signin"
                name="password"
                placeholder="Nhập mật khẩu"
                required
              />
              <p className="text-right text-gray-400 text-sm mt-2 cursor-pointer hover:text-primary">
                Quên mật khẩu?
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {message && <p className="text-primary">{message}</p>}
              <button
                className="bg-yellow-400 py-3 px-6 rounded-xl font-semibold text-secondary  hover:scale-105 transition-all duration-500  disabled:opacity-50 disabled:bg-secondary disabled:text-white"
                disabled={isLoading}
              >
                {isLoading ? "Đang xử lý..." : "Đăng nhập"}
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm">
              Không có tài khoản?{" "}
              <button className="text-primary font-semibold hover:underline">
                <Link to="/register">Đăng ký ngay</Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
