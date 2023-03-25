import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      className="text-gray-200 bg-slate-800"
      style={{
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(225, 225, 225, .3);\n                }\n\n                @media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }",
          }}
        />
        <h1
          className="next-error-h1"
          style={{
            display: "inline-block",
            margin: 0,
            marginRight: "20px",
            padding: "0 23px 0 0",
            fontSize: "24px",
            fontWeight: 500,
            verticalAlign: "top",
            lineHeight: "49px",
          }}
        >
          404
        </h1>
        <div
          style={{
            display: "inline-block",
            textAlign: "left",
            lineHeight: "49px",
            height: "49px",
            verticalAlign: "middle",
          }}
        >
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "49px",
              margin: 0,
              padding: 0,
            }}
          >
            This page could not be found.{" "}
            <Link href="/">
              <span className="font-bold text-transparent cursor-pointer hover:underline bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Back Home
              </span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
