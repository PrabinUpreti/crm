import { IAvatarProps } from "@/@types";
import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadAvatar,
} from "@/components/ui/Avatar/avatar";

const Avatar: React.FC<IAvatarProps> = ({ name, imgSrc, ...rest }) => {
  return (
    <ShadAvatar {...rest}>
      <AvatarImage src={`${imgSrc}`} />
      <AvatarFallback>{name.slice(0, 1).toUpperCase()}</AvatarFallback>
    </ShadAvatar>
  );
};

export default Avatar;
