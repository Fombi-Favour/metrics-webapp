import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContinent } from '../redux/home/homeSlice';

const Details = () => {
  const dispatch = useDispatch();
  // const { value } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchContinent());
  }, [dispatch]);

  return (
    <div>Details</div>
  );
};

export default Details;
