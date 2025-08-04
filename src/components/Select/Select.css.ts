import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const selectWrapper = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  position: "relative",
  border: `1px solid ${vars.color.semantic.line.normal}`,
  borderRadius: "12px",
  padding: "12px",
  minWidth: "200px",
  userSelect: "none",
  cursor: "pointer",
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
    selectWrapper,
    {
      borderColor: vars.color.semantic.line.normal,
    },
  ],
  negative: [
    selectWrapper,
    {
      borderColor: vars.color.semantic.status.negative,
    },
  ],
});

export const statusFocus = styleVariants({
  normal: {
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
  negative: [
    description,
    {
      color: vars.color.semantic.status.negative,
    },
  ],
});

export const selectInput = style({
  border: "none",
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: "transparent",
  ...vars.typography.body1Normal,
  color: vars.color.semantic.label.normal,
  fontWeight: 400,
  display: "flex",
  alignItems: "center",
  minHeight: "22px",

  selectors: {
    "&:focus": {
      outline: "none",
    },
  },
});

export const placeholder = style({
  color: vars.color.semantic.label.assistive,
});

export const selectedText = style({
  color: vars.color.semantic.label.normal,
});

export const chevronIcon = style({
  pointerEvents: "none",
  transition: "transform 0.2s ease",
  color: vars.color.semantic.label.alterNative,
});

export const chevronOpen = style({
  transform: "rotate(180deg)",
});

export const contentDisabled = style({
  opacity: 0.5,
});

export const dropdown = style({
  position: "absolute",
  top: "100%",
  left: "0",
  right: "0",
  backgroundColor: vars.color.semantic.background.normal,
  border: `1px solid ${vars.color.semantic.line.normal}`,
  borderRadius: "16px",
  marginTop: "4px",
  maxHeight: "200px",
  overflowY: "auto",
  zIndex: 1000,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  padding: "8px",
});

export const option = style({
  padding: "12px",
  cursor: "pointer",
  ...vars.typography.body1Normal,
  color: vars.color.semantic.label.normal,
  fontWeight: 400,
  ":hover": {
    backgroundColor: `color-mix(in srgb, ${vars.color.semantic.label.normal} 3.75%, transparent)`,
    borderRadius: "16px",
  },
});

export const selectedOption = style({
  color: vars.color.semantic.primary.normal,
  fontWeight: 600,
});

export const disabled = style({
  backgroundColor: vars.color.semantic.interaction.disable,
  color: vars.color.semantic.label.disable,
  borderColor: vars.color.semantic.line.alternative,
  cursor: "not-allowed",
});
