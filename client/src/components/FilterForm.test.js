import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { FilterForm } from './FilterForm';

const mockSetCriteria = jest.fn();

const mockProps = {
  criteria: {terms: '', city: '', genre: ''},
  setCriteria: mockSetCriteria,
  genres: ['Steak', 'Sushi']
}

describe('<FilterForm />', () => {

  it('matches the snapshot', () => {
    render(<FilterForm {...mockProps} />)
    expect(<FilterForm />).toMatchSnapshot();
  })

  it('has a genre select', () => {
    let { getByTestId } = render(<FilterForm {...mockProps} />)
    let element = getByTestId('genre-input');

    expect(element).toBeTruthy;
    expect(element.value).toBe('');
    fireEvent.change(element, {target: {name: 'genre', value: 'Steak'}});
    expect(element.value).toBe('Steak');
    fireEvent.change(element, {target: {name: 'genre', value: 'French'}});
    expect(element.value).toBe('French');
  }) 

  it('has a state select', () => {
    let { getByTestId } = render(<FilterForm {...mockProps} />)
    let element = getByTestId('state-input');

    expect(element).toBeTruthy;
    expect(element.value).toBe('');
    fireEvent.change(element, {target: {name: 'state', value: 'VA'}});
    expect(element.value).toBe('VA');
    fireEvent.change(element, {target: {name: 'state', value: 'CA'}});
    expect(element.value).toBe('CA');
  })

  it('has a searchfield', () => {
    let { getByTestId } = render(<FilterForm {...mockProps} />)
    let element = getByTestId('terms-input');

    expect(element).toBeTruthy;
    expect(element.value).toBe('');
    fireEvent.change(element, {target: {name: 'terms', value: 'Old'}});
    expect(element.value).toBe('Old');
  })

  it('has a working submit button', () => {
    let { getByTestId } = render(<FilterForm {...mockProps} />)
    // let form = getByTestId('filter-form')
    let button = getByTestId('filter-form-submit-button');

    fireEvent.click(button);
    expect(mockSetCriteria).toBeCalled();
  })  

  it('calls setCriteria on submit', () => {
    let { getByTestId } = render(<FilterForm {...mockProps} />)
    let form = getByTestId('filter-form')

    fireEvent.submit(form);
    expect(mockSetCriteria).toBeCalled();
  })

})