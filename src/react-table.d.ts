import "@tanstack/react-table";
import { RowData } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    columnStyle?: {
      textAlign?: "left" | "center" | "right";
    };
    cellStyle?: {
      textAlign?: "left" | "center" | "right";
      overflow?: "hidden" | "visible" | "scroll" | "auto";
      whiteSpace?: "nowrap" | "pre" | "pre-wrap" | "pre-line" | "normal";
      textOverflow?: "clip" | "ellipsis";
    };
    clickable?: boolean;
  }
}
