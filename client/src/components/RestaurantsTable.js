import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

export const RestaurantsTable = ({ filteredRestaurants } = [] ) => {

  const rows = filteredRestaurants.map((joint, index) => {
    return  (
      <TableRow key={index}>
        <TableCell>{joint.name}</TableCell>
        <TableCell>{`${joint.city}, ${joint.state}`}</TableCell>
        <TableCell>{joint.telephone}</TableCell>
        <TableCell>{joint.genre}</TableCell>
      </TableRow>
      )
  })

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
        <TableBody>
          { rows.length ? rows
            : <TableRow>
                <TableCell>Sorry, no restaurants match your search criteria</TableCell>
              </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>

    )
}