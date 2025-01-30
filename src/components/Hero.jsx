import React from 'react';
import profilePic from '../assets/kevinRushProfile.jpg';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center border border-b-blue-600 rounded-2xl m-4 p-4 lg:mt[2vw] mb-[2vw] w-[98vw] md:w-[91vw] md:h-[70vh] md:mt-[6vw] md:mb-[4vw] md:gap-[4vw] md:ml-[3vw] md:">
        <div className="w-full sm:w-[50%] flex flex-col items-center sm:items-start mb-6 sm:mb-0 lg:ml-[4vw] md:h-[50%] md:mb-[16vw]">
          <h1 className="text-4xl sm:text-6xl text-center sm:text-left tracking-tight mt-4 sm:mt-[4vw] font-bold md:h-[100%] md:text-7xl md:w-[]">
            Khalid Rashid
          </h1>
          <h1 className="mt-4 sm:mt-[3vw] mb-4 sm:mb-[2vw] bg-gradient-to-r from-pink-600 via-slate-500 to-purple-800 bg-clip-text tracking-tight text-xl sm:text-2xl text-transparent text-center sm:text-left md:text-6xl md:mb-8">
            Full Stack Developer
          </h1>
          <p className="text-sm w-[90%] sm:w-[40vw] text-center sm:text-justify font-light md:text-xl">
            I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
          </p>
        </div>

        <div className="w-full sm:w-[50%] flex justify-center items-center md:h-[70%] md:mt-[12vw] md:mb-[5vw]">
          <img
            className="w-[70%] sm:w-[30vw] rounded-2xl md:w-[90%] md:h-[90%]"
            src={profilePic}
            alt="Khalid Rashid"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
