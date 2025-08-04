import * as styles from "../Select.css";

interface SelectTriggerProps {
  isDisabled: boolean;
  className: string;
  displayText: string;
  isPlaceholder: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onToggle: () => void;
}

export default function SelectTrigger({
  isDisabled,
  className,
  displayText,
  isPlaceholder,
  onFocus,
  onBlur,
  onToggle,
}: SelectTriggerProps) {
  return (
    <div
      className={className}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <span className={isPlaceholder ? styles.placeholder : styles.selectedText}>
        {displayText}
      </span>
    </div>
  );
}