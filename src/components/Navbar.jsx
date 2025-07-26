import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';


const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className="flex items-center justify-between mx-auto my-5 px-4 flex-col md:flex-row md:gap-0 gap-2">
      <h1 className="text-white font-bold text-2xl">
        SAHAR
        <hr className="h-2 rounded-full bg-amber-500 border-none mt-1" />
      </h1>

      <img
        src={menu_open}
        onClick={openMenu}
        alt=""
        className="md:hidden block fixed right-6 w-6 z-50"
      />

      <ul
        ref={menuRef}
        className="fixed md:static top-0 right-[-350px] transition-all duration-500 z-40 bg-[#1f0016] md:bg-transparent text-white 
                   md:flex md:items-center list-none md:gap-10 gap-8 p-6 md:p-0 flex-col md:flex-row w-[350px] md:w-auto h-full md:h-auto"
      >
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="block md:hidden relative top-6 left-[290px] w-6"
        />
        {[
          ['home', 'Home'],
          ['about', 'About Me'],
          ['services', 'Services'],
          ['work', 'Portfolio'],
          ['contact', 'Contact'],
        ].map(([key, label]) => (
          <li
            key={key}
            onClick={() => setMenu(key)}
            className="flex md:flex-col flex-row items-center gap-2 text-lg cursor-pointer pl-10 md:pl-0"
          >
            <AnchorLink
              className="text-white no-underline"
              offset={50}
              href={`#${key}`}
            >
              {label}
            </AnchorLink>
            {menu === key && (
              <hr className="h-2 rounded-full bg-amber-500 border-none w-full" />
            )}
          </li>
        ))}
      </ul>

      <div className="hidden md:block px-5 py-2 rounded-full bg-amber-500 text-lg cursor-pointer transition-transform duration-500 hover:scale-105">
        <AnchorLink className="text-white no-underline" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
