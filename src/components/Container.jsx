import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-1/3 mx-auto mt-10 border shadow-lg p-3 h-[550px] rounded bg-white overflow-y-auto">
      {children}
    </div>
  );
};

export default Container;
