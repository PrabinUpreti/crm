import { IBadgeProps } from "@/@types";
import { Badge as ShadBadge } from "@/components/ui/Badge/badge";

const Badge: React.FC<IBadgeProps> = ({ label, variant, ...props }) => {
  return (
    <ShadBadge variant={variant} {...props}>
      {label}
    </ShadBadge>
  );
};

export default Badge;
