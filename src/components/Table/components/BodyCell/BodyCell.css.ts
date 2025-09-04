import { style } from "@vanilla-extract/css";
import { vars } from "../../../../theme.css";

export const bodyCell = style({
  ...vars.typography.body2Normal,
  color: vars.color.semantic.label.normal,
  fontWeight: 400,
  padding: "8px 0px 8px 16px",
  whiteSpace: "nowrap",
});
