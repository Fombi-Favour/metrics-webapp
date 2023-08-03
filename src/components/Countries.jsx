import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/details/detailsSlice';
import Country from './Country';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.home.continent);
  //   const countriesString = countries?.toString();
  //   console.log(countriesString);

  useEffect(() => {
    if (countries) {
      dispatch(fetchCountries(countries));
    }
  }, [dispatch, countries]);

  const data = useSelector((state) => state.details.value);
  console.log(data);

  return (
    <main>
      {data.map((index) => (<Country key={index.country} />))}
    </main>
  );
};

export default Countries;
