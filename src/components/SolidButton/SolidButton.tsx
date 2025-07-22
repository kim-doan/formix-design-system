import { ButtonHTMLAttributes, ReactNode } from "react";
import * as styles from "./SolidButton.css";
import { Icon, IconName } from "../Icon";
import { Spinner } from "../Spinner";

export interface SolidButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "assistive";
  size?: "small" | "medium" | "large";
  contentColor?: string;
  backgroundColor?: string;
  loading?: boolean;
  iconOnly?: boolean;
  icon?: IconName;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  children?: ReactNode;
}

interface LoadingButtonProps {
  className: string;
  size: SolidButtonProps["size"];
  contentColor?: string;
  backgroundColor?: string;
  props: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;
}

function LoadingButton({
  className,
  size,
  contentColor,
  backgroundColor,
  props,
}: LoadingButtonProps) {
  return (
    <button
      className={className}
      style={{ backgroundColor, color: contentColor }}
      {...props}
    >
      <Spinner size={size} color={contentColor} />
    </button>
  );
}

interface IconButtonProps {
  className: string;
  size: SolidButtonProps["size"];
  icon: IconName;
  contentColor?: string;
  backgroundColor?: string;
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
  disabled,
  props,
}: IconButtonProps) {
  return (
    <button
      className={className}
      style={{ backgroundColor, color: contentColor }}
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
  size: SolidButtonProps["size"];
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

export default function SolidButton({
  variant = "primary",
  size = "medium",
  contentColor,
  backgroundColor,
  loading: isLoading = false,
  disabled: isDisabled = false,
  iconOnly = false,
  icon,
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: SolidButtonProps) {
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
        disabled={isDisabled}
        props={props}
      />
    );
  }

  return (
    <button
      className={buttonClass}
      style={{ backgroundColor, color: contentColor }}
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
