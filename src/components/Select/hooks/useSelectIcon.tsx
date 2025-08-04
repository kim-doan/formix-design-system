import { Icon, IconName } from "../../Icon";
import { vars } from "../../../theme.css";

export const useSelectIcon = (
  status: "normal" | "negative"
) => {
  const statusIcons = {
    negative: {
      name: "circleExclamationFill" as IconName,
      color: vars.color.semantic.status.negative,
    },
    normal: null,
  };

  const statusIcon = statusIcons[status];
  
  return statusIcon ? (
    <Icon
      name={statusIcon.name}
      color={statusIcon.color}
      size={22}
      style={{ cursor: "pointer" }}
    />
  ) : null;
};