import { FC, memo } from "react";
import classes from './Portfolio.module.scss';
import image1 from '@assets/images/portfolio1.png';
import image2 from '@assets/images/portfolio2.png';
import image3 from '@assets/images/portfolio3.png';
import image4 from '@assets/images/portfolio4.png';
import image5 from '@assets/images/portfolio5.png';
import Link from "next/link";
import classNames from "classnames";
import CustomIcon from "../Common/CustomIcon";

interface PortfolioProps {
  asSection?: boolean;
}

const portfolioItems = [
  {
    label: 'View more',
    title: 'Naf',
    subtitle: 'Mobile app',
    image: image5.src,
    url: '/'
  },
  {
    label: 'View more',
    title: 'Naf',
    subtitle: 'Mobile app',
    image: image2.src,
    url: '/'
  },
  {
    label: 'View more',
    title: 'Naf',
    subtitle: 'Mobile app',
    image: image1.src,
    url: '/'
  },
  {
    label: 'View more',
    title: 'Naf',
    subtitle: 'Mobile app',
    image: image2.src,
    url: '/'
  },
  {
    label: 'View more',
    title: 'Naf',
    subtitle: 'Mobile app',
    image: image1.src,
    url: '/'
  },
  {
    label: 'View more',
    title: 'Naf',
    subtitle: 'Mobile app',
    image: image4.src,
    url: '/'
  },
  {
    label: 'View more',
    title: 'Naf',
    subtitle: 'Mobile app',
    image: image3.src,
    url: '/'
  },
];

const Portfolio: FC<PortfolioProps> = ({ asSection = false }) => {
  const portfolioEls = portfolioItems.map((item, index) => {
    return (
      <Link
        className={classes.card}
        key={index}
        href={item.url}
        title={item.title}
      >
        <figure className={classes.figure}>
          <img
            src={item.image}
            alt={`Portfiolio ${item.label}`}
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
            <span className="text text--sub">{item.subtitle}</span>
          </div>
          <div className={classes.cardActions}>
            <div className={classes.cardLink}>
              {item.label}
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
            Portfolio
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
            All projects
          </Link>
        )}
      </div>
    </section>
  );
};

export default memo(Portfolio);