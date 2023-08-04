// import { configureStore } from '@reduxjs/toolkit';
import homeSlice, { fetchContinents } from '../redux/home/homeSlice';

describe('testing homeslice', () => {
  it('should set isLoading to false and contents to the fetched data when fetchContinents.fulfilled is called', () => {
    const data = [{ name: 'Asia', population: 1000 }];
    const state = homeSlice.reducer(
      data,
      fetchContinents.fulfilled(data),
    );
    expect(state.isLoading).toBe(false);
    expect(state.contents).toEqual(data);
  });
});
