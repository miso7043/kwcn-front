import type React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import type { SxProps, Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// Local-only shared styles (not exported)
const menuItemSx = {
  color: 'inherit',
  '&:hover': { bgcolor: '#FFF8E1', color: 'inherit' },
  '&.Mui-selected': { bgcolor: '#FFE082', color: 'inherit' },
  '&.Mui-selected:hover': { bgcolor: '#FFE082', color: 'inherit' },
  '&:focus': { outline: 'none' },
  '&:focus-visible': { outline: 'none' },
  '&.Mui-focusVisible': { outline: 'none' },
} as const;

const buttonSx = {
  '&:hover': { bgcolor: '#FFF8E150', color: 'inherit' },
  '&:focus': { outline: 'none' },
  '&:focus-visible': { outline: 'none' },
  '&.Mui-focusVisible': { outline: 'none' },
} as const;

const buttonSelectedSx = {
  bgcolor: '#FFE08270',
  color: 'inherit',
  '&:hover': { bgcolor: '#FFE08250', color: 'inherit' },
} as const;

export type NavButtonProps = {
  children: React.ReactNode;
  to?: string;
  selected?: boolean;
  sx?: SxProps<Theme>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  ml?: number; // optional left margin
};

export function NavButton({ children, to, selected, sx, onClick, ml }: NavButtonProps) {
  const isLink = Boolean(to);
  return (
    <Button
      color="inherit"
      {...(isLink ? { component: Link, to } : {})}
      onClick={onClick}
      sx={{ ...(ml ? { ml } : {}), ...buttonSx, ...(selected ? buttonSelectedSx : {}), ...(sx as object) }}
    >
      {children}
    </Button>
  );
}

export type NavMenuItemProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  sx?: SxProps<Theme>;
};

export function NavMenuItem({ children, to, onClick, onMouseEnter, onMouseLeave, sx }: NavMenuItemProps) {
  const isLink = Boolean(to);
  return (
    <MenuItem
      {...(isLink ? { component: Link, to } : {})}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{ ...menuItemSx, ...(sx as object) }}
    >
      {children}
    </MenuItem>
  );
}
