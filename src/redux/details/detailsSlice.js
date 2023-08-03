import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  isloading: false,
};
const url = 'https://corona.lmao.ninja/v2/countries/';

export const fetchCountries = createAsyncThunk('details/fetchCountries', async (countries) => {
  const base = `${url}/${countries}`;
  const response = await fetch(base);
  const res = await response.json();
  return res.forEach((item) => ({
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
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => ({
      ...state,
      isloading: true,
    }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        isloading: false,
        value: action.payload,
      }))
      .addCase(fetchCountries.rejected, (state) => ({
        ...state,
        isloading: false,
      }));
  },
});

export default detailsSlice.reducer;
