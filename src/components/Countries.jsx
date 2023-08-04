import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/details/detailsSlice';
import Country from './Country';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.home.continent);
  const countryString = countries?.toString();

  useEffect(() => {
    if (countryString) {
      dispatch(fetchCountries(countryString));
    }
  }, [dispatch, countryString]);

  const { valueList } = useSelector((state) => state.details);

  return (
    <main>
      {valueList.map((item) => (
        <Country key={item.name} country={item} />
      ))}
    </main>
  );
};

export default Countries;
