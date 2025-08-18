import { style } from "@vanilla-extract/css";
import { vars } from "../../../../theme.css";

export const headerRow = style({
  background: vars.color.semantic.fill.alterNative,
  borderBottom: `1px solid ${vars.color.semantic.line.solidNormal}`,
});
