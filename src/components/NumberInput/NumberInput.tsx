import { InputHTMLAttributes, useState, useEffect, useRef } from "react";
import { IconName } from "../Icon";
import * as styles from "./NumberInput.css";
import { useTextInputIcon } from "../TextInput/hooks/useTextInputIcon";
import useNumberInputValue from "./hooks/useNumberInputValue";
import { KeyCodes } from "../../types";

export interface NumberInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "onChange"
  > {
  status?: "normal" | "positive" | "negative";
  value?: number;
  headingLabel?: string;
  requiredBadge?: boolean;
  description?: string;
  icon?: IconName;
  iconColor?: string;
  showDelete?: boolean;
  min?: number;
  max?: number;
  unit?: string;
  onIconClick?: () => void;
  onChange?: (value: number) => void;
  onEnter?: () => void;
}

export default function NumberInput({
  status = "normal",
  value = 0,
  headingLabel,
  requiredBadge = false,
  placeholder = "숫자를 입력해 주세요.",
  description,
  icon,
  iconColor,
  className,
  showDelete = false,
  disabled: isDisabled = false,
  min,
  max,
  unit,
  onIconClick,
  onChange,
  onEnter,
  onFocus,
  onBlur,
  ...props
}: NumberInputProps) {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const { displayValue, setCurrentValue, setDisplayValue } =
    useNumberInputValue();

  useEffect(() => {
    setCurrentValue(value);
  }, [setCurrentValue, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const cursorPosition = input.selectionStart || 0;
    const currentValue = input.value;

    // 콤마 제거한 순수 숫자값
    const unformattedValue = currentValue.replaceAll(",", "");

    // 커서 위치 이전까지의 숫자 개수 계산 (콤마 제외)
    let digitCountBeforeCursor = 0;
    for (let i = 0; i < cursorPosition && i < currentValue.length; i++) {
      if (currentValue[i] !== ",") {
        digitCountBeforeCursor++;
      }
    }

    const dotRegex = /^[^.]*\.[^.]*$/;

    if (!unformattedValue.endsWith(".") && !isNaN(Number(unformattedValue))) {
      const numValue = Number(unformattedValue);
      setCurrentValue(numValue);
      onChange?.(numValue);

      // 포맷팅된 새 값 생성
      const newFormattedValue = numValue.toLocaleString();
      setDisplayValue(newFormattedValue);

      // 커서 위치 복원
      requestAnimationFrame(() => {
        if (inputRef.current) {
          let newCursorPosition = 0;
          let digitCount = 0;

          // 새로운 포맷팅된 값에서 동일한 숫자 개수만큼 이동
          for (let i = 0; i < newFormattedValue.length; i++) {
            if (newFormattedValue[i] !== ",") {
              digitCount++;
            }
            newCursorPosition++;

            if (digitCount === digitCountBeforeCursor) {
              break;
            }
          }

          inputRef.current.setSelectionRange(
            newCursorPosition,
            newCursorPosition
          );
        }
      });
    } else if (
      unformattedValue.endsWith(".") &&
      dotRegex.test(unformattedValue)
    ) {
      setDisplayValue(unformattedValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === KeyCodes.Enter) {
      e.preventDefault();
      onEnter();
    }

    if (displayValue.endsWith(".") && e.key === KeyCodes.BackSpace) {
      e.preventDefault();
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  return (
    <div className={wrapperClass}>
      <label className={styles.headingLabel}>
        {headingLabel}
        {requiredBadge && <span className="required-badge">*</span>}
      </label>
      <input
        ref={inputRef}
        className={inputClass}
        placeholder={placeholder}
        value={displayValue}
        disabled={isDisabled}
        min={min}
        max={max}
        onFocus={(e) => {
          setFocus(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          onBlur?.(e);
        }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...props}
      />
      {iconElement}
      {unit && <span className={styles.unit}>{unit}</span>}
      <span className={styles.descriptionVariants[status]}>{description}</span>
    </div>
  );
}
