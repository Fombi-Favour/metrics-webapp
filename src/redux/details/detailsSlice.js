import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  isloading: false,
};
const url = 'https://corona.lmao.ninja/v2/countries/';

export const fetchCountries = createAsyncThunk('details/fetchCountries', async () => {
  const response = await fetch(`${url}`);
  const res = await response.json();
  console.log(res);
  return res.map((item) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: item.countryInfo._id,
    country: item.country,
    flag: item.countryInfo.flag,
    continent: item.continent,
    populations: item.population,
    cases: item.cases,
    deaths: item.deaths,
    recovered: item.recovered,
  }));
});

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
});

export default detailsSlice.reducer;
