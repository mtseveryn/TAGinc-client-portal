import React, { useState } from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const ComboBox = ({ selections, type, path }) => {
  const companies = [
    { name: 'Client 1' },
    { name: 'Client 2' },
    { name: 'Client 3' },
    { name: 'Client 4' },
  ];

  const options = companies.map((el) => el.name);

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={9}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="clients"
            options={options}
            getOptionLabel={(option) => option}
            // style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Clients" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            onClick={() => {
              value && console.log(value);
            }}
            variant="outlined"
            fullWidth
            style={{ height: '56px' }}
          >
            Open Client Page
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ComboBox;
