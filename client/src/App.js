import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@material-ui/core';

import { FilterForm } from './components/FilterForm';
import { PageControl } from './components/Pagination';
import { RestaurantsTable } from './components/RestaurantsTable';


function App() {
  return (
    <Box>
      <Container className="App">
        <Typography variant="h1">Restaurants</Typography>
        <FilterForm />
        <PageControl />
        <RestaurantsTable />
      </Container>
    </Box>
  );
}

export default App;
