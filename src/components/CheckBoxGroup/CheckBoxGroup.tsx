import { HTMLAttributes } from "react";
import { vars } from "../../theme.css";
import { CheckBox } from "../CheckBox";
import * as styles from "./CheckBoxGroup.css";

type CheckBoxGroupOption = {
  key: string;
  label: string;
  value: string | number | boolean;
};

export interface CheckBoxGroupProps extends HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium";
  options: CheckBoxGroupOption[];
  value?: (string | number | boolean)[];
  useAllCheckBox?: boolean;
  disabled?: boolean;
  bold?: boolean;
  typography?: {
    fontFamily?: string;
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
  };
  typographyColor?: string;
  $onChange?: (value: (string | number | boolean)[]) => void;
}

export default function CheckBoxGroup({
  size = "medium",
  options,
  className,
  useAllCheckBox = false,
  disabled: isDisabled = false,
  bold = false,
  typography = vars.typography.body1Normal,
  typographyColor,
  value,
  $onChange,
  ...props
}: CheckBoxGroupProps) {
  const wrapperClass = [styles.wrapper, className].filter(Boolean).join(" ");

  const handleCheckBoxChange = (optionValue: string | number | boolean) => {
    if ($onChange) {
      const newValue = value?.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...(value || []), optionValue];
      $onChange(newValue);
    }
  };

  const allCheckBoxState = () => {
    if (!value) return "unchecked";

    if (value.length === options.length) {
      return "checked";
    } else if (value.length > 0) {
      return "indeterminate";
    }
    return "unchecked";
  };

  return (
    <div className={wrapperClass} {...props}>
      {useAllCheckBox && (
        <div className={styles.allCheckBox}>
          <CheckBox
            $size={size}
            label="전체"
            bold={bold}
            typography={typography}
            typographyColor={typographyColor}
            disabled={isDisabled}
            state={allCheckBoxState()}
            onChange={(e) => {
              if (e.target.checked) {
                $onChange?.(options.map((option) => option.value));
              } else {
                $onChange?.([]);
              }
            }}
          />
        </div>
      )}
      {options.map((option) => (
        <CheckBox
          key={option.key}
          $size={size}
          label={option.label}
          bold={bold}
          typography={typography}
          typographyColor={typographyColor}
          state={value?.includes(option.value) ? "checked" : "unchecked"}
          disabled={isDisabled}
          onChange={() => handleCheckBoxChange(option.value)}
        />
      ))}
    </div>
  );
}
