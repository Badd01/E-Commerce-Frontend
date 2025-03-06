import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useRegisterUserMutation } from "../../redux/api/authApi";
import { useNavigate, Link } from "react-router";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        email,
        password,
        address,
        name,
        phoneNumber,
      }).unwrap();
      toast.success(response.message);
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    } catch (err) {
      console.error("Error register: ", err);
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
            Create new account
          </h4>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="email-register">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="email"
                id="email-register"
                name="email"
                value={email}
                placeholder="Enter email"
                autoComplete="current-email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="password-register">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="password"
                id="password-signup"
                name="password"
                value={password}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="name-register">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="text"
                id="name-register"
                name="name"
                value={name}
                placeholder="Enter name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="address-register">
                Address
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="text"
                id="address-register"
                name="address"
                value={address}
                placeholder="Enter address"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="phoneNumber-register">
                Phone Number
              </label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="tel"
                id="phoneNumber-register"
                name="phoneNumber"
                value={phoneNumber}
                placeholder="Enter phone number"
                required
              />
            </div>

            <div className="flex flex-col gap-2 ">
              {error && (
                <p className="text-red-500 mb-2">
                  {error.data?.message || "Something went wrong"}
                </p>
              )}
              <button
                className="bg-yellow-400 mt-2 py-3 px-6 rounded-xl font-semibold text-secondary  hover:scale-105 transition-all duration-500  disabled:opacity-50 disabled:bg-secondary disabled:text-white"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm">
              Already have an account ?{" "}
              <button className="text-primary font-semibold hover:underline">
                <Link to="/auth/login">Login</Link>
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

export default Register;
