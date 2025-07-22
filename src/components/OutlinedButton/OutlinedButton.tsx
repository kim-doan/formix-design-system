import { ButtonHTMLAttributes, ReactNode } from "react";
import * as styles from "./OutlinedButton.css";
import { Icon, IconName } from "../Icon";
import { Spinner } from "../Spinner";

export interface OutlinedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "assistive";
  size?: "small" | "medium" | "large";
  contentColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  loading?: boolean;
  iconOnly?: boolean;
  icon?: IconName;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  children?: ReactNode;
}

interface LoadingButtonProps {
  className: string;
  size: OutlinedButtonProps["size"];
  contentColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  props: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;
}

function LoadingButton({
  className,
  size,
  contentColor,
  backgroundColor,
  borderColor,
  props,
}: LoadingButtonProps) {
  return (
    <button
      className={className}
      style={{
        backgroundColor,
        color: contentColor,
        borderColor,
        "--before-bg-color": borderColor,
      } as React.CSSProperties}
      {...props}
    >
      <Spinner size={size} color={contentColor} />
    </button>
  );
}

interface IconButtonProps {
  className: string;
  size: OutlinedButtonProps["size"];
  icon: IconName;
  contentColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  disabled: boolean;
  props: Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "disabled"
  >;
}

function IconButton({
  className,
  size,
  icon,
  contentColor,
  backgroundColor,
  borderColor,
  disabled,
  props,
}: IconButtonProps) {
  return (
    <button
      className={className}
      style={{
        backgroundColor,
        color: contentColor,
        borderColor,
        "--before-bg-color": borderColor,
      } as React.CSSProperties}
      disabled={disabled}
      {...props}
    >
      <Icon name={icon} size={size} color={contentColor} />
    </button>
  );
}

interface ButtonContentProps {
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  size: OutlinedButtonProps["size"];
  contentColor?: string;
  children: ReactNode;
}

function ButtonContent({
  leadingIcon,
  trailingIcon,
  size,
  contentColor,
  children,
}: ButtonContentProps) {
  return (
    <>
      {leadingIcon && (
        <Icon name={leadingIcon} size={size} color={contentColor} />
      )}
      <div>{children}</div>
      {trailingIcon && (
        <Icon name={trailingIcon} size={size} color={contentColor} />
      )}
    </>
  );
}

export default function OutlinedButton({
  variant = "primary",
  size = "medium",
  contentColor,
  backgroundColor,
  borderColor,
  loading: isLoading = false,
  disabled: isDisabled = false,
  iconOnly = false,
  icon,
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: OutlinedButtonProps) {
  const buttonClass = [
    styles.variants[variant],
    iconOnly ? styles.iconButtonSizes[size] : styles.sizes[size],
    isDisabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isLoading) {
    return (
      <LoadingButton
        className={buttonClass}
        size={size}
        contentColor={contentColor}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        props={props}
      />
    );
  }

  if (iconOnly && icon) {
    return (
      <IconButton
        className={buttonClass}
        size={size}
        icon={icon}
        contentColor={contentColor}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        disabled={isDisabled}
        props={props}
      />
    );
  }

  return (
    <button
      className={buttonClass}
      style={{
        backgroundColor,
        color: contentColor,
        borderColor,
        "--before-bg-color": borderColor,
      } as React.CSSProperties}
      disabled={isDisabled}
      {...props}
    >
      <ButtonContent
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        size={size}
        contentColor={contentColor}
      >
        {children}
      </ButtonContent>
    </button>
  );
}
