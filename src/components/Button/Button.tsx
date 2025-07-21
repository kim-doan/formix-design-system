import { type ButtonHTMLAttributes, type ReactNode } from "react";
import * as styles from "./Button.css";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "medium",
  disabled: isDisabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonClass = [
    styles.variants[variant],
    styles.sizes[size],
    isDisabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClass} disabled={isDisabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
