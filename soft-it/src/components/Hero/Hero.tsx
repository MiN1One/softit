import { FC, memo } from "react";
import classes from './Hero.module.scss';
import mountains from '@assets/images/Planet png 1.png';
import Moon from "../Common/Moon";
import Spotlight from "../Spotlight/Spotlight";
import classNames from "classnames";

const Hero: FC = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.textContainer}>
        <Spotlight 
          className={classNames(classes.heading, "heading heading--xlg")}
        >
          Explore us
        </Spotlight>
      </div>
      <div className={classes.moonImage}>
        <Moon />
      </div>
      <figure className={classes.floatingImage}>
        <img
          src={mountains.src}
          width={mountains.width}
          height={mountains.height}
          alt="Mountains Soft IT"
        />
      </figure>
    </section>
  );
};

export default memo(Hero);