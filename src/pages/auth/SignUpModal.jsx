import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <div className={`form-modal ${isOpen ? "slide-in" : "slide-out"}`}>
      <div className="p-4 m-4">
        <div className="flex justify-between items-center mb-4 ">
          <h4 className="text-xl font-semibold">Create Your Account</h4>
          <button
            onClick={onClose}
            className="hover:scale-115 transition-all duration-300  bg-black hover:bg-red-500 rounded-sm p-1 text-white"
          >
            <RiCloseFill />
          </button>
        </div>
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
          <div className="flex flex-col mb-2">
            <label className="font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className=" rounded-sm border-1"
              type="text"
              id="name"
              name="name"
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
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <button className="btn">Register</button>
          </div>

          <hr className="w-30 mx-auto my-2" />
          {/* Socials sign up */}
          <div className="text-center">
            <p>Or sign up with</p>
            <button className="text-4xl text-blue-600 mr-4 hover:text-blue-900 transition-all duration-500">
              <AiFillFacebook />
            </button>
            <button className="text-4xl text-red-600 hover:text-red-900 transition-all duration-500">
              <AiFillGoogleCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
