import * as styles from "../Select.css";

interface SelectLabelProps {
  headingLabel?: string;
  requiredBadge?: boolean;
}

export default function SelectLabel({
  headingLabel,
  requiredBadge,
}: SelectLabelProps) {
  if (!headingLabel) return null;

  return (
    <label className={styles.headingLabel}>
      {headingLabel}
      {requiredBadge && <span className="required-badge">*</span>}
    </label>
  );
}