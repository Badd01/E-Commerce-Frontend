const Overlay = ({ isOpen, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex items-center justify-end opacity-0 z-30 transision-all duration-500 invisible  ${
        isOpen ? " visible opacity-100 bg-black/50" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Overlay;
