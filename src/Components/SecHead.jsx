import React from "react";

const SecHead = ({ title, heading, className }) => {
  return (
    <div className={`${className}`}>
      <h5 className="flex items-center gap-2.5 text-sm font-semibold">
        <span className="size-1.5 bg-primary rounded-full"></span>
        {title}
      </h5>
      <h2 className="text-[48px] font-semibold pt-10">{heading}</h2>
    </div>
  );
};

export default SecHead;
