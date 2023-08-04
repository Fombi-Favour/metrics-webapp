import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchContinent } from '../redux/home/homeSlice';
import imageContinents from '../components/Image';
import Countries from '../components/Countries';

const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { continent } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchContinent(name));
  }, [dispatch, name]);

  return (
    <section className="bg-[#fb5092] text-white">
      {/* Title sub-section */}
      <div className="flex items-center justify-center gap-8 p-2">
        <img src={imageContinents[name]} alt={name} className="w-60 md:w-[24rem]" />
        <div className="flex flex-col">
          <h3 className="text-[1.654rem] font-semibold">{continent.name}</h3>
          <span className="text-[1.174rem]">
            {continent.cases}
            {' '}
            cases
          </span>
        </div>
      </div>
      {/* status sub-section */}
      <div className="flex bg-[#da2d72] p-1">
        <h3 className="uppercase">
          {`status of ${name}'s countries`}
        </h3>
      </div>
      {/* countries list sub-section */}
      <Countries />
    </section>
  );
};

export default Details;
