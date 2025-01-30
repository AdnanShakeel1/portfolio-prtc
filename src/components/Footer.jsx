import React from 'react';

const Footer = () => {
  return (
    <footer className="w-[97vw] text-center text-sm text-white py-4 bg-gray-800  rounded-2xl ml-4 mr-4 ">
      <p>© {new Date().getFullYear()} Khalid Rashid. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
