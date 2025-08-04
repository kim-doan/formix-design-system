import * as styles from "../Select.css";

interface UseSelectStylesProps {
  status: "normal" | "negative";
  focus: boolean;
  isOpen: boolean;
  isDisabled: boolean;
  className?: string;
}

export const useSelectStyles = ({
  status,
  focus,
  isOpen,
  isDisabled,
  className,
}: UseSelectStylesProps) => {
  const wrapperClass = [
    styles.selectWrapper,
    styles.status[status],
    !isDisabled && focus && styles.statusFocus[status],
    isDisabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const selectInputClass = [
    styles.selectInput,
    isDisabled && styles.contentDisabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconClass = [
    styles.chevronIcon,
    isOpen ? styles.chevronOpen : "",
    isDisabled && styles.contentDisabled,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    wrapperClass,
    selectInputClass,
    iconClass,
  };
};