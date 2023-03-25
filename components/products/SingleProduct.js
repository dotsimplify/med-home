import React from "react";
import Link from "next/link";
import NextImage from "next/image";

const SingleProduct = ({ data }) => {
  return (
    <>
      {data && (
        <Link href={`/polnaya-informatsiya-o-meditsine/${data.slug}`}>
          <div className="relative border shadow-none group hover:shadow-2xl ">
            <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
              {data.images && data.images.length > 0 && (
                <NextImage
                  className="object-cover w-full lg:max-w-[300px] 2xl:max-w-full min-h-[300px]  transition-all duration-300 group-hover:scale-125"
                  src={data.images[0]?.url}
                  alt={data.title}
                  height="300"
                  width="400"
                />
              )}
              <div className="absolute left-1/3 bottom-4">
                <p className="sm:px-3 sm:py-1.5 px-2 py-1.5 border shadow text-[10px]  sm:text-xs font-bold tracking-wide text-theme-green uppercase bg-white rounded-full">
                  от {data.price} ₽
                </p>
              </div>
            </div>
            {data.offer && (
              <div className="absolute left-3 top-3">
                <p className="sm:px-3 sm:py-1.5 px-2 py-1.5 text-[10px]  sm:text-xs font-bold tracking-wide text-white uppercase bg-theme-green rounded-full">
                  Предложение
                </p>
              </div>
            )}

            <div className="flex items-start justify-between p-3">
              <div className="w-full">
                <Link href={`/polnaya-informatsiya-o-meditsine/${data.slug}`}>
                  <a className="capitalize hover:text-theme-green hover:underline">
                    <h3 className="w-full text-xs font-semibold tracking-wide text-gray-700 sm:text-base">
                      {data.title}
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
export default SingleProduct;
