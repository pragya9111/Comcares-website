import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { CustomButtonProps } from '../../types';

// Styled Material-UI Button with custom styling
const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'customvariant' && prop !== 'mode',
})<{ customvariant?: 'primary' | 'secondary' | 'outline'; mode?: 'light' | 'dark' }>(
  ({ theme, customvariant = 'primary', mode = 'light' }) => {
    const isDark = mode === 'dark';

    return {
      borderRadius: '9999px',
      fontWeight: 'bold',
      textTransform: 'none',
      transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
      boxShadow: 'none',

      ...(customvariant === 'primary' && {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: isDark
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          transform: 'scale(1.04)',
        },
        '&:focus': {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: '2px',
        },
      }),

      ...(customvariant === 'secondary' && {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        '&:hover': {
          backgroundColor: isDark
            ? theme.palette.secondary.light
            : theme.palette.secondary.dark,
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          transform: 'scale(1.04)',
        },
        '&:focus': {
          outline: `2px solid ${theme.palette.secondary.main}`,
          outlineOffset: '2px',
        },
      }),

      ...(customvariant === 'outline' && {
        backgroundColor: 'transparent',
        color: isDark ? theme.palette.grey[100] : theme.palette.primary.main,
        border: `2px solid ${isDark ? theme.palette.grey[400] : theme.palette.primary.main}`,
        '&:hover': {
          backgroundColor: isDark
            ? theme.palette.action.hover
            : theme.palette.action.selected,
          color: isDark ? theme.palette.primary.main : theme.palette.primary.dark,
          borderColor: isDark
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
          transform: 'scale(1.03)',
        },
        '&:focus': {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: '2px',
        },
      }),

      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: isDark ? theme.palette.grey[800] : theme.palette.grey[200],
        color: theme.palette.grey[500],
        borderColor: isDark ? theme.palette.grey[700] : theme.palette.grey[300],
        '&:hover': {
          transform: 'none',
        },
      },
    };
  }
);

const Button: React.FC<CustomButtonProps> = ({
  customvariant = 'primary',
  customsize = 'medium',
  mode = 'light',
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
      mode={mode}
      {...sizeProps[customsize]}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
