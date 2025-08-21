import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const snackbar = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 0px 12px 16px",
  borderRadius: "12px",
  backgroundColor: `color-mix(in srgb, ${vars.color.semantic.inverse.background} 52%, transparent)`,
  color: vars.color.semantic.static.white,
  width: "420px",
  maxHeight: "400px",
  wordBreak: "break-word",
  boxSizing: "border-box",
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: vars.color.semantic.static.white,
  flexShrink: 0,
  boxSizing: "border-box",
  marginTop: "2px",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1,
});

export const textContent = style({
  display: "flex",
  flexDirection: "column",
});

export const heading = style({
  ...vars.typography.body2Normal,
  fontWeight: 600,
  margin: 0,
});

export const description = style({
  ...vars.typography.label2,
  fontWeight: 400,
  margin: 0,
});
