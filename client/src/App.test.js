import React from 'react';
import { render, cleanup, act, screen } from '@testing-library/react';
import { getRestaurants } from './fetch';
import { filter, getRestaurantsAndGenres } from './utils';

import App from './App';

jest.mock('./fetch');
jest.mock('./utils');

// getRestaurantsAndGenres.mockResolvedValueOnce({restaurants: [], genres: []})

// const mockGetRestaurants = jest.fn(() => Promise.resolve([{ data: 'some data'}]));

describe('<App>', () => {
  let promise;

  beforeEach(() => {
    promise = Promise.resolve()
  })

  afterEach(() => {
    cleanup;
  });

  it('should match the snapshot', async () => {
    const { asFragment } = render( <App />);

    expect(asFragment(<App />)).toMatchSnapshot();
    await act(() => promise);
  });

  it('should call getRestuarants', async () => {
    render( <App />);
    expect(getRestaurants).toBeCalled();
    await act(() => promise);
  })

  it('should call getRestuarantsAndGenres', async () => {
    render( <App />);
    expect(getRestaurantsAndGenres).toBeCalled();

    await act(() => promise);
  })

  it('should render the FilterForm', async () => {
    render( <App />);
    const element = screen.getByTestId('filter-form');

    expect(element).toBeTruthy();
    await act(() => promise);
  })

  it('should render the Restaurants Table', async () => {
    render( <App />);
    const element = screen.getByTestId('restaurants-table');

    expect(element).toBeTruthy();
    await act(() => promise);
  })
});