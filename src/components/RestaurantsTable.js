import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

export const RestaurantsTable = ({ filteredRestaurants = [] }) => {
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    setPage(1);
  },[filteredRestaurants])


  let numJoints = filteredRestaurants.length;
  let oddNum = numJoints % 10 !== 0;
  let numPages = Math.floor(numJoints / 10);

  numPages = oddNum ? numPages + 1 : numPages;

  const handleChange = (event, value) => {
    setPage(value);
  };

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
    <div data-testid="restaurants-table">
      <div className="pagination">
        { numPages > 1 && 
          <Pagination data-testid="pagination" count={numPages} page={page} onChange={handleChange}/>
        }
      </div>
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
            { rows.length ? rows.slice((page - 1) * 10, page * 10)
              : <TableRow>
                  <TableCell colSpan="4">Sorry, no restaurants match your search criteria</TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    )
}