import React from 'react';

const Contacts = () => {
  return (
    <div className="h-auto w-[98vw] flex flex-col items-center border border-amber-300 rounded-2xl m-4 p-4 lg:mb-[2vw] mt-[2vw] md:w-[95vw]">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] gap-6">
        <div className="flex flex-col items-center md:items-end w-full md:w-[40%]">
          <h6 className="text-lg font-semibold mb-4">Address:</h6>
          <h6 className="text-lg font-semibold mb-4">Phone:</h6>
          <h6 className="text-lg font-semibold mb-4">Email:</h6>
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-[40%]">
          <p className="text-base text-gray-700 mb-4 text-center md:text-left">
            767 Fifth Avenue, New York, NY 10153
          </p>
          <p className="text-base text-gray-700 mb-4 text-center md:text-left">
            +12 4555 666 00
          </p>
          <p className="text-base text-gray-700 mb-4 text-center md:text-left">
            me@example.com
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Send Me an Email
        </a>
      </div>
    </div>
  );
};

export default Contacts;
