import { FC, memo } from "react";
import classes from './PartnersSection.module.scss';
import { useHomeContext } from "@/contexts/HomeContext";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const PartnersSection: FC = () => {
  const { data } = useHomeContext();
  const { t } = useTranslation();

  const cardEls = data?.partners?.map(item => {
    return (
      <Link key={item.id} href={item.link} title={item.title}>
        <div className={classes.card}>
          <figure className={classes.figure}>
            <img 
              src={item.image_url}
              alt="Partner Image"
              width="100%"
              height="100%"
            />
          </figure>
        </div>
      </Link> 
    );
  });

  return (
    <section className={classes.partners}>
      <div className="container">
        <h3 className="heading heading--3">
          {t('partners')}
        </h3>
        <div className={classes.cards}>
          {cardEls}
        </div>
      </div>
    </section>
  );
};

export default memo(PartnersSection);