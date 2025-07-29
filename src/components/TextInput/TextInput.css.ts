import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const inputWrapper = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  position: "relative",
  border: `1px solid ${vars.color.semantic.line.normal}`,
  borderRadius: "12px",
  padding: "12px",
  minWidth: "200px",
  userSelect: "none",
});

export const description = style({
  position: "absolute",
  bottom: "-36px",
  left: "0",
  ...vars.typography.caption1,
  fontWeight: 400,
  color: vars.color.semantic.label.alterNative,
  height: "30px",
  maxLines: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const headingLabel = style({
  position: "absolute",
  maxWidth: "80%",
  height: "20px",
  top: "-26px",
  left: "0",
  ...vars.typography.label1Normal,
  fontWeight: 600,
  color: vars.color.semantic.label.neutral,
  maxLines: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

globalStyle(`${headingLabel} .required-badge`, {
  marginLeft: "4px",
  color: vars.color.semantic.status.negative,
});

export const status = styleVariants({
  normal: [
    inputWrapper,
    {
      borderColor: vars.color.semantic.line.normal,
    },
  ],
  positive: [inputWrapper],
  negative: [
    inputWrapper,
    {
      borderColor: vars.color.semantic.status.negative,
    },
  ],
});

export const statusFocus = styleVariants({
  normal: {
    outline: `1px solid color-mix(in srgb, ${vars.color.semantic.primary.normal} 43%, transparent)`,
  },
  positive: {
    outline: `1px solid color-mix(in srgb, ${vars.color.semantic.primary.normal} 43%, transparent)`,
  },
  negative: {
    outline: `1px solid color-mix(in srgb, ${vars.color.semantic.status.negative} 43%, transparent)`,
  },
});

export const descriptionVariants = styleVariants({
  normal: [
    description,
    {
      color: vars.color.semantic.label.alterNative,
    },
  ],
  positive: [
    description,
    {
      color: vars.color.semantic.label.alterNative,
    },
  ],
  negative: [
    description,
    {
      color: vars.color.semantic.status.negative,
    },
  ],
});

export const inputBase = style({
  border: "none",
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: "transparent",
  ...vars.typography.body1Normal,
  color: vars.color.semantic.label.normal,
  fontWeight: 400,

  "::placeholder": {
    ...vars.typography.body1Normal,
    color: vars.color.semantic.label.assistive,
    fontWeight: 400,
  },
  selectors: {
    "&:focus": {
      outline: "none",
    },
  },
});

export const disabled = style({
  backgroundColor: vars.color.semantic.interaction.disable,
  color: vars.color.semantic.label.disable,
  borderColor: vars.color.semantic.line.alternative,
});
