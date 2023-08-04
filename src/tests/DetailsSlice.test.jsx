import detailsSlice, { fetchCountries, initialState } from '../redux/details/detailsSlice';

describe('testing details slice', () => {
  it('should update valueList when fetchCountries is fulfilled', () => {
    const payload = [{
      name: 'USA', flag: 'flag', continent: 'North America', population: 328200000, cases: 1000000, deaths: 50000, recovered: 500000,
    }];
    const action = { type: fetchCountries.fulfilled.type, payload };
    const state = detailsSlice(initialState, action);
    expect(state.valueList).toEqual(payload);
  });
});
