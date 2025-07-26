import React from 'react';
import profile_img from '../assets/profile_img.svg';

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-20 mx-6 md:mx-[160px] my-20 text-white"
    >
      {/* Title */}
      <div className="relative text-center">
        <h1 className="text-[20px] md:text-[80px] font-semibold px-0 md:px-8">About me</h1>
        <hr className="h-2 rounded-full bg-amber-500 border-none mt-2" />
      </div>

      {/* Section */}
      <div className="flex flex-col md:flex-row gap-20 w-full">
        {/* Left Image */}
        <div className="hidden md:block">
          <img src={profile_img} alt="Profile" className="mt-19 w-[800px]" />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-12">
          {/* Paragraphs */}
          <div className="flex flex-col gap-4 text-sm md:text-2xl font-normal leading-relaxed">
            <p>
              I'm a Front-End Web Developer with a passion for building clean,
              user-friendly interfaces.
            </p>
            <p>
              I'm currently focused on learning modern web development and improving my skills through hands-on projects like expense trackers, responsive websites, and interactive UIs.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-5">
            {[
              { name: 'HTML & CSS', width: 'w-[70%]' },
              { name: 'JavaScript', width: 'w-[50%]' },
              { name: 'React JS', width: 'w-[40%]' },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="flex gap-5 md:gap-12 items-center hover:scale-105 transition duration-300"
              >
                <p className="min-w-[150px] text-lg md:text-2xl font-normal">{skill.name}</p>
                <hr
                  className={`h-2 rounded-full bg-amber-500 border-none ${skill.width}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex w-full justify-between md:justify-around mb-12 text-center">
        {[
          { number: '1+', label: 'YEAR OF EXPERIENCE' },
          { number: '10+', label: 'PROJECTS COMPLETED' },
          { number: '15+', label: 'HAPPY CLIENTS' },
        ].map((achieve, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2 hover:scale-110 transition duration-500"
          >
            <h1 className="text-[34px] md:text-[50px] font-semibold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">
              {achieve.number}
            </h1>
            <p className="text-sm md:text-lg font-medium">{achieve.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
