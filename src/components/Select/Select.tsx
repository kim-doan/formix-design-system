import { Icon } from "../Icon";
import * as styles from "./Select.css";
import { useSelectIcon } from "./hooks/useSelectIcon";
import { useSelectState } from "./hooks/useSelectState";
import { useSelectStyles } from "./hooks/useSelectStyles";
import SelectTrigger from "./components/SelectTrigger";
import SelectDropdown from "./components/SelectDropdown";
import SelectLabel from "./components/SelectLabel";

export interface SelectOption {
  key: string;
  value: string;
  label: string;
}

export interface SelectProps {
  status?: "normal" | "negative";
  value?: string;
  headingLabel?: string;
  requiredBadge?: boolean;
  description?: string;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function Select({
  status = "normal",
  value,
  headingLabel,
  requiredBadge = false,
  placeholder = "선택해주세요.",
  description,
  className,
  disabled: isDisabled = false,
  options,
  onChange,
  onFocus,
  onBlur,
}: SelectProps) {
  const {
    focus,
    isOpen,
    selectRef,
    handleToggle,
    handleFocus,
    handleBlur,
    setIsOpen,
    setFocus,
  } = useSelectState({ disabled: isDisabled, onFocus, onBlur });

  const { wrapperClass, selectInputClass, iconClass } = useSelectStyles({
    status,
    focus,
    isOpen,
    isDisabled,
    className,
  });

  const selectedOption = options.find((option) => option.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;
  const iconElement = useSelectIcon(status);

  const handleOptionClick = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
    setFocus(false);
    onBlur?.();
  };

  return (
    <div className={wrapperClass} ref={selectRef} onClick={handleToggle}>
      <SelectLabel headingLabel={headingLabel} requiredBadge={requiredBadge} />
      <SelectTrigger
        isDisabled={isDisabled}
        className={selectInputClass}
        displayText={displayText}
        isPlaceholder={!selectedOption}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onToggle={handleToggle}
      />
      {iconElement}
      <Icon name="chevronDownThickSmall" size={16} className={iconClass} />
      {isOpen && (
        <SelectDropdown
          options={options}
          value={value}
          onOptionClick={handleOptionClick}
        />
      )}
      <span className={styles.descriptionVariants[status]}>{description}</span>
    </div>
  );
}
