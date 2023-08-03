import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchContinent } from '../redux/home/homeSlice';
import imageContinents from '../components/Image';

const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { continent } = useSelector((state) => state.home);
  console.log(name, continent);

  useEffect(() => {
    dispatch(fetchContinent(name));
  }, [dispatch]);

  return (
    <section className="bg-[#fb5092] text-white">
      {/* Title sub-section */}
      <div>
        <img src={imageContinents[name]} alt={name} className="w-80 md:w-[24rem]" />
        <div className="flex flex-col">
          <h3 className="text-[1.654rem] font-semibold">{continent.name}</h3>
          <span className="">
            {continent.cases}
            {' '}
            cases
          </span>
        </div>
      </div>
      {/* status sub-section */}
      <div className="flex bg-[#da2d72] p-1">
        <h3 className="uppercase">
          {`status of ${continent.name}'s countries`}
        </h3>
      </div>
    </section>
  );
};

export default Details;
