import React from 'react';
import { render, screen } from '@testing-library/react';
import { RestaurantsTable } from './RestaurantsTable';
import { testJoints, longList } from '../__mocks__/testdata';


describe('<FilterForm />', () => {

  it('matches the snapshot', () => {
    render(<RestaurantsTable filteredRestaurants={testJoints} />)
    expect(<RestaurantsTable />).toMatchSnapshot();
  })

  it('renders rows', () => {
    let { getByText } = render(<RestaurantsTable filteredRestaurants={testJoints} />)
    let row = getByText('(301) 965-4000')
    let row1 = getByText('Matsuhisa')

    expect(row).toBeTruthy();
    expect(row1).toBeTruthy();
  })

  it('doesn\'t show pagination if there are less than 11 joints', () => {
    let { queryByTestId } = render(<RestaurantsTable filteredRestaurants={testJoints} />)

    expect(queryByTestId('pagination')).toBeNull();
  })

  it('shows pagination if there are more than 10 joints', () => {
    let { queryByTestId } = render(<RestaurantsTable filteredRestaurants={longList} />)

    expect(queryByTestId('pagination')).toBeTruthy();
  })

})