import { FC, SVGProps } from "react";
import sprite from '@assets/images/sprite.svg';

interface CustomIconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const CustomIcon: FC<CustomIconProps> = ({ name, ...restProps }) => {
  return (
    <svg {...restProps}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};

export default CustomIcon;