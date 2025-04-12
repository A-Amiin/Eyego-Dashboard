const Modal = ({ children, setIsModalOpen }) => {
  function onClose() {
    setIsModalOpen(null);
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 ">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-gray-500 opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white opacity-100 z-50 p-8 rounded-xl  relative shadow-2xl max-w-[800px] w-full h-auto flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
