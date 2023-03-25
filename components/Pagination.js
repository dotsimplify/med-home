import React from "react";

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ol className="flex justify-center gap-1 text-xs font-medium text-white">
      {pageNumbers.map((number) => {
        return (
          <li
            key={number}
            onClick={() => props.paginate(number)}
            className={`block p-1 px-3.5 rounded-full leading-8 text-xl text-center border border-gray-100  cursor-pointer ${
              props.currentPage === number ? "bg-theme-green text-white" : ""
            }`}
          >
            {number}
          </li>
        );
      })}
    </ol>
  );
};

export default Pagination;
