import React from 'react';
import logo from '../assets/kevinRushLogo.png';
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div className="h-[15vh] w-[96.5vw] flex flex-col sm:flex-row justify-between bg-gray-950 p-4 sm:m-4 sm:rounded-2xl lg:mb-[2vw] md:w-[91vw] md:ml-[3vw]">
        <div className="w-full sm:w-[30%] h-full flex items-center justify-center">
          <img className="w-[20%] sm:w-[4vw] mr-0 sm:mr-[5vw] md:w-[10vw]" src={logo} alt="Logo" />
        </div>

        <div className="w-full sm:w-[30%] h-full flex justify-center items-center gap-6 mt-4 sm:mt-0 text-2xl md:mr-[4vw] md:gap-6">
          <FaInstagram className="text-yellow-700 cursor-pointer hover:scale-110 transition-transform text-3xl sm:text-4xl md:text-8xl" />
          <FaFacebookSquare className="text-blue-700 cursor-pointer hover:scale-110 transition-transform text-3xl sm:text-4xl md:text-8xl" />
          <FaLinkedin className="text-blue-400 cursor-pointer hover:scale-110 transition-transform text-3xl sm:text-4xl md:text-8xl" />
          <FaDiscord className="text-blue-700 cursor-pointer hover:scale-110 transition-transform text-4xl sm:text-5xl md:text-9xl" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
