import { FC, memo } from "react";
import classes from './CtaGroup.module.scss';
import illustration from '@assets/images/5.png';
import classNames from "classnames";

const CtaGroup: FC = () => {
  
  return (
    <section className={classes.cta}>
      <div className="container">
        <div className={classes.groupLeft}>
          <h2 className={classNames("heading heading--2", classes.heading)}>
            We offer best digital solutions for your business
          </h2>
          <div className="text--lg text--sub">
            For any Business
          </div>
        </div>
        <figure className={classes.figure}>
          <img
            src={illustration.src}
            height={illustration.height}
            width={illustration.width}
            alt="Illustration Image"
          />
        </figure>
      </div>
    </section>
  );
};

export default memo(CtaGroup);