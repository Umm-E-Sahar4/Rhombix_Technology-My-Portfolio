import React from 'react';
import profile from '../assets/profile.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Resume from '../assets/resume.pdf';

const Hero = () => {
  
  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = Resume;
  link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  
  return (
    <div
      id="home"
      className="flex flex-col items-center gap-9 px-4 text-white"
    >
    <img
     src={profile}
     alt="Profile"
     className="mt-[100px] w-[160px] sm:mt-[80px] sm:w-[180px] md:mt-[60px] md:w-[200px] lg:mt-[40px] lg:w-[270px]"
     />

       <h1 className="text-center font-semibold w-[90%] text-[50px] md:text-[70px] md:w-[70%] mt-12 md:mt-0">
        <span className="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">
          I'm Sahar,
        </span>{' '}
        frontend developer based in Pakistan.
      </h1>

      <p className="text-center text-lg md:text-2xl w-[60%] md:w-[50%] leading-8 md:leading-[40px] my-2">
        I'm a beginner front-end developer passionate about building clean and responsive websites using HTML, CSS, JavaScript, and React. Always learning, I enjoy turning simple ideas into smooth, user-friendly web experiences.
      </p>

      <div className="flex items-center gap-4 md:gap-6 text-lg md:text-2xl font-medium mb-12">
        <div className="px-6 py-4 md:px-8 md:py-5 rounded-full bg-amber-500 hover:border-2 hover:border-white transition duration-300 cursor-pointer">
          <AnchorLink className="text-white no-underline" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="px-6 py-4 md:px-12 md:py-5 rounded-full border-2 border-white hover:border-amber-500 transition duration-300 cursor-pointer" onClick={handleDownload}>
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
