import { FC, memo } from "react";
import classes from './AboutSection.module.scss';
import image1 from '@assets/images/image1.png';
import image2 from '@assets/images/image2.png';
import image3 from '@assets/images/image3.png';
import image4 from '@assets/images/image4.png';
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useHomeContext } from "@/contexts/HomeContext";

const cardItems = [
  {
    image: image1.src,
    url: '/',
    label: 'Office'
  },
  {
    image: image2.src,
    url: '/',
    label: 'Office'
  },
  {
    image: image3.src,
    url: '/',
    label: 'Office'
  },
  {
    image: image4.src,
    url: '/',
    label: 'Office'
  },
];

const AboutSection: FC = () => {
  const { t } = useTranslation();
  const { data } = useHomeContext();

  const cardEls = data.about.images.map((card, index) => {
    return (
      <div key={card.id || index} tabIndex={0} className={classes.card}>
        <figure className={classes.figure}>
          <img
            src={card.image_url}
            alt={`Card image ${card.title}`}
            width="100%"
            height="100%"
          />
        </figure>
        <div className={classes.cardContent}>
          {card.url && (
            <a href={card.url} className="btn btn--colored" title={card.title}>
              {card.title}
            </a>
          )}
        </div>
      </div>
    );
  });

  return (
    <section className={classes.about}>
      <div className="container">
        <h3 className="heading heading--3">
          {t('about')}
        </h3>
        <p className={classNames(classes.text, "text text--sub")}>
          {data.about.short_description}
        </p>
        <div className={classes.cards}>
          {cardEls}
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);