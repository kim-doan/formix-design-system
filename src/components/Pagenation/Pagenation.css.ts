import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const container = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
});

export const navButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "transparent",
  color: vars.color.semantic.label.normal,
  cursor: "pointer",
  transition: "all 0.2s ease",
  outline: "none",

  ":hover": {
    backgroundColor: vars.color.semantic.fill.normal,
  },

  ":focus-visible": {
    backgroundColor: vars.color.semantic.fill.normal,
    outline: `2px solid ${vars.color.semantic.primary.normal}`,
    outlineOffset: "1px",
  },

  ":active": {
    backgroundColor: vars.color.semantic.fill.strong,
  },

  ":disabled": {
    opacity: 0.3,
  },
});

export const pageNumbers = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "2px",
  margin: "0 4px",
});

export const pageButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "32px",
  height: "32px",
  padding: "0 8px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "transparent",
  color: vars.color.semantic.label.neutral,
  cursor: "pointer",
  transition: "all 0.2s ease",
  outline: "none",
  ...vars.typography.body2Normal,
  fontWeight: 500,

  ":hover": {
    backgroundColor: vars.color.semantic.fill.normal,
  },

  ":focus-visible": {
    backgroundColor: vars.color.semantic.fill.normal,
    outline: `2px solid ${vars.color.semantic.primary.normal}`,
    outlineOffset: "1px",
  },

  ":active": {
    backgroundColor: vars.color.semantic.fill.strong,
  },
});

export const active = style({
  backgroundColor: vars.color.semantic.fill.strong,
  color: vars.color.semantic.label.strong,

  ":hover": {
    backgroundColor: vars.color.semantic.fill.strong,
  },

  ":focus-visible": {
    backgroundColor: vars.color.semantic.fill.strong,
    outline: `2px solid ${vars.color.semantic.primary.strong}`,
    outlineOffset: "1px",
  },

  ":active": {
    backgroundColor: vars.color.semantic.fill.strong,
  },
});

export const disabled = style({
  color: vars.color.semantic.label.disable,
  cursor: "not-allowed",

  ":hover": {
    backgroundColor: "transparent",
  },

  ":focus-visible": {
    backgroundColor: "transparent",
    outline: "none",
  },

  ":active": {
    backgroundColor: "transparent",
  },
});
