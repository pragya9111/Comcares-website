import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { CustomInputProps } from '../../types';

// Styled Material-UI TextField with custom dark theme styling
const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#4b5563', // gray-600
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: '#6b7280', // gray-500
    },
    '&.Mui-focused fieldset': {
      borderColor: "#1b94cc", // blue-600 (nearest)
      borderWidth: '1.5px',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#9ca3af', // gray-400
    '&.Mui-focused': {
      color: 'white',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
    '&::placeholder': {
      color: '#9ca3af', // gray-400
      opacity: 1,
    },
  },
}));

const Input: React.FC<CustomInputProps> = ({
  variant = 'outlined',
  fullWidth = true,
  ...props
}) => {
  return (
    <StyledTextField
      variant={variant}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default Input;
