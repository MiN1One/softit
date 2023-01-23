import classNames from "classnames";
import { createElement, FC, memo, useCallback, useRef, useState } from "react";
import classes from './Spotlight.module.scss';

interface SpotlightProps {
  element?: React.ElementType;
  children: React.ReactNode;
  [key: string]: any;
}

const SPOTLIGHT_SIZE = 400;

const Spotlight: FC<SpotlightProps> = (props) => {
  const { element = 'h1', children, ...restProps } = props;
  const elementRef = useRef<any>();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback((event: any) => {
    if (event) {
      event = window.event;
    }
    const { target, clientX, clientY } = event;
    const bounds = target.getBoundingClientRect();
    const spotlightX = clientX - (SPOTLIGHT_SIZE / 2) - bounds.left;
    const spotlightY = clientY - (SPOTLIGHT_SIZE / 2) - bounds.top;
    setPosition({
      x: spotlightX,
      y: spotlightY
    });
  }, []);

  return createElement(
    element, 
    {
      ...restProps,
      onMouseMove,
      style: {
        backgroundPosition: `${position.x}px ${position.y}px`,
      },
      ref: elementRef,
      className: classNames(restProps.className, classes.spotlight),
    },
    children
  );
};

export default memo(Spotlight);