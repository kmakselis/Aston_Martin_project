import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const AutoSelectField = ({
  options,
  value,
  onChange,
}) => (
  <Autocomplete
    disablePortal
    options={options}
    sx={{ width: '100%' }}
    value={value}
    onChange={onChange}
    renderInput={({
      InputLabelProps,
      InputProps,
      inputProps,
      fullWidth,
      id,
    }) => (
      <TextField
        label="Spalvos"
        InputLabelProps={InputLabelProps}
        InputProps={InputProps}
        fullWidth={fullWidth}
        id={id}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        inputProps={inputProps}
      />
    )}
  />
);

export default AutoSelectField;
