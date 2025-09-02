import { HTMLAttributes, ReactNode } from "react";
import { Icon, IconName } from "../Icon";
import { TextButton } from "../TextButton";
import * as styles from "./Snackbar.css";

export interface SnackbarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  heading?: string;
  description?: string;
  icon?: IconName;
  actionLabel?: string;
  children?: ReactNode;
  onActionClick?: () => void;
}

export default function Snackbar({
  heading,
  description,
  icon,
  actionLabel,
  onActionClick,
  className,
  style,
  ...props
}: SnackbarProps) {
  const snackbarClass = [styles.snackbar, className].filter(Boolean).join(" ");

  return (
    <div className={snackbarClass} style={style} {...props}>
      {icon && (
        <div className={styles.iconWrapper}>
          <Icon name={icon} size="small" color="currentColor" />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.textContent}>
          {heading && <p className={styles.heading}>{heading}</p>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
      <ActionButton actionLabel={actionLabel} onActionClick={onActionClick} />
    </div>
  );
}

interface ActionButtonProps {
  actionLabel?: SnackbarProps["actionLabel"];
  onActionClick?: SnackbarProps["onActionClick"];
}

function ActionButton({ actionLabel, onActionClick }: ActionButtonProps) {
  const isAvailable = Boolean(actionLabel && onActionClick);

  return (
    isAvailable && (
      <TextButton
        variant="primary"
        onClick={onActionClick}
        contentColor="white"
      >
        {actionLabel}
      </TextButton>
    )
  );
}
