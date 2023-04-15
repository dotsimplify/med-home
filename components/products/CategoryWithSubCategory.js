import React from "react";
import Link from "next/link";

const CategoryWithSubCategory = ({ category }) => {
  return (
    <div className="p-6 bg-white border shadow-none cursor-pointer hover:shadow-2xl group">
      <Link href={`/catalog/category/${encodeURI(category.categoryName)}`}>
        <h1 className="text-base font-bold capitalize text-slate-800 group-hover:text-theme-green">
          {category.categoryName}
        </h1>
      </Link>
      <p className="pt-2 text-sm text-gray-400">
        {category.relatedProducts} товаров
      </p>
      <div className="flex flex-wrap mt-2">
        {category.subCategoryList &&
          category.subCategoryList &&
          category.subCategoryList.map((one) => {
            return (
              <Link key={one} href={`/catalog/sub/${encodeURI(one)}`}>
                <h2 className="text-sm font-medium text-theme-green hover:text-theme-green/80">
                  {" "}
                  {one} ,
                </h2>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryWithSubCategory;
