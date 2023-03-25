import React from "react";

const Chips = ({ categoryName, setCategory }) => {
  return (
    <span
      onClick={setCategory}
      className="px-4 py-2 mr-2 text-sm font-semibold capitalize border rounded-full shadow-md cursor-pointer text-theme-green border-theme-green hover:bg-theme-green hover:text-gray-100 w-max"
    >
      {categoryName}
    </span>
  );
};

export default Chips;
