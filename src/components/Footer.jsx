import React from "react";
import Social from "./Social.jsx";
function Footer() {
  return (
    <>
      <div className="font-sourceSans font-light p-4 flex flex-col justify-between items-center bg-white">
        <div className="font-quicksand uppercase text-[40px] font-bold text-gray-700">
          pushkar <span className="text-amber-500">niraula</span>
        </div>
        <div className="flex w-[50%] justify-evenly  p-4 mt-4">
          <Social icon={"socicon-facebook"} />
          <Social icon={"socicon-instagram"} />
          <Social icon={"socicon-twitter"} />
          <Social icon={"socicon-github"} />
        </div>
        <div className="mt-11">
          <p>&copy; 2024 Pushkar Niraula. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
