import React from "react";

const Overlay = ({ isOpen, isForm, children }) => {
  return (
    <div
      className={`overlay ${isForm ? "center" : "end"} ${isOpen ? "show" : ""}`}
    >
      {children}
    </div>
  );
};

export default Overlay;
