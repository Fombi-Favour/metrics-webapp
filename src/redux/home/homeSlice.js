import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];
const url = 'https://corona.lmao.ninja/v2/continents';

export const fetchData = createAsyncThunk('home/fetchContinent', async () => {
  const response = await fetch(url);
  const res = await response.json();
  console.log(res);
});

const homeSlice = createSlice({
  name: 'home',
  initialState,
});

export default homeSlice.reducer;
