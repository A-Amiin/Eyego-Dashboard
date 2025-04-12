import Modal from "../components/Modal";

const ItemModal = ({ children }) => {
  const rows = ["Name", "Price", "Status", "Description"];

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
      {children}
      <h1 className="text-2xl text-[#444444] font-bold m-2 ">Add new item</h1>
      {rows.map((row, i) => (
        <label key={i} className="text-[#444444] font-bold flex flex-col ">
          <span className="ml-1 font-medium text-[#656565]"> {row}</span>
          <input
            key={i}
            placeholder={row}
            type="text"
            className="bg-white placeholder:text-sm  w-full p-2 rounded-md border pl-4  border-gray-300 focus:outline-none focus:border-[#5FB562] transition"
          />
        </label>
      ))}
      <button
        type="submit"
        className="bg-[#5FB562] hover:bg-[#4a884c] text-white font-bold py-2 px-6 rounded w-full transition "
      >
        ADD
      </button>
    </form>
  );
};

export default ItemModal;
