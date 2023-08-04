// import { configureStore } from '@reduxjs/toolkit';
import homeSlice, { fetchContinents } from '../redux/home/homeSlice';

describe('testing homeslice', () => {
  it('should set isLoading to false and contents to the fetched data when fetchContinents.fulfilled is called', () => {
    const state = {
      contents: [],
      continent: [],
      isloading: true,
    };
    const data = [{ name: 'Asia', population: 1000 }];
    const action = { type: fetchContinents.fulfilled.type, payload: data };
    const expectedState = {
      contents: data,
      continent: [],
      isloading: false,
    };
    expect(homeSlice(state, action)).toEqual(expectedState);
  });
});
