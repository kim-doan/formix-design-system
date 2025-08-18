import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const wrapper = style({
  boxSizing: "border-box",
  border: `1px solid ${vars.color.semantic.line.solidNormal}`,
  borderRadius: "12px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

export const wrapperWithHorizontalScroll = style({
  boxSizing: "border-box",
  border: `1px solid ${vars.color.semantic.line.solidNormal}`,
  borderRadius: "12px",
  overflowX: "auto",
  display: "flex",
  flexDirection: "column",
});

export const scrollContainer = style({
  boxSizing: "border-box",
  overflowY: "auto",
  flex: 1,
  minHeight: 0,
});

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
});

export const tbody = style({
  maxHeight: "400px",
  overflowY: "auto",
});

globalStyle(`${table} tbody tr:last-child`, {
  borderBottom: "none",
});
