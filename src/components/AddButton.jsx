import React from "react";

const AddButton = ({ children, className }) => {
  return (
    <button
      className={`border-2 border-slate-500  bg-slate-100 text-sm px-2 py-1 hover:bg-slate-500 hover:text-white rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default AddButton;
