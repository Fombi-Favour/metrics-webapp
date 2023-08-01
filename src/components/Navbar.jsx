import React from 'react';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';

const Navbar = () => (
  <nav className="bg-[#ec4c8b] flex items-center justify-between p-3 md:justify-around text-white">
    <span className="font-bold">The World Map</span>
    <span className="text-lg font-medium">COVID-19 Cases</span>
    <div className="flex items-center gap-3 md:text-xl">
      <FaMicrophone />
      <FaRegSun />
    </div>
  </nav>
);

export default Navbar;
