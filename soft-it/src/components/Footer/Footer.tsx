import classNames from "classnames";
import Link from "next/link";
import { FC, memo } from "react";
import CustomIcon from "../Common/CustomIcon";
import { LogoNoText } from "../Common/Logo";
import classes from './Footer.module.scss';
import designerImage from '@assets/images/_x31_.png';

const footerData = {
  links: [
    {
      label: 'About us',
      url: '/about',
    },
    {
      label: 'Services',
      url: '/services',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
    {
      label: 'Vacancies',
      url: '/vacancies',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
  ],
  contactLinks: [
    {
      value: 'instagram',
      url: 'https://instagram.com'
    },
    {
      value: 'facebook',
      url: 'https://facebook.com'
    },
    {
      value: 'telegram',
      url: 'https://t.me/soft-it'
    },
    {
      value: 'phone',
      label: '+998 99 999 99 99',
      url: 'tel:+998 99 999 99 99'
    },
    {
      value: 'email',
      label: 'soft-it@info.uz',
      url: 'mailto:soft-it@info.uz'
    },
  ]
};

const currentYear = (new Date()).getFullYear();

const Footer: FC = () => {
  const linkEls = footerData.links.map((link, index) => {
    return (
      <li key={index} aria-label={link.label} className="link text--upc">
        <Link href={link.url} title={link.label}>
          {link.label}
        </Link>
      </li>
    );
  });

  const socialLinksEls = footerData.contactLinks.map((link, index) => {
    return (
      <li
        className={classNames(
          classes.socialLink, 
          'link',
          { [classes.labeled]: link.label }
        )}
        aria-label={link.label || 'Social Media Link'}
        key={index}
      >
        <a
          href={link.url}
          target="_blank"
          rel="noopener;noreferrer"
          title={link.label || 'Social Media link'}
        >
          <div className={classes.icon}>
            <CustomIcon name={link.value} />
          </div>
          <span>{link.label}</span>
        </a>
      </li>
    );
  });

  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.content}>
          <button 
            className={classes.btnScroll} 
            title="Scroll to top"
            onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
          >
            <CustomIcon name="arrow" />
          </button>
          <ul className={classes.links}>
            {linkEls}
          </ul>
          <ul className={classes.socialLinks}>
            {socialLinksEls}
          </ul>
          <div className={classes.bottom}>
            <span className="text text--light text--bold">
              {currentYear} Soft IT Group
            </span>
            <LogoNoText />
            <div className={classes.designer}>
              <span className="text--sub text text--sm">
                Designed by:
              </span>
              <img
                src={designerImage.src}
                alt="Designer sign"
                width={designerImage.width}
                height={designerImage.height}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);