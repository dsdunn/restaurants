import React from 'react';
import { Paper, TextField, Select, InputLabel, FormControl, Button, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '1em',
    margin: '2em auto',
  },
  select: {
    minWidth: 120,
    margin: '1em 2em'
  },
  input: {
    margin: '0.5em 2em'
  }
})


export const FilterForm = () => {
  const classes = useStyles();

  return (
    <Paper>
      <form className={classes.form} >
        <TextField variant="outlined" label="search" placeholder="name/city/genre" className={classes.input}/>
        <div>
          <FormControl className={classes.select} >
            <InputLabel shrink >State</InputLabel>
            <Select id="state">
              <MenuItem key="all" value={'All'} selected >All</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.select}>
            <InputLabel shrink>Genre</InputLabel>
            <Select id="genre">
              <MenuItem key="all" value={'All'}>All</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button variant="contained" type="submit" className={classes.input}>Search</Button>
      </form>
    </Paper>
    )
}