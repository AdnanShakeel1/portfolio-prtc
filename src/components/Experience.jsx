import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <>
      <div className="sm:w-[98vw] h-auto sm:h-[186vh] border border-red-400 rounded-2xl m-4 p-4 lg:h-[240vh] mb-[2vw] mt-[2vw] w-[100vw] ">
        <h1 className="text-center text-3xl sm:text-4xl mt-4 sm:mt-[2vw] mb-4 sm:mb-[2vw] font-bold">
          Experience
        </h1>
        <div className="flex flex-col gap-6 p-4">
          {EXPERIENCES.map((ex, index) => (
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 p-4 border border-gray-300 rounded-xl shadow-md"
              key={index}
            >
              <div className="flex-shrink-0 w-auto sm:w-[30vw] text-center">
                <p className="text-sm sm:text-base border border-amber-300 rounded-xl px-4 py-2 bg-yellow-200">
                  {ex.year}
                </p>
              </div>

              <div className="w-full sm:w-[60vw] flex flex-col items-start p-4 border border-indigo-400 rounded-2xl lg:p-[2vw]">
                <h6 className="text-lg sm:text-xl font-bold mb-2">
                  {ex.role} -{' '}
                  <span className="text-sm sm:text-base text-red-800">
                    {ex.company}
                  </span>
                </h6>
                <p className="text-sm sm:text-base mb-4">
                  {ex.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ex.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs sm:text-sm bg-blue-400 text-white rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
