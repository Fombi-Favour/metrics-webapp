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
    <NavLink to={`details/${name}`} className="flex flex-col items-end rounded-lg bg-[#fb5092] even:bg-[#da2d72] hover:bg-[#da2d72] hover:even:bg-[#fb5092] hover:transition-all transition-all p-2 md:p-3">
      <div>
        <FaArrowCircleRight />
      </div>
      <div className="flex items-center gap-1 md:gap-3">
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
  continent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    cases: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired,
  }).isRequired,
};

export default Continent;
