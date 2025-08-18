import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const wrapper = style({
  display: "inline-flex",
  gap: "10px",
});

export const allCheckBox = style({
  display: "flex",
  borderRight: `2px solid ${vars.color.semantic.line.solidNormal}`,
  padding: "0px 10px",
});
