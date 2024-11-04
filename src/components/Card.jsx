import React from "react";

function Card({ title, description }) {
  return (
    <>
      <div className="flex-1 font-inter p-6 sm:p-8 flex flex-col  gap-4 bg-white shadow-lg rounded-lg">
        <div>
          <p className="text-2xl font-bold">{title}</p>
        </div>
        <div className="mt-1 text-gray-600 sm:text-base text-[15px] ">
          {description}
        </div>
        <div className="text-xs flex gap-3 text-green-600 font-semibold tracking-[0.8px] ">
          <p className="bg-green-100   px-3 py-1 rounded-full ">HTML5</p>
          <p className="bg-green-100   px-3 py-1 rounded-full">CSS3</p>
          <p className="bg-green-100   px-3 py-1 rounded-full">JavaScript</p>
        </div>
        <div className="flex gap-4 font-semibold mt-4">
          <button className="group bg-blue-600 text-white text-[12px] sm:text-base px-4 py-2 rounded-lg hover:bg-blue-700">
            View Live{" "}
            <span className="ml-2 inline-block transform transition-transform duration-200 ease-in-out group-hover:translate-x-2">
              &rarr;
            </span>
          </button>
          <button className="bg-gray-100 text-gray-700 text-[12px] sm:text-base px-4 py-2 rounded-lg hover:bg-gray-200">
            Source Code
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
