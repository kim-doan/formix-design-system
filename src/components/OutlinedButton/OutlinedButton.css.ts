import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const buttonBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  outline: "none",
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    backgroundColor: "var(--before-bg-color, currentColor)",
    opacity: 0,
  },
  selectors: {
    "&:hover::before": {
      opacity: 0.05,
    },
    "&:focus-visible::before": {
      opacity: 0.08,
    },
    "&:active::before": {
      opacity: 0.12,
    },
  },
});

export const variants = styleVariants({
  primary: [
    buttonBase,
    {
      backgroundColor: "transparent",
      border: `1px solid ${vars.color.semantic.primary.normal}`,
      color: vars.color.semantic.primary.normal,
      "--before-bg-color": vars.color.semantic.primary.normal,
    },
  ],
  secondary: [
    buttonBase,
    {
      backgroundColor: "transparent",
      border: `1px solid ${vars.color.semantic.line.normal}`,
      color: vars.color.semantic.primary.normal,
      "--before-bg-color": vars.color.semantic.label.normal,
    },
  ],
  assistive: [
    buttonBase,
    {
      backgroundColor: "transparent",
      border: `1px solid ${vars.color.semantic.line.normal}`,
      color: vars.color.semantic.label.normal,
      "--before-bg-color": vars.color.semantic.label.normal,
    },
  ],
});

export const sizes = styleVariants({
  small: {
    padding: "7px 14px",
    fontWeight: 600,
    ...vars.typography.label2,
  },
  medium: {
    padding: "9px 20px",
    fontWeight: 600,
    ...vars.typography.body2Normal,
  },
  large: {
    padding: "12px 28px",
    fontWeight: 600,
    ...vars.typography.body1Normal,
  },
});

export const iconButtonSizes = styleVariants({
  small: {
    padding: "7px",
  },
  medium: {
    padding: "10px",
  },
  large: {
    padding: "12px",
  },
});

export const disabled = style({
  backgroundColor: "transparent",
  border: `1px solid ${vars.color.semantic.line.normal}`,
  color: vars.color.semantic.label.disable,
  cursor: "not-allowed",
  selectors: {
    "&:hover::before": {
      opacity: 0,
    },
    "&:focus-visible::before": {
      opacity: 0,
    },
    "&:active::before": {
      opacity: 0,
    },
  },
});
