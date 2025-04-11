const Modal = ({ onClose, children }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-40">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gray-500 opacity-50 z-40" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="bg-[#cbd0df] opacity-100 z-50 p-6 rounded-3xl w-3xl h-auto relative">
                {children}
            </div>
        </div>
    );
};

export default Modal;