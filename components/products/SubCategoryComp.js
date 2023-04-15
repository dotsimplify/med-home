import React from "react";
import Link from "next/link";

const SubCategoryComp = ({ category }) => {
  return (
    <Link href={`/catalog/sub/${encodeURI(category)}`}>
      <div className="p-6 bg-white border shadow-none cursor-pointer hover:shadow-2xl">
        <h1 className="text-base font-semibold capitalize text-slate-500 hover:text-theme-green">
          {category}
        </h1>
      </div>
    </Link>
  );
};

export default SubCategoryComp;
