import React, { useState, useEffect } from "react";
import Link from "next/link";

const AboutSidebar = ({ arr, setActive, active }) => {
  return (
    <div className="sticky border cursor-pointer top-24 h-fit">
      {arr &&
        arr.length > 0 &&
        arr.map((one) => {
          return (
            <div key={one} className="border-b">
              <button
                onClick={() => setActive(one)}
                className={`flex justify-between w-full p-4 text-sm font-medium text-left text-gray-600 bg-white  hover:text-theme-green ${
                  one === active ? "border-l-2 border-l-green-700" : ""
                }`}
              >
                <span>{one}</span>
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default AboutSidebar;
