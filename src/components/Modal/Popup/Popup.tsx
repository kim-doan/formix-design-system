import { HTMLAttributes, ReactNode } from "react";
import { createPortal } from "react-dom";
import { usePopup } from "../hooks";
import { Icon } from "../../Icon";
import * as styles from "./Popup.css";

export interface PopupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}

export default function Popup({
  isOpen,
  onClose,
  children,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className,
  style,
  ...props
}: PopupProps) {
  usePopup({ isOpen, onClose, closeOnEscape });

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      closeOnBackdropClick &&
      event.target === event.currentTarget &&
      onClose
    ) {
      onClose();
    }
  };

  const contentClass = [styles.content, className].filter(Boolean).join(" ");

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={contentClass} style={style} {...props}>
        {showCloseButton && onClose && <CloseButton onClose={onClose} />}
        <div className={styles.contentWrapper}>{children}</div>
      </div>
    </div>,
    document.body
  );
}

interface CloseButtonProps {
  onClose: () => void;
}

function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      className={styles.closeButton}
      onClick={onClose}
      aria-label="Close popup"
    >
      <Icon name="close" size="small" />
    </button>
  );
}
