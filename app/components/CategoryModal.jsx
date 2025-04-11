import React, { useState } from "react";
import ItemModal from "../components/ItemModal"

const CategoryModal = ({ isOpen, onClose, onAddCollection }) => {
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");

    const handleChange = (index, value) => {
        const updatedRows = [...rows];
        updatedRows[index] = value;
        setRows(updatedRows);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!rows[0]) {
            setError("Must Enter First Row:");
            return;
        }
        setError("");
        onAddCollection(category, rows.filter(row => row)); // send non-empty rows only
        setCategory("");
        setRows(["", "", "", ""]);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-40">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gray-500 opacity-50 z-40" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="bg-[#cbd0df] opacity-100 z-50 p-6 rounded-3xl w-3xl h-auto relative">
                <h2 className="text-sm font-bold mb-3">Add Collection</h2>
                <form onSubmit={handleSubmit}>
                    <label className="font-semibold">Name of The Category:</label>
                    <input
                        type="text"
                        placeholder="Enter Category name"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-white w-full p-2 rounded-md mt-1 mb-4"
                        required
                    />
                    <p className="text-red-600 font-semibold text-sm my-3">Must Enter First Item:</p>
                    <ItemModal />
                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded"
                        >
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CategoryModal;
