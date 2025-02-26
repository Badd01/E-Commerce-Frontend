import { useState } from "react";
// import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { useRegisterUserMutation } from "../../redux/features/auth/authApi";
import { useNavigate, Link } from "react-router";

const Register = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = {
      email,
      name,
      password,
      phoneNumber,
      address,
    };
    try {
      await registerUser(data).unwrap();
      navigate("/login");
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
          <h4 className="text-2xl text-center font-bold mb-6">Tạo tài khoản</h4>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="email-signup">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="email"
                id="email-signup"
                name="email"
                placeholder="Nhập email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="password-signup">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="password"
                id="password-signup"
                name="password"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="name-signup">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="text"
                id="name-signup"
                name="name"
                placeholder="Nhập tên"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="address-signup">
                Your Address
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="text"
                id="address-signup"
                name="address"
                placeholder="Nhập địa chỉ"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="phoneNumber-signup">
                Phone Number
              </label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                type="tel"
                id="phoneNumber-signup"
                name="phoneNumber"
                placeholder="Nhập số điện thoại"
                required
              />
            </div>

            <div className="flex flex-col gap-2 ">
              {message && <p className="text-primary">{message}</p>}
              <button
                className="bg-yellow-400 mt-2 py-3 px-6 rounded-xl font-semibold text-secondary  hover:scale-105 transition-all duration-500  disabled:opacity-50 disabled:bg-secondary disabled:text-white"
                disabled={isLoading}
              >
                {isLoading ? "Đang xử lý..." : "Đăng ký"}
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm">
              Đã có tài khoản ? {""}
              <button className="text-primary font-semibold hover:underline">
                <Link to="/login">Đăng nhập ngay</Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
