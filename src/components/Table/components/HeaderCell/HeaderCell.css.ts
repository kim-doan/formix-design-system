import { style } from "@vanilla-extract/css";
import { vars } from "../../../../theme.css";

export const headerCell = style({
  ...vars.typography.label2,
  textAlign: "left",
  color: vars.color.semantic.label.neutral,
  fontWeight: 600,
  padding: "6px 0px 6px 12px",
  position: "relative",
});

export const cellBorder = style({
  borderLeft: `1px solid ${vars.color.semantic.line.solidNormal}`,
});

export const resizeHandle = style({
  position: "absolute",
  top: 0,
  right: 0,
  width: "4px",
  height: "100%",
  cursor: "col-resize",
  backgroundColor: "transparent",
  userSelect: "none",

  selectors: {
    "&:hover": {
      backgroundColor: vars.color.semantic.primary.normal,
    },
  },
});

export const resizing = style({
  backgroundColor: vars.color.semantic.primary.normal,
});
