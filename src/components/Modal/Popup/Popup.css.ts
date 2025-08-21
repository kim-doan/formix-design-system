import { style } from "@vanilla-extract/css";
import { vars } from "../../../theme.css";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: vars.elevation.overlay,
});

export const content = style({
  position: "relative",
  backgroundColor: vars.color.semantic.static.white,
  borderRadius: "12px",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  maxWidth: "90vw",
  maxHeight: "90vh",
  overflow: "hidden",
  outline: "none",
});

export const closeButton = style({
  position: "absolute",
  top: "20px",
  right: "20px",
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "transparent",
  color: vars.color.semantic.label.normal,
  cursor: "pointer",
  transition: "all 0.2s ease",
  zIndex: 1,

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

export const contentWrapper = style({
  overflow: "auto",
  maxHeight: "inherit",
});
