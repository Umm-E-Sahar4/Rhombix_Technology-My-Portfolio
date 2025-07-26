import React from 'react';
import user_icon from '../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 mx-4 md:mx-16 lg:mx-44 my-12 text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold">
            SAHAR
            <hr className="w-1/4 h-2 rounded-full border-none bg-amber-500 mt-2" />
          </h1>
          <p className="text-lg max-w-md mt-4">
            I am a frontend developer from Pakistan with 1 year of experience.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex items-center gap-4 bg-[#32323c] rounded-full px-6 py-4 hover:border hover:border-white transition-all">
            <img src={user_icon} alt="user icon" className="w-6 h-6" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-gray-400 text-base outline-none border-none font-outfit"
            />
          </div>
          <div className="text-lg bg-amber-500 px-10 py-4 rounded-full cursor-pointer hover:scale-110 transition-transform">
            Subscribe
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-base gap-4 md:gap-0">
        <p>© 2025 Sahar. All rights reserved</p>
        <div className="flex gap-8 md:gap-12 flex-wrap">
          <p className="cursor-pointer hover:underline">Terms of Services</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Contact with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
