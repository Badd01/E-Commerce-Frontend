import React from "react";

const Overlay = ({ isOpen, isForm, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`overlay ${isForm ? "center" : "end"} ${isOpen ? "show" : ""}`}
    >
      {children}
    </div>
  );
};

export default Overlay;
