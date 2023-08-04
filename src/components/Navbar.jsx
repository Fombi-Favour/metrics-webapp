import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaMicrophone, FaRegSun, FaAngleLeft } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = useSelector((state) => state.home.continent);

  return (
    <nav className="bg-[#ec4c8b] flex items-center justify-between p-3 md:justify-around text-white">
      {location.pathname === '/' && (
      <>
        <span className="font-bold">The World Map</span>
        <span className="text-lg font-medium">COVID-19 Cases</span>
      </>
      )}

      {location.pathname !== '/' && (
      <>
        <div className="flex items-center gap-3">
          <FaAngleLeft onClick={() => navigate(-1)} size={23} className="cursor-pointer" />
          <span className="font-bold text-xl">{name}</span>
        </div>
        <span className="font-semibold text-xl">{`${name}'s Cases`}</span>
      </>
      )}
      <div className="flex items-center gap-3 md:text-xl">
        <FaMicrophone />
        <FaRegSun />
      </div>
    </nav>
  );
};

export default Navbar;
