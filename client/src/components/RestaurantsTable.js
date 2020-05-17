import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';


const rows = ['', '', '', ''];

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
        <TableBody>
          { rows.map((row, index) => {
            return  (
              <TableRow key={index}>
                <TableCell>Arby's</TableCell>
                <TableCell>Kingston, AL</TableCell>
                <TableCell>592-222-8765</TableCell>
                <TableCell>cheep garbage</TableCell>
              </TableRow>
              )
          })}
        </TableBody>
      </Table>
    </TableContainer>

    )
}