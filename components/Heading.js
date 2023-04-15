import React from "react";

const Heading = ({ text }) => {
  return (
    <h1 className="px-4 py-4 text-xl font-extrabold text-gray-700 capitalize md:px-0 md:text-3xl lg:text-4xl">
      {text}
    </h1>
  );
};

export default Heading;
