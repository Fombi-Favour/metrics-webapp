import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/home/homeSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>Home</div>
  );
};

export default Home;
