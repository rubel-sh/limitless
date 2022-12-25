import React from "react";

const AddButton = ({ children }) => {
  return (
    <button className="border-2 border-slate-500 px-4 py-2 hover:bg-slate-500 hover:text-white">
      {children}
    </button>
  );
};

export default AddButton;
