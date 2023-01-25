import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from "react";
import image from '@assets/images/tolinoy-square.png';

interface MoonProps extends 
  DetailedHTMLProps<
    HTMLAttributes<HTMLImageElement>, 
    HTMLImageElement
  > {
    onLoad?: () => void;
    onLoadStart?: () => void;
    spin?: boolean;
  }

const Moon: FC<MoonProps> = (props) => {
  const { onLoad, onLoadStart, spin, ...restProps } = props;

  useEffect(() => {
    if (typeof onLoadStart === 'function') {
      onLoadStart();
    }
    const imagePreloader = new Image();

    imagePreloader.src = image.src;

    if (imagePreloader.complete) {
      if (typeof onLoad === 'function') {
        onLoad();
      }
      imagePreloader.onload = null;
    } else {
      imagePreloader.onload = () => {
        if (typeof onLoad === 'function') {
          onLoad();
        }
        imagePreloader.onload = null;
      };
    }
  }, []);

  return (
    <img
      {...restProps}
      src={image.src}
      width={image.width}
      height={image.height}
      alt="Moon Image"
    />
  )
};

export default Moon;