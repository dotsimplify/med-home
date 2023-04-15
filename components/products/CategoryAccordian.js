import React, { useState, useEffect } from "react";
import Link from "next/link";

const MainAccordian = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(true);

  const toggleActiveIndex = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="border cursor-pointer h-fit">
      <button
        className="flex justify-between w-full p-4 text-sm font-medium text-left text-gray-600 bg-white hover:text-theme-green "
        onClick={() => toggleActiveIndex(!activeIndex)}
      >
        <span>КАТАЛОГ</span>
        <span>
          {activeIndex ? (
            <svg
              className="w-4 h-4 text-gray-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-gray-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
              />
            </svg>
          )}
        </span>
      </button>
      <div className={`${activeIndex ? "block" : "hidden"} text-sm `}>
        {children}
      </div>
    </div>
  );
};

const SubAccordian = ({ items, indexedArray }) => {
  const [activeIndexes, setActiveIndexes] = useState(indexedArray || []);

  const toggleAccordion = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="container mx-auto border-b border-l border-r">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button className="flex justify-between w-full p-4 text-sm text-left bg-white ">
            <Link href={`/catalog/category/${encodeURI(item.categoryName)}`}>
              <span className="font-normal text-gray-500 capitalize hover:text-theme-green ">
                {item.categoryName}
              </span>
            </Link>
            <span className="p-0.5 bg-transparent hover:bg-theme-green group">
              {activeIndexes.includes(index) ? (
                <svg
                  onClick={() => toggleAccordion(index)}
                  className="w-4 h-4 text-gray-500 fill-current group-hover:text-gray-50"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
                </svg>
              ) : (
                <svg
                  onClick={() => toggleAccordion(index)}
                  className="w-4 h-4 text-gray-500 fill-current group-hover:text-gray-50"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                  />
                </svg>
              )}
            </span>
          </button>
          {item.subCategoryList && item.subCategoryList.length > 0 && (
            <div
              className={`${
                activeIndexes.includes(index) ? "block" : "hidden"
              } px-4 py-2  bg-white capitalize  `}
            >
              {item.subCategoryList.map((one) => (
                <Link key={one} href={`/catalog/sub/${encodeURI(one)}`}>
                  <h3 className="py-2 text-sm text-gray-600 hover:text-theme-green">
                    {one}
                  </h3>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CategoryAccordian = ({ items, indexedArray }) => {
  return (
    <MainAccordian>
      <SubAccordian items={items} indexedArray={indexedArray} />
    </MainAccordian>
  );
};

export default CategoryAccordian;
