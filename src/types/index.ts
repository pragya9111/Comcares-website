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