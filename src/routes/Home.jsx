import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContinents } from '../redux/home/homeSlice';
import World from '../assets/world.png';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContinents());
  }, [dispatch]);

  return (
    <section className="bg-[#fb5092] text-white flex flex-col">
      {/* first sub-section */}
      <div className="flex items-center justify-center">
        <img src={World} alt="world-map" className="w-80 md:w-[24rem]" />
        <div className="flex flex-col">
          <h3 className="text-[1.654rem] font-semibold">The World</h3>
          <span className="">6,958 cases</span>
        </div>
      </div>
      {/* searching sub-section */}
      <div className="flex items-center justify-between bg-[#da2d72] p-3 md:justify-evenly">
        <h3 className="uppercase">cases by continents</h3>
        <input type="text" placeholder="Search..." className="w-60 md:w-[30rem] p-1 px-3 outline-none text-black rounded-md" />
      </div>
      {/* listing sub-section: fetched from api */}
    </section>
  );
};

export default Home;
