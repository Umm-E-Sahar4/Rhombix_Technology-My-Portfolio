import React from 'react';
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'ee56e6a0-c5d9-4372-9673-bb12fcc2d7df');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-20 px-4 py-20 md:px-16 lg:px-44">
      {/* Title */}
      <div className="relative">
        <h1 className="text-[50px] md:text-[80px] font-semibold px-0 md:px-8 text-white">Get in Touch</h1>
        <hr className="h-2 rounded-full border-none bg-amber-500 mt-2" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-20 text-white w-full">
        {/* Left */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 className="text-[54px] md:text-[80px] font-bold bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p className="text-lg md:text-xl leading-[30px] max-w-[550px]">
            I'm currently available to take new projects, so feel free to send me a message about anything you want to work on. You can contact me anytime.
          </p>
          <div className="flex flex-col gap-6 text-[18px] md:text-[22px]">
            <div className="flex items-center gap-4">
              <img src={mail_icon} alt="mail" className="w-6 md:w-8" />
              <p>t53081248@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call_icon} alt="call" className="w-6 md:w-8" />
              <p>03140670410</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={location_icon} alt="location" className="w-6 md:w-8" />
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full max-w-[700px]">
          <label className="text-lg md:text-[22px] font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full h-[60px] md:h-[78px] px-5 rounded bg-[#32323c] text-gray-300 text-lg md:text-xl outline-none"
          />

          <label className="text-lg md:text-[22px] font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full h-[60px] md:h-[78px] px-5 rounded bg-[#32323c] text-gray-300 text-lg md:text-xl outline-none"
          />

          <label className="text-lg md:text-[22px] font-medium">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message here"
            className="w-full px-5 py-4 rounded bg-[#32323c] text-gray-300 text-lg md:text-xl outline-none"
          ></textarea>

          <button
            type="submit"
            className="px-10 py-5 text-white text-lg md:text-[22px] rounded-full bg-amber-500 hover:scale-105 transition-transform duration-300 self-start"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
