import { HTMLAttributes } from "react";
import { vars } from "../../theme.css";
import { Radio } from "../Radio";
import * as styles from "./RadioGroup.css";

type RadioGroupOption = {
  key: string;
  label: string;
  value: string | number | boolean;
};

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium";
  options: RadioGroupOption[];
  value?: string | number | boolean;
  disabled?: boolean;
  bold?: boolean;
  typography?: {
    fontFamily?: string;
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
  };
  typographyColor?: string;
  $onChange?: (value: string | number | boolean) => void;
  name?: string;
  direction?: "horizontal" | "vertical";
}

export default function RadioGroup({
  size = "medium",
  options,
  className,
  disabled: isDisabled = false,
  bold = false,
  typography = vars.typography.body1Normal,
  typographyColor,
  value,
  $onChange,
  name,
  direction = "horizontal",
  ...props
}: RadioGroupProps) {
  const wrapperClass = [
    styles.wrapper[direction as keyof typeof styles.wrapper],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleRadioChange = (optionValue: string | number | boolean) => {
    if ($onChange) {
      $onChange(optionValue);
    }
  };

  return (
    <div className={wrapperClass} {...props}>
      {options.map((option) => (
        <Radio
          key={option.key}
          name={name}
          $size={size}
          label={option.label}
          bold={bold}
          typography={typography}
          typographyColor={typographyColor}
          state={value === option.value ? "checked" : "unchecked"}
          disabled={isDisabled}
          value={String(option.value)}
          onChange={() => handleRadioChange(option.value)}
        />
      ))}
    </div>
  );
}
