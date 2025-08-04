import {
  globalStyle,
  keyframes,
  style,
  styleVariants,
} from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const container = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
});

export const inputWrapper = styleVariants({
  small: {
    position: "relative",
    width: "20px",
    height: "20px",
  },
  medium: {
    position: "relative",
    width: "24px",
    height: "24px",
  },
});

export const input = style({
  width: 0,
  height: 0,
});

export const shrinkBounce = keyframes({
  "0%": {
    transform: "scale(1)",
  },
  "33%": {
    transform: "scale(.85)",
  },
  "100%": {
    transform: "scale(1)",
  },
});

export const checkboxCheck = keyframes({
  "0%": {
    width: 0,
    height: 0,
    borderColor: vars.color.palette.common[100],
    transform: "translate3d(0,0,0) rotate(45deg)",
  },
  "33%": {
    width: ".4em",
    height: "0",
    transform: "translate3de(0,0,0) rotate(45deg)",
  },
  "100%": {
    width: ".4em",
    height: ".6em",
    borderColor: vars.color.palette.common[100],
    transform: "translate3d(0, -.4em, 0) rotate(45deg)",
  },
});

export const label = styleVariants({
  small: {
    ...vars.typography.label1Normal,
    fontWeight: 400,
    color: vars.color.semantic.label.normal,
    userSelect: "none",
    cursor: "pointer",
  },
  medium: {
    ...vars.typography.body2Normal,
    fontWeight: 400,
    color: vars.color.semantic.label.normal,
    userSelect: "none",
    cursor: "pointer",
  },
});

export const disabled = style({
  opacity: 0.3,
});

globalStyle(`${input} + label`, {
  width: "100%",
  height: "100%",
  position: "absolute",
  color: vars.color.semantic.primary.normal,
  transition: "color 250ms cubic-bezier(0.4, 0, 0.23, 1)",
});

globalStyle(`${input} + label > span`, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "calc(100% - 4px)",
  height: "calc(100% - 4px)",
  background: "transparent",
  border: `2px solid ${vars.color.semantic.line.normal}`,
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 250ms cubic-bezier(0.4, 0, 0.23, 1)",
});

globalStyle(`${input} + label:hover > span`, {
  background: `color-mix(in srgb, ${vars.color.semantic.interaction.inactive} 10%, transparent)`,
});

globalStyle(`${input}:checked + label > span`, {
  background: vars.color.semantic.primary.normal,
  border: `2px solid ${vars.color.semantic.primary.normal}`,
  animation: `${shrinkBounce} 200ms cubic-bezier(0.4, 0, 0.23, 1)`,
});

globalStyle(`${input}:checked + label > span:before`, {
  content: "",
  position: "absolute",
  borderRight: "2px solid transparent",
  borderBottom: "2px solid transparent",
  top: "calc(50% -6px)",
  left: "calc(50% - 6px)",
  transform: "rotate(45deg)",
  transformOrigin: "0% 100%",
  animation: `${checkboxCheck} 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards`,
});

globalStyle(`${input}:indeterminate + label > span`, {
  background: vars.color.semantic.primary.normal,
  border: `2px solid ${vars.color.semantic.primary.normal}`,
  animation: `${shrinkBounce} 200ms cubic-bezier(0.4, 0, 0.23, 1)`,
});

globalStyle(`${input}:indeterminate + label > span:before`, {
  content: "",
  position: "absolute",
  width: "60%",
  height: "2px",
  background: vars.color.palette.common[100],
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "1px",
});
