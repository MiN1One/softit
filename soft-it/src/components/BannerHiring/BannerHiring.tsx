import { FC, memo } from "react";
import classes from './BannerHiring.module.scss';
import emoji from '@assets/images/Winking Face.png';
import classNames from "classnames";
import Link from "next/link";
import { useHomeContext } from "@/contexts/HomeContext";
import { Trans, useTranslation } from "next-i18next";

const BannerHiring: FC = () => {
  const { data } = useHomeContext();
  const { t } = useTranslation();

  const hiringTagEls = data.hot_vacancies.map((item, index) => {
    return (
      <li
        key={index}
        className={classNames(classes.tag, 'btn btn--outline')}
        aria-label={item.title}
      >
        <Link href={`/vacancies/${item.id}`} title={item.title}>
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <section className={classes.banner}>
      <div className="container">
        <div className={classes.content}>
          <div>
            <h4 className={classNames(classes.heading, "heading heading--3")}>
              <Trans i18nKey="bannerTitle" components={[<br />]} />
              <img 
                alt="Emoji"
                src={emoji.src}
                width="20"
                height="20"
              />
            </h4>
            <p className="text text--sub">
              {t('bannerSubtitle')}
            </p>
          </div>
          <ul className={classes.tags}>
            {hiringTagEls}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(BannerHiring);