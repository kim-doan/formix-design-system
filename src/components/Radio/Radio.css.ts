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

export const radioCheck = keyframes({
  "0%": {
    width: "40%",
    height: "40%",
    background: vars.color.palette.common[100],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
  },
  "100%": {
    width: "40%",
    height: "40%",
    background: vars.color.palette.common[100],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(1)",
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
  borderRadius: "50%",
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
  borderRadius: "50%",
  animation: `${radioCheck} 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards`,
});
