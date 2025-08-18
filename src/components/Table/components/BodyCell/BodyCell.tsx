import { HTMLAttributes, ReactNode } from "react";
import * as styles from "./BodyCell.css";

export interface BodyCellProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

export default function BodyCell({ children, style, ...props }: BodyCellProps) {
  return (
    <td className={styles.bodyCell} style={style} {...props}>
      {children}
    </td>
  );
}
