import { FC, memo } from "react";
import classes from './CtaGroup.module.scss';
import illustration from '@assets/images/5.png';
import classNames from "classnames";
import CustomIcon from "../Common/CustomIcon";

const CtaGroup: FC = () => {
  
  return (
    <section className={classes.cta}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.groupLeft}>
            <h2 className={classNames("heading heading--2", classes.heading)}>
              We offer best digital<br /> solutions for your business
            </h2>
            <div className={classNames(classes.subtitle, "text--lg text--sub")}>
              For any Business
            </div>
            <div className="btn-group">
              <a href="tel:+998999999999" title="Phone call" className="btn btn--primary">
                <CustomIcon name="call" />
                Call us
              </a>
              <a href="/portfolio" title="Phone call" className="btn btn--outline btn--arrow">
                <CustomIcon name="arrow" />
                Our portfolio
              </a>
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
      </div>
    </section>
  );
};

export default memo(CtaGroup);