import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const chipBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  outline: "none",
  position: "relative",
  overflow: "hidden",
  userSelect: "none",
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
});

export const variants = styleVariants({
  solid: [
    chipBase,
    {
      backgroundColor: vars.color.semantic.fill.normal,
      color: vars.color.semantic.label.alterNative,
      "--before-bg-color": vars.color.semantic.label.normal,
      selectors: {
        "&:hover::before": {
          opacity: 0.075,
        },
        "&:focus-visible::before": {
          opacity: 0.12,
        },
        "&:active::before": {
          opacity: 0.18,
        },
      },
    },
  ],
  outlined: [
    chipBase,
    {
      backgroundColor: "transparent",
      border: `1px solid ${vars.color.semantic.line.neutral}`,
      color: vars.color.semantic.label.alterNative,
      "--before-bg-color": vars.color.semantic.label.normal,
      selectors: {
        "&:hover::before": {
          opacity: 0.0375,
        },
        "&:focus-visible::before": {
          opacity: 0.06,
        },
        "&:active::before": {
          opacity: 0.09,
        },
      },
    },
  ],
});

export const activeVariants = styleVariants({
  solid: [
    chipBase,
    {
      backgroundColor: vars.color.semantic.label.strong,
      color: vars.color.semantic.inverse.label,
      "--before-bg-color": vars.color.semantic.inverse.label,
      selectors: {
        "&:hover::before": {
          opacity: 0.075,
        },
        "&:focus-visible::before": {
          opacity: 0.12,
        },
        "&:active::before": {
          opacity: 0.18,
        },
      },
    },
  ],
  outlined: [
    chipBase,
    {
      backgroundColor: `color-mix(in srgb, ${vars.color.semantic.primary.normal} 5%, transparent)`,
      border: `1px solid ${vars.color.semantic.primary.normal}`,
      color: vars.color.semantic.primary.normal,
      "--before-bg-color": vars.color.semantic.primary.normal,
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
    },
  ],
});

export const sizes = styleVariants({
  xsmall: {
    padding: "4px 7px",
    fontWeight: 500,
    ...vars.typography.caption1,
  },
  small: {
    padding: "6px 8px",
    fontWeight: 500,
    ...vars.typography.label2,
  },
  medium: {
    padding: "7px 11px",
    fontWeight: 500,
    ...vars.typography.body2Normal,
  },
  large: {
    padding: "9px 12px",
    fontWeight: 500,
    ...vars.typography.body1Normal,
  },
});

export const active = styleVariants({
  solid: {},
  outlined: {},
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
