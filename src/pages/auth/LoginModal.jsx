import React from "react";
import { RiCloseFill } from "react-icons/ri";
const LoginModal = ({ isOpen, onClose }) => {
  return (
    <div className={`form-modal ${isOpen ? "slide-in" : "slide-out"}`}>
      <div className="p-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Please Login</h4>
          <button
            onClick={() => onClose()}
            className="hover:scale-115 transition-all duration-300  bg-black hover:bg-red-500 rounded-sm p-1 text-white"
          >
            <RiCloseFill />
          </button>
        </div>
        <div className="">
          <label htmlFor="">
            ha
            <input type="text" placeholder="aa" />
          </label>
          <label htmlFor="">
            ha
            <input type="text" placeholder="aa" />
          </label>
          <label htmlFor="">
            ha
            <input type="text" placeholder="aa" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
