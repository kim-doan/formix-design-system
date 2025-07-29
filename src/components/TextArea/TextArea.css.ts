import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const container = style({
  position: "relative",
  display: "inline-flex",
  flexDirection: "column",
  minWidth: "300px",
});

export const textAreaWrapper = style({
  display: "inline-flex",
  alignItems: "flex-start",
  gap: "8px",
  position: "relative",
  border: `1px solid ${vars.color.semantic.line.normal}`,
  borderRadius: "12px",
  padding: "12px",
  userSelect: "none",
  marginTop: "26px",
});

export const headingLabel = style({
  position: "absolute",
  maxWidth: "80%",
  height: "20px",
  top: "0",
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
    textAreaWrapper,
    {
      borderColor: vars.color.semantic.line.normal,
    },
  ],
  positive: [textAreaWrapper],
  negative: [
    textAreaWrapper,
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

export const textAreaBase = style({
  border: "none",
  width: "100%",
  minHeight: "80px",
  boxSizing: "border-box",
  backgroundColor: "transparent",
  ...vars.typography.body1Normal,
  color: vars.color.semantic.label.normal,
  fontWeight: 400,
  fontFamily: "inherit",
  lineHeight: "1.5",

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

export const resize = styleVariants({
  none: {
    resize: "none",
  },
  vertical: {
    resize: "vertical",
  },
  horizontal: {
    resize: "horizontal",
  },
  both: {
    resize: "both",
  },
});

export const disabled = style({
  backgroundColor: vars.color.semantic.interaction.disable,
  color: vars.color.semantic.label.disable,
  borderColor: vars.color.semantic.line.alternative,
});

export const footer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "8px",
  minHeight: "20px",
});

export const description = style({
  ...vars.typography.caption1,
  fontWeight: 400,
  color: vars.color.semantic.label.alterNative,
  maxLines: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
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

export const characterCount = style({
  ...vars.typography.caption1,
  fontWeight: 400,
  color: vars.color.semantic.label.alterNative,
  marginLeft: "auto",
});
