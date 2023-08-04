import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../redux/home/homeSlice';
import Home from '../routes/Home';

describe('test home route', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        home: homeReducer,
      },
    });
  });

  it('should render without crashing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );
  });
});
