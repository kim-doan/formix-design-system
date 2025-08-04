import { useState, useRef, useEffect } from "react";

interface UseSelectStateProps {
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const useSelectState = ({
  disabled,
  onFocus,
  onBlur,
}: UseSelectStateProps) => {
  const [focus, setFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocus(false);
        onBlur?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onBlur]);

  const handleToggle = () => {
    if (disabled) return;

    if (!isOpen) {
      setFocus(true);
      onFocus?.();
    }
    setIsOpen(!isOpen);
  };

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  return {
    focus,
    isOpen,
    selectRef,
    handleToggle,
    handleFocus,
    handleBlur,
    setIsOpen,
    setFocus,
  };
};