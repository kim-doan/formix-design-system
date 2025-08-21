import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const toastBase = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "14px",
  padding: "12px 16px",
  borderRadius: "12px",
  ...vars.typography.body2Normal,
  fontWeight: 600,
  width: "420px",
  maxHeight: "400px",
  wordBreak: "break-word",
  boxSizing: "border-box",
});

export const variants = styleVariants({
  normal: [
    toastBase,
    {
      backgroundColor: `color-mix(in srgb, ${vars.color.semantic.inverse.background} 52%, transparent)`,
      color: vars.color.semantic.static.white,
    },
  ],
  positive: [
    toastBase,
    {
      backgroundColor: `color-mix(in srgb, ${vars.color.semantic.inverse.background} 52%, transparent)`,
      color: vars.color.semantic.static.white,
    },
  ],
  cautionary: [
    toastBase,
    {
      backgroundColor: `color-mix(in srgb, ${vars.color.semantic.inverse.background} 52%, transparent)`,
      color: vars.color.semantic.static.white,
    },
  ],
  negative: [
    toastBase,
    {
      backgroundColor: `color-mix(in srgb, ${vars.color.semantic.inverse.background} 52%, transparent)`,
      color: vars.color.semantic.static.white,
    },
  ],
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: vars.color.semantic.static.white,
  boxSizing: "border-box",
});

export const iconVariants = styleVariants({
  normal: {
    color: vars.color.semantic.static.white,
  },
  positive: {
    color: vars.color.semantic.status.positive,
  },
  cautionary: {
    color: vars.color.semantic.status.cautionary,
  },
  negative: {
    color: vars.color.semantic.status.negative,
  },
});
