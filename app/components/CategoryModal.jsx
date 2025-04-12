import { useState } from "react";
import Modal from "./Modal";
import ItemModal from "./ItemModal";

const CategoryModal = () => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rows[0]) {
      setError("Must Enter First Row:");
      return;
    }
    setError("");
    onAddCollection(
      category,
      rows.filter((row) => row)
    ); // send non-empty rows only
    setCategory("");
    setRows(["", "", "", ""]);
    onClose();
  };

  return (
    <div>
      <h1 className="text-2xl text-[#444444] font-bold m-2 ">
        Add new Category
      </h1>

      <ItemModal>
        <label className="text-[#444444] font-bold flex flex-col">
          <span className="ml-1 font-medium text-[#656565]">Category Name</span>
          <input
            placeholder="Category Name"
            type="text"
            className="bg-white placeholder:text-sm  w-full p-2 rounded-md border pl-4  border-gray-300 focus:outline-none focus:border-[#5FB562] transition"
          />
        </label>
      </ItemModal>
    </div>
  );
};

export default CategoryModal;
