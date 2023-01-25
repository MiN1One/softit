import { FC, memo } from "react";
import classes from './AboutSection.module.scss';
import image1 from '@assets/images/image1.png';
import image2 from '@assets/images/image2.png';
import image3 from '@assets/images/image3.png';
import image4 from '@assets/images/image4.png';
import classNames from "classnames";

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

  const cardEls = cardItems.map((card, index) => {
    return (
      <div key={index} tabIndex={0} className={classes.card}>
        <figure className={classes.figure}>
          <img
            src={card.image}
            alt={`Card image ${card.label}`}
            width="100%"
            height="100%"
          />
        </figure>
        <div className={classes.cardContent}>
          <a href={card.url} className="btn btn--colored" title={card.label}>
            {card.label}
          </a>
        </div>
      </div>
    );
  });

  return (
    <section className={classes.about}>
      <div className="container">
        <h3 className="heading heading--3">
          About us
        </h3>
        <p className={classNames(classes.text, "text text--sub")}>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
        </p>
        <div className={classes.cards}>
          {cardEls}
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);