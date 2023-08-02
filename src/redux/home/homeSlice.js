import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  contents: [],
  isloading: false,
};
const url = 'https://corona.lmao.ninja/v2/continents';

export const fetchContinents = createAsyncThunk('home/fetchContinents', async () => {
  const response = await fetch(url);
  const res = await response.json();
  return res.map((item) => ({
    id: uuid(),
    name: item.continent,
    population: item.population,
    cases: item.cases,
    deaths: item.deaths,
    recovered: item.recovered,
  }));
});

export const fetchContinent = createAsyncThunk('home/fetchContinent', async (continentName) => {
  const base = `${url}/${continentName}`;
  // const response = await fetch(base);
  // const newContinent = {
  //   name: response.continent,
  //   population: response.population,
  //   cases: response.cases,
  //   deaths: response.deaths,
  //   recovered: response.recovered,
  // };
  console.log(base);
});

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContinents.pending, (state) => ({
      ...state,
      isloading: true,
    }))
      .addCase(fetchContinents.fulfilled, (state, action) => ({
        ...state,
        isloading: false,
        contents: action.payload,
      }))
      .addCase(fetchContinents.rejected, (state) => ({
        ...state,
        isloading: false,
      }));
  },
});

export default homeSlice.reducer;
