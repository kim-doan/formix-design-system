import { HTMLAttributes, ReactNode } from "react";
import { headerRow } from "./HeaderRow.css";

export interface HeaderRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

export default function HeaderRow({ children, ...props }: HeaderRowProps) {
  return (
    <tr className={headerRow} {...props}>
      {children}
    </tr>
  );
}
