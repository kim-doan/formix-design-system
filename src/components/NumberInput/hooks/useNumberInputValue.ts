import { useEffect, useState } from "react";

const useNumberInputValue = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    // 소수점이 없을 때만 자동 포맷팅
    if (!displayValue.includes('.')) {
      setDisplayValue(currentValue.toLocaleString());
    }
  }, [currentValue]);

  return {
    currentValue,
    displayValue,
    setCurrentValue,
    setDisplayValue,
  };
};

export default useNumberInputValue;
