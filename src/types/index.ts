import type { TextFieldProps, ButtonProps as MuiButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface ThemeState {
  theme: 'light' | 'dark';
}

export interface LayoutProps {
  children: ReactNode;
}

export interface DropdownItem {
  label: string;
  icon: ReactNode;
  to: string;
}

export interface DropdownProps {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  descriptions?: string[];
  width?: 'w-72' | 'w-80' | 'w-64';
}

export interface CustomInputProps extends Omit<TextFieldProps, 'variant'> {
  variant?: 'outlined' | 'filled' | 'standard';
}

export interface CustomButtonProps extends Omit<MuiButtonProps, 'variant'> {
  customvariant?: 'primary' | 'secondary' | 'outline';
  customsize?: 'small' | 'medium' | 'large';
}

export interface CustomTextareaProps extends Omit<TextFieldProps, 'variant' | 'multiline'> {
  variant?: 'outlined' | 'filled' | 'standard';
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

// Form data interface
export interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  serviceCategory: string;
  message: string;
}


export interface ContactFormProps {
  className?: string;
}