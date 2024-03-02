import React from "react";

function Spinner() {
  return (
    <div className="fixed inset-0 bg-black opacity-70 justify-center items-center flex z-50">
      <div className="border-white border-solid border-4 border-t-transparent rounded-full h-10 w-10 animate-spin"></div>
    </div>
  );
}

export default Spinner;
