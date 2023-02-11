import { FC, memo } from "react";
import classes from './Portfolio.module.scss';
import Link from "next/link";
import classNames from "classnames";
import CustomIcon from "../Common/CustomIcon";
import { IProject } from "@/interfaces/project.interface";
import { useTranslation } from "next-i18next";
import { useHomeContext } from "@/contexts/HomeContext";

interface PortfolioProps {
  asSection?: boolean;
  projects?: IProject[];
}

const Portfolio: FC<PortfolioProps> = (props) => {
  const { projects = [], asSection = false } = props;
  const { data } = useHomeContext();
  const { t } = useTranslation();

  const projectItems = asSection && data.portfolio ? data.portfolio : projects;
  
  const portfolioEls = projectItems.map((item, index) => {
    return (
      <Link
        className={classes.card}
        key={index}
        href={item.link}
        title={item.title}
      >
        <figure className={classes.figure}>
          <img
            src={item.image_url}
            alt={`Portfiolio ${item.title}`}
            width="100%"
            height="100%"
          />
        </figure>
        <div className={classes.cardContent}>
          <div className={classes.cardHead}>
            <span 
              className="text--lg text text--bold text--light"
            >
              {item.title}
            </span>
            <span className="text text--sub">{item.category_name}</span>
          </div>
          <div className={classes.cardActions}>
            <div className={classes.cardLink}>
              {t('viewMore')}
              <CustomIcon name="arrow" />
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className={classes.portfolio}>
      <div className="container">
        {asSection && (
          <h3 className="heading heading--3">
            {t('portfolio')}
          </h3>
        )}
        <div className={classes.cards}>
          {portfolioEls}
        </div>
        {asSection && (
          <Link
            href="/portfolio"
            className={classNames(
              classes.btn, 
              "btn btn--colored btn--arrow btn--outline"
            )}
          >
            <CustomIcon name="arrow" />
            {t('allProjects')}
          </Link>
        )}
      </div>
    </section>
  );
};

export default memo(Portfolio);