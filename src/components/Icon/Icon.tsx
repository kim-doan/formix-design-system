import { HTMLAttributes } from "react";
import { icons, IconName } from "../../assets/icons";
import * as styles from "./Icon.css";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  size?: "xsmall" | "small" | "medium" | "large" | number;
  color?: string;
}

export default function Icon({
  name,
  size = "medium",
  color = "currentColor",
  className,
  style,
  ...props
}: IconProps) {
  const iconHtml = icons[name];

  if (!iconHtml) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const sizeValue = typeof size === "number" ? `${size}px` : undefined;

  const sizeClass = typeof size === "string" ? styles.sizes[size] : undefined;

  return (
    <span
      className={`${styles.iconBase} ${sizeClass || ""} ${className || ""}`}
      style={{
        width: sizeValue,
        height: sizeValue,
        color,
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: iconHtml }}
      {...props}
    />
  );
}
