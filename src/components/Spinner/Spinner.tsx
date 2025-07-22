import { HTMLAttributes } from "react";
import * as styles from "./Spinner.css";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "small" | "medium" | "large";
}

export default function Spinner({ 
  size = "medium", 
  className,
  ...props 
}: SpinnerProps) {
  return (
    <span 
      className={`${styles.spinner} ${styles.sizes[size]} ${className || ""}`}
      {...props}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle 
          className={styles.track}
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        <path 
          className={styles.circle}
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}