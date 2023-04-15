import React from "react";
import Link from "next/link";

const CategoryComp = ({ category }) => {
  return (
    <Link href={`/catalog/category/${encodeURI(category.categoryName)}`}>
      <div className="p-6 bg-white border shadow-none cursor-pointer hover:shadow-2xl">
        <h1 className="text-base font-bold capitalize text-slate-800 hover:text-theme-green">
          {category.categoryName}
        </h1>
        <p className="text-sm text-gray-400">
          {category.relatedProducts} товаров
        </p>
      </div>
    </Link>
  );
};

export default CategoryComp;
