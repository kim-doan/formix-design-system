import { style, styleVariants, keyframes } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinner = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  animation: `${rotate} 1s linear infinite`,
});

export const track = style({
  opacity: 0.2,
});

export const circle = style({
  opacity: 1,
});

export const sizes = styleVariants({
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
