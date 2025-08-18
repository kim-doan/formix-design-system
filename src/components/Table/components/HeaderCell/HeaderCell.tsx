import { HTMLAttributes, ReactNode } from "react";
import * as styles from "./HeaderCell.css";

export interface HeaderCellProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  columnResizing?: boolean;
  onResizeStart?: (event: React.MouseEvent<HTMLDivElement>) => void;
  isResizing?: boolean;
}

export default function HeaderCell({
  children,
  style,
  columnResizing,
  onResizeStart,
  isResizing,
  ...props
}: HeaderCellProps) {
  const headerCellClass = [
    styles.headerCell,
    columnResizing && styles.cellBorder,
  ]
    .filter(Boolean)
    .join(" ");

  const resizeHandleClass = [styles.resizeHandle, isResizing && styles.resizing]
    .filter(Boolean)
    .join(" ");

  const combinedStyle = {
    ...style,
  } as React.CSSProperties;

  return (
    <th className={headerCellClass} style={combinedStyle} {...props}>
      {children}
      {columnResizing && (
        <div className={resizeHandleClass} onMouseDown={onResizeStart} />
      )}
    </th>
  );
}
