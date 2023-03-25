import React from "react";

const Heading = () => {
  return (
    <div className="relative px-4 lg:px-8 ">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Articles about
        </span>{" "}
        Web Development.
      </h1>
      <p className="text-lg font-normal lg:text-xl dark:text-gray-400 ">
        Here at Dot Simplify , I publish articles related to web development ,
        AI & Search engine optimization.
      </p>
    </div>
  );
};

export default Heading;
