import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { formatDate, readingTime } from "../../app/helper/helper";

const BlogThumbnail = ({ data }) => {
  return (
    <div className="flex w-full mb-6 rounded-md md:max-w-sm ">
      <div className="w-full bg-white rounded-md shadow-lg md:max-w-sm">
        <Link href={`/stati/${data.slug}`}>
          <a>
            <NextImage
              className="object-cover cursor-pointer rounded-t-md"
              src={data.coverImage.url}
              alt={`Thumbnail for ${data.title}`}
              height="300"
              width="400"
            />
          </a>
        </Link>

        <div className="p-4">
          <Link href={`/stati/${data.slug}`}>
            <h1 className="my-2 text-xl font-bold text-gray-600 capitalize cursor-pointer hover:underline">
              <span className="text-bold ">{data.title}</span>
            </h1>
          </Link>
          <div className="flex items-center justify-between">
            <h3 className="py-4 text-xs text-gray-400">
              {formatDate(data.createdAt)}
            </h3>
            <h3 className="py-4 text-xs text-gray-400">
              ◉ {readingTime(data.description)} минут чтения
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogThumbnail;
