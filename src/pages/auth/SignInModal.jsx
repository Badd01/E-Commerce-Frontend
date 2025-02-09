import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import SignUpModal from "./SignUpModal";
import Overlay from "../../components/Overlay";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";

const SignInModal = ({ isOpen, onClose }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleRegisterToggle = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      handleRegisterToggle(e);
    }
  };
  return (
    <>
      <div className={`form-modal ${isOpen ? "slide-in" : "slide-out"}`}>
        <div className="p-4 m-4">
          <div className="flex justify-between items-center mb-4 ">
            <h4 className="text-xl font-semibold">Login Your Account</h4>
            <button
              onClick={onClose}
              className="hover:scale-115 transition-all duration-300  bg-black hover:bg-red-500 rounded-sm p-1 text-white"
            >
              <RiCloseFill />
            </button>
          </div>

          {/* Form log in*/}
          <div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className=" rounded-sm border-1"
                type="text"
                id="email"
                name="email"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold" htmlFor="">
                Password
              </label>
              <input
                className="rounded-sm border-1"
                type="password"
                id="password"
                name="password"
              />
              <p className="text-gray-500 text-sm mt-2">Forgot password?</p>
            </div>
            <div className="flex flex-col mb-4 gap-2">
              <button className="btn">Login</button>
              <p className="text-center text-sm">
                Don't have an account?{" "}
                <button
                  onClick={handleRegisterToggle}
                  className="text-primary font-semibold"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>

          <hr className="w-30 mx-auto my-2" />
          {/* Socials sign in */}
          <div className="text-center">
            <p>Or sign in with</p>
            <button className="text-4xl text-blue-600 mr-4 hover:text-blue-900 transition-all duration-500">
              <AiFillFacebook />
            </button>
            <button className="text-4xl text-red-600 hover:text-red-900 transition-all duration-500">
              <AiFillGoogleCircle />
            </button>
          </div>
        </div>
      </div>

      <Overlay isOpen={isRegisterOpen} isForm={true} onClose={handleClose}>
        <SignUpModal isOpen={isRegisterOpen} onClose={handleRegisterToggle} />
      </Overlay>
    </>
  );
};

export default SignInModal;
