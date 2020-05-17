import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FilterForm } from './FilterForm';

const mockProps = {
  criteria: {terms: '', city: '', genre: ''},
  setCriteria: jest.fn(),
  genres: ['Steak', 'Sushi']
}

describe('<FilterForm />', () => {

  afterEach(() => {
    cleanup
  })

  it('matches the snapshot', () => {
    render(<FilterForm {...mockProps} />)
    expect(<FilterForm />).toMatchSnapshot();
  })

})