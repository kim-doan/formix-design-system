import { HTMLAttributes, ReactNode } from "react";
import * as styles from "./BodyRow.css";

export interface BodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  selected?: boolean;
  interaction?: boolean;
}

export default function BodyRow({
  children,
  selected = false,
  interaction = false,
  onClick,
  ...props
}: BodyRowProps) {
  const bodyRowClass = [
    styles.bodyRow,
    onClick && styles.clickable,
    selected && styles.selected,
    interaction && styles.rowInteraction,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('input[type="checkbox"], label')) {
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <tr className={bodyRowClass} onClick={handleClick} {...props}>
      {children}
    </tr>
  );
}
