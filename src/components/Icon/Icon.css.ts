import { style, styleVariants, globalStyle } from "@vanilla-extract/css";

export const iconBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  flexShrink: 0,
  userSelect: "none",
  fill: "currentColor",
  "::selection": {
    backgroundColor: "transparent",
  },
});

globalStyle(`${iconBase} svg`, {
  width: "100%",
  height: "100%",
  display: "block",
});

export const sizes = styleVariants({
  xsmall: {
    width: "12px",
    height: "12px",
  },
  small: {
    width: "16px",
    height: "16px",
  },
  medium: {
    width: "18px",
    height: "18px",
  },
  large: {
    width: "20px",
    height: "20px",
  },
});
