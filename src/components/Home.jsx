import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import image from "../assets/pro.jpg";

function Home() {
  const [text] = useTypewriter({
    words: ["Programmer", "Web Developer", "Coder"],
    loop: {},
  });
  return (
    <>
      <div className="font-quicksand h-screen flex flex-col py-4 gap-4 items-center mt-[72px]">
        <div className="flex w-[90%] flex-col items-center justify-between space-y-4">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] shadow-lg overflow-hidden rounded-full">
            <img
              src={image}
              className=" object-cover transform scale-110"
              alt="My photo"
            />
          </div>
          <p className="text-2xl">
            Hello . My name is
            <span className="uppercase font-bold text-3xl sm:text-5xl block">
              Pushkar Niraula
            </span>
          </p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl">
            I'm a
            <span className="ml-2 text-3xl font-bold text-blue-600 uppercase">
              {text}
            </span>
            <Cursor />
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
