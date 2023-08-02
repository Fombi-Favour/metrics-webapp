import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';
import imageContinent from './Image';

const Continent = ({ continent }) => {
  const {
    name, population, cases, deaths, recovered,
  } = continent;

  return (
    <NavLink to={`details/${name}`} className="flex flex-col items-end border-2 p-2">
      <div>
        <FaArrowCircleRight />
      </div>
      <div className="flex items-center gap-1">
        <img src={imageContinent[name]} alt={name} className="w-48" />
        <div className="flex flex-col">
          <h3 className="font-bold text-xl">{name}</h3>
          <span>
            Population:
            {' '}
            {population}
          </span>
          <span>
            Cases:
            {' '}
            {cases}
          </span>
          <span>
            Deaths:
            {' '}
            {deaths}
          </span>
          <span>
            Recovered:
            {' '}
            {recovered}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

Continent.propTypes = {
  continent: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Continent;
