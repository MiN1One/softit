import { FC, memo, useCallback, useState } from "react";
import classes from './Hero.module.scss';
import mountains from '@assets/images/Planet png 1.png';
import Moon from "../Common/Moon";
import Spotlight from "../Spotlight/Spotlight";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import CustomIcon from "../Common/CustomIcon";

const Hero: FC = () => {
  const { t } = useTranslation();
  const [moonLoaded, setMoonLoaded] = useState(false);

  const onMoonLoad = useCallback(() => setMoonLoaded(true), []);

  return (
    <section className={classes.hero}>
      <div className={classes.textContainer}>
        <span className={classNames(
          classes.headingOverlay, 
          "heading heading--xlg"
        )}>
          {t('exploreUs')}
        </span>
        <Spotlight className={classNames(
          classes.heading, 
          "heading heading--xlg"
        )}>
          {t('exploreUs')}
        </Spotlight>
      </div>
      <figure 
        className={classNames(
          { [classes.loaded]: moonLoaded }, 
          classes.moonImage)
        }
      >
        <Moon onLoad={onMoonLoad} />
      </figure>
      <div className={classes.hint}>
        <CustomIcon name="mouse" />
        {t('scrollDown')}
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