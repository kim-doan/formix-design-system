import { InputHTMLAttributes, useRef, useEffect } from "react";
import { uniqueId } from "lodash-es";
import * as styles from "./CheckBox.css";
import { vars } from "../../theme.css";

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  $size?: "small" | "medium";
  state?: "unchecked" | "checked" | "indeterminate";
  label?: string;
  tight?: boolean;
  bold?: boolean;
  typography?: {
    fontFamily?: string;
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
  };
  typographyColor?: string;
}

export default function CheckBox({
  id = uniqueId(),
  $size = "medium",
  state = "unchecked",
  label,
  tight = false,
  bold = false,
  disabled: isDisabled = false,
  className,
  typography = vars.typography.body1Normal,
  typographyColor,
  ...props
}: CheckBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const containerClass = [styles.container, isDisabled && styles.disabled]
    .filter(Boolean)
    .join(" ");

  const inputClass = [styles.input, className].filter(Boolean).join(" ");

  const labelStyle = {
    ...typography,
    ...(typographyColor && { color: typographyColor }),
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = state === "indeterminate";
    }
  }, [state]);

  return (
    <div className={containerClass}>
      <div className={styles.inputWrapper[$size]}>
        <input
          ref={inputRef}
          id={id}
          type="checkbox"
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
