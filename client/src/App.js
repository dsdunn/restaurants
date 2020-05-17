import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { FilterForm } from './components/FilterForm';
import { RestaurantsTable } from './components/RestaurantsTable';

import { getRestaurants } from './fetch';
import { filter, getGenres } from './utils';

function App() {
  const [ allRestaurants, setAllRestaurants ] = useState([]);
  const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ criteria, setCriteria ] = useState({
    terms: '',
    state: '',
    genre: ''
  });
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    const init = async() => {
      let restaurants = await getRestaurants();
      let { formattedRestaurants, genres } = getGenres(restaurants);

      setAllRestaurants(formattedRestaurants);
      setGenres(genres);
    }

    init();
  }, [])

  useEffect(() => {
    let filtered = filter(allRestaurants, criteria)

    setFilteredRestaurants(filtered);
  })

  return (
    <Box>
      <Container className="App">
        <Typography variant="h1" align="center" gutterBottom >Restaurants</Typography>
        <FilterForm criteria={criteria} setCriteria={setCriteria} genres={genres}/>
        <div className="pagination">
          <Pagination count={3}/>
        </div>
        <RestaurantsTable filteredRestaurants={filteredRestaurants} />
      </Container>
    </Box>
  );
}

export default App;
