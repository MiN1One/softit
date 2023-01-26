import { FC, memo } from "react";
import classes from './BannerHiring.module.scss';
import emoji from '@assets/images/Winking Face.png';
import classNames from "classnames";
import Link from "next/link";


const hiringTags = [
  {
    url: '/',
    label: 'Frontend — VueJS, Javascript'
  },
  {
    url: '/',
    label: 'Frontend — VueJS, Javascript'
  },
  {
    url: '/',
    label: 'Frontend — VueJS, Javascript'
  },
  {
    url: '/',
    label: 'Frontend — VueJS, Javascript'
  },
  {
    url: '/',
    label: 'Frontend — VueJS, Javascript'
  },
];

const BannerHiring: FC = () => {

  const hiringTagEls = hiringTags.map((item, index) => {
    return (
      <li
        key={index}
        className={classNames(classes.tag, 'btn btn--outline')}
        aria-label={item.label}
      >
        <Link href={item.url} title={item.label}>
          {item.label}
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
              You can be part of<br/> our team
              <img 
                alt="Emoji"
                src={emoji.src}
                width="20"
                height="20"
              />
            </h4>
            <p className="text text--sub">
              Want to grow with us? Then join us.
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