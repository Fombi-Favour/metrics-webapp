import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContinents } from '../redux/home/homeSlice';
import World from '../assets/world.png';
import Continent from '../components/Continent';

const Home = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchContinents());
  }, [dispatch]);

  const filteredContinent = contents.filter((item) => (
    item.name.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <section className="bg-[#fb5092] text-white flex flex-col">
      {/* first sub-section */}
      <div className="flex items-center justify-center">
        <img src={World} alt="world-map" className="w-80 md:w-[24rem]" />
        <div className="flex flex-col">
          <h3 className="text-[1.654rem] font-semibold">The World</h3>
          <span className="text-[1.174rem]">6,958 cases</span>
        </div>
      </div>
      {/* searching sub-section */}
      <div className="flex items-center justify-between bg-[#da2d72] py-3 px-8 md:justify-evenly">
        <h3 className="uppercase">cases by continents</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-60 md:w-[30rem] p-1 px-3 outline-none text-black rounded-md"
        />
      </div>
      {/* listing sub-section: fetched from api */}
      <main className="flex flex-wrap gap-3 justify-center py-4">
        {filteredContinent.map((item) => (
          <Continent key={item.name} continent={item} />
        ))}
      </main>
    </section>
  );
};

export default Home;
