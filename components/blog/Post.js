import React, { useState, useEffect } from "react";
import { formatDate } from "../../app/helper/helper";
import RelatedPost from "./RelatedPost";
import NextImage from "next/image";
import Scrollbar from "./ScrollBar";

const Post = ({ data }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <Scrollbar scrollTop={scrollTop} />
      <main className="pb-16 bg-white lg:pt-4 lg:pb-24 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between max-w-screen-xl px-4 mx-auto ">
          <article className="w-full max-w-2xl mx-auto format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <NextImage
              width="1280"
              height="720"
              priority
              src={data.coverImage.url}
              alt="blog"
            />

            <header className="my-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-start mr-3 text-sm text-gray-900 lg:items-center dark:text-white">
                  <div className="ml-2">
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      <time title={formatDate(data.createdAt)}>
                        Published on {formatDate(data.createdAt)}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                <span className="text-transparent capitalize bg-gradient-to-r to-emerald-600 from-sky-400 bg-clip-text">
                  {data.title}
                </span>
              </h1>
            </header>
            <div
              className="article-div"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </article>
        </div>
      </main>
      <RelatedPost />
    </>
  );
};

export default Post;
