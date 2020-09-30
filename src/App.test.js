import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { getRestaurants } from './fetch';
import { filter, getRestaurantsAndGenres } from './utils';

import App from './App';

jest.mock('./fetch');
jest.mock('./utils');

describe('<App>', () => {
  let promise;

  beforeEach(() => {
    promise = Promise.resolve()
  })

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
    const { getByTestId } = render( <App />);
    const element = getByTestId('filter-form');

    expect(element).toBeTruthy();
    await act(() => promise);
  })

  it('should render the Restaurants Table', async () => {
    const { getByTestId } = render( <App />);
    const element = getByTestId('restaurants-table');

    expect(element).toBeTruthy();
    await act(() => promise);
  })

  it('should render the Restaurants Table', async () => {
    const { getByTestId } = render( <App />);
    let element = getByTestId('genre-input');

    expect(element).toBeTruthy();
    await act(() => promise);
  })
});















