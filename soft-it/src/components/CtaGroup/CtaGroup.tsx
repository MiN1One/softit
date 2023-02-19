import { FC, memo } from "react";
import classes from './CtaGroup.module.scss';
import illustration from '@assets/images/5.png';
import classNames from "classnames";
import CustomIcon from "../Common/CustomIcon";
import { useTranslation } from "next-i18next";
import { useGlobalContext } from "@/contexts/GlobalContext";

const CtaGroup: FC = () => {
  const { t } = useTranslation();
  const { headData } = useGlobalContext();
  
  return (
    <section className={classes.cta}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.groupLeft}>
            <h2 
              className={classNames(
                "heading heading--2", 
                classes.heading
              )}
              dangerouslySetInnerHTML={{ __html: t('ctaTitle') }}
            />
            <div className={classNames(
              classes.subtitle, 
              "text--lg text--sub text"
            )}>
              {t('forAny')}
            </div>
            <div className="btn-group">
              <a 
                href={`tel:${headData.footerData.company_info.phone_number}`}
                title="Phone call" 
                className="btn btn--primary"
              >
                <CustomIcon name="call" />
                {t('callUs')}
              </a>
              <a 
                href="/portfolio" 
                title="Phone call" 
                className="btn btn--outline btn--arrow"
              >
                <CustomIcon name="arrow" />
                {t('ourPortfolio')}
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