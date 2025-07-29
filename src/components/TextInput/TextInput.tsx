import { InputHTMLAttributes, useState } from "react";
import { IconName } from "../Icon";
import * as styles from "./TextInput.css";
import { useTextInputIcon } from "./hooks/useTextInputIcon";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  status?: "normal" | "positive" | "negative";
  value?: string;
  headingLabel?: string;
  requiredBadge?: boolean;
  description?: string;
  icon?: IconName;
  iconColor?: string;
  showDelete?: boolean;
  onIconClick?: () => void;
}

export default function TextInput({
  status = "normal",
  value,
  headingLabel,
  requiredBadge = false,
  placeholder = "텍스트를 입력해 주세요.",
  description,
  icon,
  iconColor,
  className,
  showDelete = false,
  disabled: isDisabled = false,
  onIconClick,
  onChange,
  onFocus,
  onBlur,
  ...props
}: TextInputProps) {
  const [focus, setFocus] = useState(false);

  const wrapperClass = [
    styles.inputWrapper,
    styles.status[status],
    focus && styles.statusFocus[status],
    isDisabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClass = [styles.inputBase, className].filter(Boolean).join(" ");

  const iconElement = useTextInputIcon(
    status,
    focus,
    icon,
    iconColor,
    showDelete,
    onIconClick
  );

  return (
    <div className={wrapperClass}>
      <label className={styles.headingLabel}>
        {headingLabel}
        {requiredBadge && <span className="required-badge">*</span>}
      </label>
      <input
        className={inputClass}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        onFocus={(e) => {
          setFocus(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          onBlur?.(e);
        }}
        onChange={(e) => {
          onChange?.(e);
        }}
        {...props}
      />
      {iconElement}
      <span className={styles.descriptionVariants[status]}>{description}</span>
    </div>
  );
}
