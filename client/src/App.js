import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { FilterForm } from './components/FilterForm';
import { RestaurantsTable } from './components/RestaurantsTable';


function App() {
  return (
    <Box>
      <Container className="App">
        <Typography variant="h1" align="center" gutterBottom >Restaurants</Typography>
        <FilterForm />
        <div className="pagination">
          <Pagination count={3}/>
        </div>
        <RestaurantsTable />
      </Container>
    </Box>
  );
}

export default App;
