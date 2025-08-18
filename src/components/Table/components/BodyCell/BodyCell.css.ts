import { style } from "@vanilla-extract/css";
import { vars } from "../../../../theme.css";

export const bodyCell = style({
  ...vars.typography.body1Normal,
  color: vars.color.semantic.label.normal,
  fontWeight: 400,
  padding: "6px 0px 6px 12px",
  whiteSpace: "nowrap",
});
