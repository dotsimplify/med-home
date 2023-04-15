import React from "react";

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ol className="flex justify-end gap-1 text-xs font-medium text-white">
      {pageNumbers.map((number) => {
        return (
          <li
            key={number}
            onClick={() => props.paginate(number)}
            className={`block  px-3  leading-8 text-xs text-center border border-gray-100  cursor-pointer ${
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
