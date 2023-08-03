import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ country }) => {
  const {
    name, flag, continent, population,
  } = country;

  return (
    <div>
      <span>{name}</span>
      <span>{flag}</span>
      <span>{continent}</span>
      <span>{population}</span>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    continent: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
  }).isRequired,
};

export default Country;
