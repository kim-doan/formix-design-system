import * as styles from "../Select.css";
import { SelectOption } from "../Select";

interface SelectDropdownProps {
  options: SelectOption[];
  value?: string;
  onOptionClick: (value: string) => void;
}

export default function SelectDropdown({
  options,
  value,
  onOptionClick,
}: SelectDropdownProps) {
  return (
    <div className={styles.dropdown}>
      {options.map((option) => (
        <div
          key={option.key}
          className={`${styles.option} ${
            value === option.value ? styles.selectedOption : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onOptionClick(option.value);
          }}
          role="option"
          aria-selected={value === option.value}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}