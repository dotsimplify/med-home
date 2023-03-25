import React from "react";

const Scrollbar = (props) => {
  return (
    <div>
      <div
        style={{ width: `${props.scrollTop}%` }}
        className="fixed z-40 h-1 bg-theme-green top-18"
      ></div>
    </div>
  );
};

export default Scrollbar;
