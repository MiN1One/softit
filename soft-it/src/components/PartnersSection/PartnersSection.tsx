import { FC, memo } from "react";
import classes from './PartnersSection.module.scss';
import image1 from '@assets/images/Rectangle1.png';
import image2 from '@assets/images/Rectangle2.png';
import image3 from '@assets/images/Rectangle3.png';
import image4 from '@assets/images/Rectangle4.png';
import image5 from '@assets/images/Rectangle5.png';
import image6 from '@assets/images/Rectangle6.png';
import image7 from '@assets/images/Rectangle7.png';

const cardItems = [
  {
    image: image1.src,
    label: ''
  },
  {
    image: image2.src,
    label: ''
  },
  {
    image: image3.src,
    label: ''
  },
  {
    image: image4.src,
    label: ''
  },
  {
    image: image5.src,
    label: ''
  },
  {
    image: image6.src,
    label: ''
  },
  {
    image: image7.src,
    label: ''
  },
];

const PartnersSection: FC = () => {
  const cardEls = [
    ...cardItems, 
    ...cardItems.slice(0, 5)
  ].map((item, index) => {
    return (
      <div key={index} className={classes.card}>
        <figure className={classes.figure}>
          <img 
            src={item.image}
            alt="Partner Image"
            width="100%"
            height="100%"
          />
        </figure>
      </div>
    );
  });

  return (
    <section className={classes.partners}>
      <div className="container">
        <h3 className="heading heading--3">
          Our partners
        </h3>
        <div className={classes.cards}>
          {cardEls}
        </div>
      </div>
    </section>
  );
};

export default memo(PartnersSection);