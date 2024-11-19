import React from "react";

function Social({ icon }) {
  return (
    <>
      <div
        className={`${icon} text-white w-10 h-10 flex justify-center items-center rounded-full bg-gray-700 hover:bg-amber-500 hover:scale-110 transition-all ease-in-out cursor-pointer `}
      ></div>
    </>
  );
}

export default Social;
