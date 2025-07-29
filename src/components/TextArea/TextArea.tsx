import { TextareaHTMLAttributes, useState } from "react";
import * as styles from "./TextArea.css";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  status?: "normal" | "negative";
  value?: string;
  headingLabel?: string;
  requiredBadge?: boolean;
  description?: string;
  resize?: "none" | "vertical" | "horizontal" | "both";
  maxLength?: number;
  showCharacterCount?: boolean;
}

export default function TextArea({
  status = "normal",
  value,
  headingLabel,
  requiredBadge = false,
  placeholder = "텍스트를 입력해 주세요.",
  description,
  className,
  disabled: isDisabled = false,
  onChange,
  onFocus,
  onBlur,
  resize = "vertical",
  maxLength,
  showCharacterCount = false,
  rows = 4,
  ...props
}: TextAreaProps) {
  const [focus, setFocus] = useState(false);

  const wrapperClass = [
    styles.textAreaWrapper,
    styles.status[status],
    focus && styles.statusFocus[status],
    isDisabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const textAreaClass = [styles.textAreaBase, styles.resize[resize], className]
    .filter(Boolean)
    .join(" ");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (!maxLength || newValue.length <= maxLength) {
      onChange?.(e);
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.headingLabel}>
        {headingLabel}
        {requiredBadge && <span className="required-badge">*</span>}
      </label>
      <div className={wrapperClass}>
        <textarea
          className={textAreaClass}
          placeholder={placeholder}
          value={value}
          disabled={isDisabled}
          rows={rows}
          onFocus={(e) => {
            setFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            onBlur?.(e);
          }}
          onChange={handleChange}
          {...props}
        />
      </div>
      <div className={styles.footer}>
        <span className={styles.descriptionVariants[status]}>
          {description}
        </span>
        {showCharacterCount && (
          <span className={styles.characterCount}>
            {value?.length || 0}
            {maxLength && `/${maxLength}`}
          </span>
        )}
      </div>
    </div>
  );
}
