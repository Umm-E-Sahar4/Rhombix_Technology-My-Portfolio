import React, { useState } from 'react';
import Services_Data from '../assets/Services_Data';
import arrow_icon from '../assets/arrow_icon.svg';

const Services = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const trimText = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };

  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center gap-[80px] mx-[20px] md:mx-[170px] my-[80px]"
    >
      <div className="relative text-center">
        <h1 className="text-[50px] md:text-[80px] font-semibold px-0 md:px-8">My Services</h1>
        <hr className="h-2 rounded-full bg-amber-500 border-none mt-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px] mb-[80px] w-full">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-5 md:gap-6 p-8 md:p-[60px] rounded-[10px] border-2 border-white text-white transition-transform duration-400 hover:border-amber-500 hover:bg-gradient-to-br hover:from-[#3f0028] hover:to-[#582300] hover:scale-[1.05] cursor-pointer"
          >
            <h3 className="text-[24px] font-semibold">{service.s_no}</h3>
            <h2 className="text-[28px] md:text-[34px] font-bold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">
              {service.s_name}
            </h2>

            <p className="text-[18px] md:text-[24px] leading-[32px] md:leading-[40px] max-w-[300px]">
              {expanded[index]
                ? service.s_desc
                : trimText(service.s_desc, 20)}
            </p>

            {service.s_desc.length > 20 && (
              <div
                className="flex items-center gap-3 text-white cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <p>{expanded[index] ? 'Read Less' : 'Read More'}</p>
                <img
                  src={arrow_icon}
                  alt="arrow"
                  className={`w-[20px] transition-transform duration-300 ${
                    expanded[index] ? 'rotate-180' : ''
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
