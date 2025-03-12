const Overlay = ({ isOpen, onClose, isSetting, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex items-center z-30 transition-all duration-500  ease-in-out invisible
        ${isOpen ? "opacity-100 visible bg-black/50" : "opacity-0 "}
        ${isSetting ? "justify-center" : "justify-end"}`}
    >
      {children}
    </div>
  );
};

export default Overlay;
