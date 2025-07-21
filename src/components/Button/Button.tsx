import React from "react";
import { variants, sizes, disabled } from "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  disabled: isDisabled = false,
  className,
  children,
  ...props
}) => {
  const buttonClass = [
    variants[variant],
    sizes[size],
    isDisabled && disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClass} disabled={isDisabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
