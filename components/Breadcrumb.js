import React from "react";
import Link from "next/link";

const Breadcrumb = (props) => {
  return (
    <nav
      aria-label="breadcrumb"
      className={`w-full pb-4 px-4 md:px-1 mx-auto text-gray-100  ${
        props.bg ? props.bg : "bg-slate-50"
      } max-w-[2000px]`}
    >
      <ol className="flex h-8 space-x-2">
        <li className="flex items-center">
          <Link href="/">
            <a
              title="Back to homepage"
              className="text-gray-600 hover:text-theme-green "
            >
              home
            </a>
          </Link>
        </li>
        {props.links &&
          props.links.length > 0 &&
          props.links.map((item, index) => {
            if (index === props.links.length - 1) {
              return (
                <li key={index} className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    fill="currentColor"
                    className="w-2 h-2 mt-1 text-gray-600 transform rotate-90 fill-current"
                  >
                    <path d="M32 30.031h-32l16-28.061z" />
                  </svg>
                  <span
                    rel="noopener noreferrer"
                    className="flex items-center px-1 text-gray-500 capitalize cursor-pointer"
                  >
                    {item.name}
                  </span>
                </li>
              );
            }
            return (
              <li key={index} className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  fill="currentColor"
                  className="w-2 h-2 mt-1 text-gray-600 transform rotate-90 fill-current"
                >
                  <path d="M32 30.031h-32l16-28.061z" />
                </svg>
                <Link href={`/${item.link}`}>
                  <a
                    rel="noopener noreferrer"
                    className="flex items-center px-1 text-gray-800 capitalize cursor-pointer hover:underline"
                  >
                    {item.name} --
                  </a>
                </Link>
              </li>
            );
          })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
