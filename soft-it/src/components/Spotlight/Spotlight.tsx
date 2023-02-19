import classNames from "classnames";
import { createElement, FC, memo, useCallback, useEffect, useRef, useState } from "react";
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
  const [mouseFocus, setMouseFocus] = useState(false);

  useEffect(() => {
    if (!mouseFocus) {
      setPosition({ x: 0, y: 0 });
    }
  }, [mouseFocus]);

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
  }, [mouseFocus]);

  return createElement(
    element, 
    {
      ...restProps,
      onMouseMove,
      onMouseEnter: () => setMouseFocus(true),
      onMouseLeave: () => setMouseFocus(false), 
      style: 
        mouseFocus 
          ? {
            backgroundPosition: `${position.x}px ${position.y}px`,
            backgroundImage: 'radial-gradient(closest-side, rgba(255,255,255,.2) 30%, transparent 70%)' 
          }
          : undefined,
      ref: elementRef,
      className: classNames(restProps.className, classes.spotlight),
    },
    children
  );
};

export default memo(Spotlight);