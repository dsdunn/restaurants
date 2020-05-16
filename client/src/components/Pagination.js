import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export const PageControl = (page = 1, updatePage = () => {}) => {
  return (
    <Pagination count={3} />
    )
}