import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { useNavigate, Link } from "react-router";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email,
        password,
      }).unwrap();
      dispatch(setCredentials(response));
      toast.success(response.message);
      setTimeout(() => {
        navigate("/admin/");
      }, 2000);
    } catch (err) {
      console.error("Error login: ", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md mx-auto bg-dark text-white shadow-lg rounded-2xl p-6">
        <div className=" text-3xl text-yellow-400 font-bold  mb-8">
          <Link to="/">
            EComm<span className="text-secondary">.</span>
          </Link>
        </div>
        <div>
          <h4 className="text-2xl text-center font-bold mb-6">
            Login your account
          </h4>
          {/* Form log in */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="email-login">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="email"
                id="email-login"
                value={email}
                name="email"
                placeholder="Enter your email"
                required
                autoComplete="current-email"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="password-login">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="password"
                id="password-login"
                value={password}
                name="password"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
              <p className="text-right text-gray-400 text-sm mt-2 cursor-pointer hover:text-primary">
                Forgot password ?
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {error && (
                <p className="text-red-500 mb-2">
                  {error.data?.message || "Something went wrong"}
                </p>
              )}

              <button
                className="bg-yellow-400 text-xl py-3 px-6 rounded-xl font-semibold text-secondary  hover:scale-105 transition-all duration-500  disabled:opacity-50 disabled:bg-secondary disabled:text-white"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm">
              Don&apos;t have an account ?{" "}
              <button className="text-primary font-semibold hover:underline">
                <Link to="/auth/register">Register</Link>
              </button>
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <hr />
          <p className="my-4">Or sign in with</p>
          <button className="text-4xl text-red-600 hover:text-red-900 transition-all duration-500">
            <AiFillGoogleCircle />
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
};

export default Login;
