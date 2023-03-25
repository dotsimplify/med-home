import React, { useState } from "react";

const Faq = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="transition-all duration-200 border border-green-200 shadow-lg cursor-pointer rounded-xl -z-30 "
    >
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
      >
        <h3 className="flex text-base font-semibold text-gray-600 capitalize ">
          {data.question}
        </h3>
        <svg
          className={`w-6 h-6 text-gray-400 ${open ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`${
          open ? "" : "hidden"
        } px-4 pb-5 sm:px-6 sm:pb-6 text-gray-500`}
      >
        <h4 className="capitalize">{data.answer}</h4>
      </div>
    </div>
  );
};

export default Faq;
