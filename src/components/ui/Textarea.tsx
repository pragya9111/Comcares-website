import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { CustomTextareaProps } from '../../types';

// Styled Material-UI TextField for textarea with custom dark theme styling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledTextarea = styled(TextField)(({ theme }) => ({
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
      borderColor: 'white',
      borderWidth: '2px',
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
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
}));

const Textarea: React.FC<CustomTextareaProps> = ({
  variant = 'outlined',
  fullWidth = true,
  rows = 4,
  resize = 'none',
  ...props
}) => {
  const resizeStyle = { resize } as React.CSSProperties;

  return (
    <StyledTextarea
      variant={variant}
      fullWidth={fullWidth}
      multiline
      rows={rows}
      slotProps={{
        input: {
          style: resizeStyle,
        },
      }}
      {...props}
    />
  );
};

export default Textarea;
