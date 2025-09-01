import type { TextFieldProps, ButtonProps as MuiButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface ThemeState {
  theme: 'light' | 'dark';
}

export interface LayoutProps {
  children: ReactNode;
}

export interface NavigationItem {
  label: string;
  path: string;
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
  mode?: 'light' | 'dark';
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

export interface Stat {
  number: string;
  label: string;
}

export interface BlogContentSection {
  heading: string;
  content: string;
}

export interface Blog {
  id: string;
  title: string;
  thumbnail: string;
  content: BlogContentSection[];
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  serviceCategory: string;
  message: string;
}