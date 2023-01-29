import classNames from "classnames";
import { FC, memo } from "react";
import classes from './SliderDots.module.scss';

interface SliderDotsProps {
  dotsCount: number;
  onClick?: (dotIndex: number) => void;
  activeIndex?: number;
  className?: string;
}

const SliderDots: FC<SliderDotsProps> = (props) => {
  const { dotsCount, onClick, activeIndex, className } = props;
  const dotEls = Array.from(Array(dotsCount).keys()).map(index => {
    return (
      <span 
        tabIndex={0}
        className={classNames({ [classes.active]: index === activeIndex })}
        key={index} 
        onClick={
          typeof onClick === 'function' 
            ? () => onClick(index) 
            : undefined
        }
      />
    );
  });

  return (
    <div className={classNames(classes.dots, className)}>
      {dotEls}
    </div>
  );
};

export default memo(SliderDots);