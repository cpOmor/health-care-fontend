import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface ReuseInputFieldProps {
  name: string;
  label: string;
  type?: string;
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  sx?: any;
}

const ReuseInputField: React.FC<ReuseInputFieldProps> = ({ name, label, type = 'text', size = 'medium', fullWidth = false, sx }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          size={size}
          variant="outlined"
          fullWidth={fullWidth}
          sx={sx}
          InputProps={sx && { ...sx.inputProps }}
        />
      )}
    />
  );
};

export default ReuseInputField;
