import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  contents: [],
  isloading: false,
};
const url = 'https://corona.lmao.ninja/v2/continents';

export const fetchContinents = createAsyncThunk('home/fetchContinent', async () => {
  const response = await fetch(url);
  const res = await response.json();
  console.log(res);
  return res.map((item) => ({
    name: item.continent,
    population: item.population,
    cases: item.cases,
    deaths: item.deaths,
    recovered: DataTransferItemList.recovered,
  }));
});

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
