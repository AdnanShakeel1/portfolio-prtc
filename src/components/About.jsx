import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <>
      <div className="w-full sm:w-[98%] h-auto sm:h-[100vh] border border-b-violet-600 rounded-2xl m-4 p-4 font-bold lg:h-[120vh] mt-[2vw] mb-[2vw] md:w-[91vw] md:mt-[8vw] md:ml-[3vw] md:h-[60vh] md:mb-[2vw]">
        <h1 className="text-3xl sm:text-4xl text-center mt-4 sm:mt-[4vw] md:text-7xl md:mt-[8vw]">
          About <span className="text-gray-600 font-bold">Me</span>
        </h1>
        <div className="flex flex-col sm:flex-row justify-evenly items-center w-full h-auto sm:h-full md:flex-col-reverse md:justify-center md:ml-[2vw] md:mb-[vw] md:h-[80%]">
          <div className="w-full sm:w-[50%] flex items-center justify-center mt-6 sm:mt-0 md:w-[75%] md:ml-[]">
            <img className="w-[60%] sm:w-[25vw] rounded-2xl lg: mt-[4vw] md:w-[100%]" src={aboutImg} alt="About Me" />
          </div>

          
          <div className="w-full sm:w-[50%] p-6 sm:pr-20 sm:pb-20 md:w-[100vw] md:flex md:justify-center md:items-center">
            <p className="text-justify font-light text-sm sm:w-[35vw] lg: mb-[4vw] md:text-2xl md:w-[75%] md:mb-[2vw]">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
