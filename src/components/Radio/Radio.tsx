import { uniqueId } from "lodash-es";
import { InputHTMLAttributes } from "react";
import { vars } from "../../theme.css";
import * as styles from "./Radio.css";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  $size?: "small" | "medium";
  state?: "unchecked" | "checked";
  label?: string;
  bold?: boolean;
  typography?: {
    fontFamily?: string;
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
  };
  typographyColor?: string;
}

export default function Radio({
  id = uniqueId(),
  $size = "medium",
  state = "unchecked",
  label,
  bold = false,
  disabled: isDisabled = false,
  className,
  typography = vars.typography.body1Normal,
  typographyColor,
  ...props
}: RadioProps) {
  const containerClass = [styles.container, isDisabled && styles.disabled]
    .filter(Boolean)
    .join(" ");

  const inputClass = [styles.input, className].filter(Boolean).join(" ");

  const labelStyle = {
    ...typography,
    ...(typographyColor && { color: typographyColor }),
    fontWeight: bold ? "600" : "400",
  };

  return (
    <div className={containerClass}>
      <div className={styles.inputWrapper[$size]}>
        <input
          id={id}
          type="radio"
          className={inputClass}
          disabled={isDisabled}
          checked={state === "checked"}
          hidden
          {...props}
        />
        <label htmlFor={id}>
          <span></span>
        </label>
      </div>
      {label && (
        <label className={styles.label[$size]} htmlFor={id} style={labelStyle}>
          {label}
        </label>
      )}
    </div>
  );
}
