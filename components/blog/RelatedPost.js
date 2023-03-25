import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { stringClip } from "../../app/helper/helper";

const RelatedPost = (props) => {
  return (
    <>
      {props.data && props.data.length > 0 && (
        <aside
          aria-label="Related articles"
          className="px-4 py-8 lg:py-24 bg-gray-50 dark:bg-slate-900"
        >
          <div className="max-w-screen-xl px-4 mx-auto">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Related articles
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <article className="max-w-xs">
                <Link href="/">
                  <NextImage
                    width="1280"
                    height="720"
                    priority
                    src={props.data.coverImage?.url}
                    alt={props.data.title}
                  />
                </Link>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <Link href="#">
                    <span className="text-transparent text-bold bg-gradient-to-r to-emerald-600 from-sky-400 bg-clip-text">
                      {props.data.title}
                    </span>
                  </Link>
                </h2>
                <p className="mb-4  font-light text-gray-500 dark:text-gray-400">
                  {stringClip(props.data.description, 120)}
                </p>
                <span className="inline-flex text-white items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 2 minutes
                </span>
              </article>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default RelatedPost;
