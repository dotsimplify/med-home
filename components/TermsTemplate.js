import React from "react";
import { formatDate } from "../app/helper/helper";

const TermsTemplate = (props) => {
  return (
    <>
      {props.data && (
        <div className="relative  bg-white pb-24 overflow-hidden pt-[42px]">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-12">
              <h1 className="text-4xl font-extrabold tracking-wider capitalize text-slate-600 sm:text-5xl">
                {props.data.title.rendered}
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Last updated on {formatDate(props.data.modified)}
              </p>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[40rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
              <div
                className="text-justify "
                dangerouslySetInnerHTML={{
                  __html: props.data.content.rendered,
                }}
              />
              <h2 className="mt-4">Contacting us</h2>
              <p>
                If you have any questions about this Policy, please contact us
                by email at{" "}
                <a className="underline" href="mailto:office@dok-aibolit.ru">
                  this email
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsTemplate;
