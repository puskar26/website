import React from "react";
import image from "../assets/pro.jpg";
function About() {
  return (
    <>
      <div className="w-full font-quicksand  flex flex-col  sm:flex-row sm:justify-around sm:gap-4  gap-2 items-center bg-white p-6 rounded-lg shadow-md max-w-md mx-auto hover:bg-blue-100 transition-all ease-in-out">
        <div className="w-40 h-40 sm:h-auto sm:w-full bg-slate-400 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={image}
            className="scale-150  shadow-lg object-cover sm:h-auto w-full h-full"
            alt=""
          />
        </div>
        <div className="text-sm flex flex-col gap-2 text-gray-700">
          <p className="mb-4">
            Hello! I'm a computer engineering student from Kathmandu, Nepal,
            with a passion for technology and creativity. I enjoy diving into
            the world of web development and have worked on some basic projects
            using HTML, CSS, JavaScript, and React.
          </p>
          <p className="mb-4">
            In my free time, you can find me listening to music, capturing
            beautiful moments through photography, or playing football and video
            games. I love how technology can bring people together and create
            amazing experiences.
          </p>
          <p>
            While I may be just a regular student without many notable
            achievements yet, I'm dedicated to my studies and focused on
            building my skills. My ultimate goal is to become a software
            engineer, where I can contribute to innovative projects and help
            shape the future of technology.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
