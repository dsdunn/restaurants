import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { RestaurantsTable } from './RestaurantsTable';

describe('<FilterForm />', () => {

  afterEach(() => {
    cleanup
  })

  it('matches the snapshot', () => {
    render(<RestaurantsTable />)
    expect(<RestaurantsTable />).toMatchSnapshot();
  })

})