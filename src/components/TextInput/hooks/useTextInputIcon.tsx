import { Icon, IconName } from "../../Icon";
import { vars } from "../../../theme.css";

export const useTextInputIcon = (
  status: "normal" | "positive" | "negative",
  focus: boolean,
  icon?: IconName,
  iconColor?: string,
  showDelete?: boolean,
  onIconClick?: () => void
) => {
  const commonIconProps = {
    size: 22,
    style: { cursor: "pointer" },
    onClick: onIconClick,
  };

  if (focus && showDelete) {
    return (
      <Icon
        {...commonIconProps}
        name="circleCloseFill"
        color={vars.color.semantic.status.negative}
        onMouseDown={(e) => e.preventDefault()}
      />
    );
  }

  if (icon) {
    return <Icon {...commonIconProps} name={icon} color={iconColor} />;
  }

  const statusIcons = {
    positive: {
      name: "circleCheckFill" as IconName,
      color: vars.color.semantic.primary.normal,
    },
    negative: {
      name: "circleExclamationFill" as IconName,
      color: vars.color.semantic.status.negative,
    },
    normal: null,
  };

  const statusIcon = statusIcons[status];
  
  return statusIcon ? (
    <Icon {...commonIconProps} name={statusIcon.name} color={statusIcon.color} />
  ) : null;
};