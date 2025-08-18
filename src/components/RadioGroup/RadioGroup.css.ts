import { styleVariants } from "@vanilla-extract/css";

export const wrapper = styleVariants({
  vertical: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    flexWrap: "wrap",
  },
});