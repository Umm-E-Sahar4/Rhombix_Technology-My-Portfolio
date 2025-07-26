import React from 'react'
import mywork_data from '../assets/mywork_data';
import arrow_icon from '../assets/arrow_icon.svg'

const Work = () => {
  return (
    <div
      id='work'
      className='flex flex-col items-center justify-center gap-20 mx-[70px] md:mx-[170px] my-[80px]'
    >
      <div className="relative text-center">
        <h1 className="px-0 md:px-8 text-[50px] md:text-[80px] font-semibold">My Latest Work</h1>
        <hr className="h-2 md:h-2 rounded-full border-none bg-amber-500 w-full mt-2" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 w-full">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt=""
            className="w-full h-full max-w-[419px] max-h-[280px] object-cover transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110 hover:rounded-lg hover:border-4 hover:border-amber-500"
          />
        ))}
      </div>

      <div className="flex items-center gap-4 hover:gap-8 border-2 border-white rounded-full px-10 py-5 text-[18px] md:text-[22px] font-medium transition-all duration-500 cursor-pointer mt-6">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" className="w-6 h-6" />
      </div>
    </div>
  )
}

export default Work
