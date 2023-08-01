import React from 'react';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';

const Navbar = () => (
  <nav>
    <span>The World Map</span>
    <span>COVID-19 Cases</span>
    <div>
      <FaMicrophone />
      <FaRegSun />
    </div>
  </nav>
);

export default Navbar;
