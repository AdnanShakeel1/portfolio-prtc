import React from 'react';
import { FaReact } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io';
import { SiTailwindcss } from 'react-icons/si';
import { FaPython } from 'react-icons/fa6';
import { IoLogoCss3 } from 'react-icons/io';

const Technology = () => {
  return (
    <>
      <div className="w-full sm:w-[98%] h-auto sm:h-[40vh] border border-b-blue-500 m-4 rounded-2xl p-4 lg:mt-[2vw] mb-[2vw]  md:w-[91vw] md:mt-[8vw] md:ml-[3vw] md:h-[30vh] md:mb-[2vw] md:">
        <h1 className="text-3xl sm:text-4xl text-center mt-4 font-bold mb-[2vw]">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-4 mt-6">
          <FaReact className="font-bold text-5xl sm:text-6xl text-blue-400 rounded-2xl border-2 p-2" />
          <DiDjango className="font-bold text-5xl sm:text-6xl text-green-500 rounded-2xl border-2 p-2" />
          <IoLogoNodejs className="font-bold text-5xl sm:text-6xl text-green-700 rounded-2xl border-2 p-2" />
          <SiTailwindcss className="font-bold text-5xl sm:text-6xl text-blue-400 rounded-2xl border-2 p-2" />
          <FaPython className="font-bold text-5xl sm:text-6xl text-blue-800 rounded-2xl border-2 p-2" />
          <IoLogoCss3 className="font-bold text-5xl sm:text-6xl text-red-900 rounded-2xl border-2 p-2" />
        </div>
      </div>
    </>
  );
};

export default Technology;
