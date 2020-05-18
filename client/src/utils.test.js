import react from 'React';
import { filter, getRestaurantsAndGenres } from './utils';
import { getRestaurants } from './fetch';
import { testJoints, longList } from './__mocks__/testData';

describe('utils', () => {

  test('filter applies criteria', () => {

    expect(testJoints.length).toBe(2);
    let filteredResults = filter(testJoints, {terms: '', state: 'CO', genre: ''});

    filteredResults = filter(testJoints, {terms: '', state: '', genre: 'Steak'});
    expect(filteredResults.find(joint => joint.genre.includes('Steak'))).toBeTruthy();
    expect(filteredResults.find(joint => joint.genre.includes('Sushi'))).toBe(undefined);
    expect(filteredResults.length).toBe(1);
    filteredResults = filter(testJoints, {terms: 'NoJointHasThisName', state: '', genre: ''});
    expect(filteredResults.length).toBe(0);
    filteredResults = filter(testJoints, {terms: '', state: '', genre: ''});
    expect(filteredResults.length).toBe(2);
  })

  test('getRestaurantsAndGenres returns correct data format', () => {

    expect(testJoints[0].genre.includes(' ')).toBe(false);
    
    let results = getRestaurantsAndGenres(testJoints);
    let { formattedRestaurants, genres } = results;

    expect(formattedRestaurants).toBeTruthy();
    expect(formattedRestaurants.length).toBe(2);
    expect(Array.isArray(formattedRestaurants)).toBeTruthy();
    expect(genres).toBeTruthy();
    expect(Array.isArray(genres)).toBeTruthy();
    expect(typeof genres[0]).toBe('string');
    expect(formattedRestaurants[0].genre.includes(' ')).toBeTruthy();
  })
})

describe('getRestaurants', () => {

  it('calls fetch', async () => {
    const promise = Promise.resolve({json: () => 'some json'});
    const mockFetch = jest.fn(() => promise)
    window.fetch = mockFetch;

    expect(mockFetch).not.toBeCalled();
    getRestaurants();
    expect(mockFetch).toBeCalled();
  })


})