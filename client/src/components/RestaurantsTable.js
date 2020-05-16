import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

export const RestaurantsTable = ( filteredRestaurants ) => {
  return (
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Genres</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>

    )
}