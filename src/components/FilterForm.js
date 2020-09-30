import React, { useState } from 'react';
import { Paper, TextField, Select, InputLabel, FormControl, Button, MenuItem, makeStyles } from '@material-ui/core';

import { statesSet } from '../states';

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


export const FilterForm = ({ criteria, setCriteria, genres }) => {

  const classes = useStyles();
  const [ terms, setTerms ] = useState('')

  const handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;

    if (name === "terms") {
      setTerms(value)
      if (!value) updateCriteria({name: 'terms', value});
      return;
    };

    updateCriteria({name, value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCriteria({name: 'terms', value: terms});
  }

  const updateCriteria = ({ name, value }) => {
    setCriteria({
      ...criteria,
      [name]: value
    })
  }

  return (
    <Paper>
      <form data-testid="filter-form" className={classes.form} onSubmit={handleSubmit} >
        <TextField id="terms-input" inputProps={{"data-testid": "terms-input"}} variant="outlined" label="search" name="terms" placeholder="name/city/genre" className={classes.input} onChange={handleChange}/>
        <div>
          <FormControl className={classes.select} >
            <InputLabel shrink id="state-input-label">State</InputLabel>
            <Select id="state-input" inputProps={{"data-testid": "state-input"}} name="state" value={criteria.state || ""} labelId="state-input-label" displayEmpty onChange={handleChange}>
              <MenuItem key="all" value="" >All</MenuItem>
              { statesSet.map(state => {
                return (
                  <MenuItem value={state[1]} key={`state-select-${state[0]}`}>{state[0]}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
          <FormControl className={classes.select}>
            <InputLabel shrink id="genre-input-label">Genre</InputLabel>
            <Select id="genre-input" inputProps={{"data-testid": "genre-input"}} name="genre" value={criteria.genre || ""} labelId="genre-input-label" displayEmpty onChange={handleChange}>
              <MenuItem key="all" value="">All</MenuItem>
              { genres.map(genre => {
                return (
                  <MenuItem value={genre} key={`genre-select-${genre}`}>{genre}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </div>
        <Button data-testid="filter-form-submit-button" variant="contained" type="submit" className={classes.input}>Search</Button>
      </form>
    </Paper>
    )
}