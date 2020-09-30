import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@material-ui/core';

import { FilterForm } from './components/FilterForm';
import { RestaurantsTable } from './components/RestaurantsTable';

import { getRestaurants } from './fetch';
import { filter, getRestaurantsAndGenres } from './utils';

function App() {
  const [ allRestaurants, setAllRestaurants ] = useState([]);
  const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ criteria, setCriteria ] = useState({
    terms: '',
    state: '',
    genre: ''
  });

  useEffect(() => {
    const init = async() => {
      let restaurants = await getRestaurants();
      let { formattedRestaurants, genres } = getRestaurantsAndGenres(restaurants);

      setAllRestaurants(formattedRestaurants);
      setFilteredRestaurants(formattedRestaurants);
      setGenres(genres);
    }

    init();
  }, [])

  useEffect(() => {
    let filtered = filter(allRestaurants, criteria)

    setFilteredRestaurants(filtered);
  }, [criteria])

  return (
    <Box>
      <Container className="App">
        <Typography variant="h1" align="center" gutterBottom >Restaurants</Typography>
        <FilterForm criteria={criteria} setCriteria={setCriteria} genres={genres}/>
        <RestaurantsTable filteredRestaurants={filteredRestaurants} />
      </Container>
    </Box>
  );
}

export default App;
