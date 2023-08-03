import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';

const Country = ({ country }) => {
  const {
    name, flag, population, cases, deaths, recovered,
  } = country;

  return (
    <main className="flex items-center gap-12 md:justify-between px-2 py-3 bg-[#fb5092] even:bg-[#da2d72]">
      <div className="flex items-center gap-2">
        <img src={flag} alt={country} className="w-16 md:w-40" />
        <span className="text-lg font-semibold">{name}</span>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <span>
            Population:
            {' '}
            {population}
          </span>
          <span>
            Cases:
            {' '}
            {cases}
            {' '}
            cases
          </span>
          <span>
            Deaths:
            {' '}
            {deaths}
            {' '}
            deaths
          </span>
          <span>
            Recovered:
            {' '}
            {recovered}
            {' '}
            recovered
          </span>
        </div>
        <div>
          <FaArrowCircleRight />
        </div>
      </div>
    </main>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    cases: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired,
  }).isRequired,
};

export default Country;
