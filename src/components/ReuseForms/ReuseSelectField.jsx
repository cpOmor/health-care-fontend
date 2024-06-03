import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, OutlinedInput } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ReuseSelectField = ({ name, label, options, fullWidth, sx }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl fullWidth={fullWidth} sx={sx}>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            labelId={`${name}-label`}
            id={name}
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value)}
            input={<OutlinedInput label={label} />}
            MenuProps={MenuProps}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default ReuseSelectField;
