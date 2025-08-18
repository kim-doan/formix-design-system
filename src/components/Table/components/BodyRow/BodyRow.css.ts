import { style } from "@vanilla-extract/css";
import { vars } from "../../../../theme.css";

export const bodyRow = style({
  borderBottom: `1px solid ${vars.color.semantic.line.solidNormal}`,
});

export const rowInteraction = style({
  ":hover": {
    backgroundColor: `color-mix(in srgb, ${vars.color.semantic.label.normal} 3.75%, transparent)`,
  },
  ":focus-within": {
    backgroundColor: `color-mix(in srgb, ${vars.color.semantic.label.normal} 6%, transparent)`,
  },
  ":active": {
    backgroundColor: `color-mix(in srgb, ${vars.color.semantic.label.normal} 9%, transparent)`,
  },
});

export const clickable = style({
  cursor: "pointer",
  userSelect: "none",
});

export const selected = style({
  backgroundColor: `color-mix(in srgb, ${vars.color.semantic.primary.normal} 6%, transparent)`,

  ":hover": {
    backgroundColor: `color-mix(in srgb, ${vars.color.semantic.primary.normal} 6%, transparent)`,
  },
  ":focus-within": {
    backgroundColor: `color-mix(in srgb, ${vars.color.semantic.primary.normal} 6%, transparent)`,
  },
  ":active": {
    backgroundColor: `color-mix(in srgb, ${vars.color.semantic.primary.normal} 9%, transparent)`,
  },
});
