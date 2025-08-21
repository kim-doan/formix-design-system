import { HTMLAttributes } from "react";
import { Icon, IconName } from "../Icon";
import * as styles from "./Toast.css";

export interface ToastProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  variant?: "normal" | "positive" | "cautionary" | "negative";
  leadingIcon?: boolean;
  customIcon?: IconName;
  customIconColor?: string;
  text: string;
}

function getDefaultIcon(variant: ToastProps["variant"]): IconName {
  switch (variant) {
    case "positive":
      return "circleCheckFill";
    case "cautionary":
      return "triangleExclamationFill";
    case "negative":
      return "circleExclamationFill";
    default:
      return "circleInfo";
  }
}

export default function Toast({
  variant = "normal",
  leadingIcon = false,
  customIcon,
  customIconColor,
  text,
  className,
  style,
  ...props
}: ToastProps) {
  const toastClass = [styles.variants[variant], className]
    .filter(Boolean)
    .join(" ");

  const iconName = customIcon || getDefaultIcon(variant);

  return (
    <div className={toastClass} style={style} {...props}>
      {leadingIcon && (
        <div className={styles.iconWrapper}>
          <Icon
            className={styles.iconVariants[variant]}
            name={iconName}
            size={22}
            color={customIconColor}
          />
        </div>
      )}
      <span>{text}</span>
    </div>
  );
}
