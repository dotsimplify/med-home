import React from "react";
import Link from "next/link";

const Breadcrumb = (props) => {
  return (
    <nav
      aria-label="breadcrumb"
      className="w-full p-4 mx-auto text-gray-100 md:px-8 bg-slate-50 max-w-[1600px]"
    >
      <ol className="flex h-8 space-x-2">
        <li className="flex items-center">
          <Link href="/">
            <a title="Back to homepage" className="hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 pr-1 text-blue-600"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
          </Link>
        </li>
        {props.links &&
          props.links.length > 0 &&
          props.links.map((item, index) => {
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
                    {item.name}
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
