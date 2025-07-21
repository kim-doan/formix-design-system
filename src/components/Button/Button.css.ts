import { style, styleVariants } from '@vanilla-extract/css';

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 24px',
  borderRadius: '8px',
  border: 'none',
  fontSize: '16px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  outline: 'none',
  ':hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  ':active': {
    transform: 'translateY(0)',
  },
  ':focus-visible': {
    boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  },
});

export const variants = styleVariants({
  primary: [buttonBase, {
    backgroundColor: '#4F46E5',
    color: 'white',
    ':hover': {
      backgroundColor: '#4338CA',
    },
  }],
  secondary: [buttonBase, {
    backgroundColor: '#E5E7EB',
    color: '#1F2937',
    ':hover': {
      backgroundColor: '#D1D5DB',
    },
  }],
  danger: [buttonBase, {
    backgroundColor: '#EF4444',
    color: 'white',
    ':hover': {
      backgroundColor: '#DC2626',
    },
  }],
});

export const sizes = styleVariants({
  small: {
    padding: '6px 16px',
    fontSize: '14px',
  },
  medium: {
    padding: '10px 24px',
    fontSize: '16px',
  },
  large: {
    padding: '14px 32px',
    fontSize: '18px',
  },
});

export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
  ':hover': {
    transform: 'none',
    boxShadow: 'none',
  },
});