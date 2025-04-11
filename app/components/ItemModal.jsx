import Module from "../components/Modal";

const ItemModal = ({ isOpen }) => {
    const rows = ["Name", "Price", "Status", "Description"];

    if (!isOpen) return null;
    return (
        <Module>
            <h1>Add new item</h1>
            {rows.map((row, i) => (
                <input
                    key={i}
                    placeholder={`Enter The ${row}`}
                    type="text"
                    onChange={(e) => handleChange(i, e.target.value)}
                    className="bg-white w-full p-2 rounded-md mb-2"
                />
            ))}
            <div className="flex justify-center mt-4">
                <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded"
                >
                    ADD
                </button>
            </div>
        </Module>
    )
}

export default ItemModal