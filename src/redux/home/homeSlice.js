import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  contents: [],
  isloading: false,
};
const url = 'https://corona.lmao.ninja/v2/continents';

export const fetchContinents = createAsyncThunk('home/fetchContinent', async () => {
  const response = await fetch(url);
  const res = await response.json();
  return res.map((item) => ({
    name: item.continent,
    population: item.population,
    cases: item.cases,
    deaths: item.deaths,
    recovered: item.recovered,
  }));
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
