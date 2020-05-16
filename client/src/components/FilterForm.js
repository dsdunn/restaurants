import React from 'react';
import { Paper, TextField, Button, MenuItem } from '@material-ui/core';

export const FilterForm = () => {
  return (
    <Paper>
      <form>
        <TextField variant="outlined" label="search" placeholder="search" />
        <TextField select label="state">
          <MenuItem key="all" value={null}>All</MenuItem>
        </TextField>
        <TextField select label="genre">
          <MenuItem key="all" value={null}>All</MenuItem>
        </TextField>
        <Button variant="contained" type="submit">Search</Button>
      </form>
    </Paper>
    )
}