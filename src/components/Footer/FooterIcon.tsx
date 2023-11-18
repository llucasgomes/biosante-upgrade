import { ElementType } from "react";

type IconProps = {
  icon: ElementType;
  size?: number;
  color?: string;
  style?: string;
};

export default function FooterIcon({
  icon: Icon,
  color,
  size,
  style,
}: IconProps) {
  return <Icon color={color} size={size} className={style} />;
}
