import { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, IconName } from "../Icon";
import * as styles from "./Chip.css";

export interface ChipProps extends ButtonHTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "outlined";
  size?: "xsmall" | "small" | "medium" | "large";
  active?: boolean;
  contentColor?: string;
  backgroundColor?: string;
  activeColor?: string;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  children?: ReactNode;
}

interface ChipContentProps {
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  size: ChipProps["size"];
  contentColor?: string;
  backgroundColor?: string;
  activeColor?: string;
  children?: ReactNode;
}

function ChipContent({
  leadingIcon,
  trailingIcon,
  size,
  contentColor,
  children,
}: ChipContentProps) {
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

export default function Chip({
  variant = "solid",
  size = "medium",
  active = false,
  disabled: isDisabled = false,
  contentColor,
  backgroundColor,
  activeColor,
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: ChipProps) {
  const chipClass = [
    active ? styles.activeVariants[variant] : styles.variants[variant],
    styles.sizes[size],
    isDisabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const backgroundColorStyle = active
    ? `color-mix(in srgb, ${activeColor} 5%, transparent)`
    : backgroundColor;
  const contentColorStyle = active ? activeColor : contentColor;

  return (
    <div
      className={chipClass}
      style={
        {
          backgroundColor: backgroundColorStyle,
          color: contentColorStyle,
          borderColor: contentColorStyle,
          "--before-bg-color": contentColorStyle,
        } as React.CSSProperties
      }
      {...props}
    >
      <ChipContent
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        size={size}
        contentColor={contentColor}
        backgroundColor={backgroundColor}
        activeColor={activeColor}
      >
        {children}
      </ChipContent>
    </div>
  );
}
