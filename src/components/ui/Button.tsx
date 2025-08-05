import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { CustomButtonProps } from '../../types';

// Styled Material-UI Button with custom styling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledButton = styled(MuiButton)<{ customvariant?: 'primary' | 'secondary' | 'outline' }>(({ theme, customvariant = 'primary' }) => ({
  borderRadius: '9999px', // rounded-full
  fontWeight: 'bold',
  textTransform: 'none',
  transition: 'all 0.2s ease-in-out',

  ...(customvariant === 'primary' && {
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      backgroundColor: '#e5e7eb', // gray-200
      transform: 'scale(1.05)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    },
    '&:focus': {
      outline: '2px solid white',
      outlineOffset: '2px',
    },
  }),

  ...(customvariant === 'secondary' && {
    backgroundColor: '#4b5563', // gray-600
    color: 'white',
    '&:hover': {
      backgroundColor: '#6b7280', // gray-500
      transform: 'scale(1.05)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    },
    '&:focus': {
      outline: '2px solid #6b7280',
      outlineOffset: '2px',
    },
  }),

  ...(customvariant === 'outline' && {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid #4b5563', // gray-600
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'white',
      transform: 'scale(1.02)',
    },
    '&:focus': {
      outline: '2px solid white',
      outlineOffset: '2px',
    },
  }),

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    '&:hover': {
      transform: 'none',
    },
  },
}));

const Button: React.FC<CustomButtonProps> = ({
  customvariant = 'primary',
  customsize = 'medium',
  children,
  ...props
}) => {
  const sizeProps = {
    small: { size: 'small' as const, sx: { py: 1, px: 3 } },
    medium: { size: 'medium' as const, sx: { py: 1.5, px: 4 } },
    large: { size: 'large' as const, sx: { py: 2, px: 6 } },
  };

  return (
    <StyledButton
      customvariant={customvariant}
      {...sizeProps[customsize]}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
