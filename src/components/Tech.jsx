import React from "react";
function Tech({ source, name }) {
  return (
    <>
      <div className="font-sourceSans flex flex-col gap-2 shadow-md p-2 items-center justify-between bg-white rounded-md scale-100 hover:scale-110 transition-transform ease-in-out">
        <div className="w-14 sm:w-16 flex justify-center">
          <img src={source} alt={name} />
        </div>
        <div>
          <p className="font-quicksand uppercase font-semibold text-[14px]">
            {name}
          </p>
        </div>
      </div>
    </>
  );
}

export default Tech;
