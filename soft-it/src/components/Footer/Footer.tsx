import { useGlobalContext } from "@/contexts/GlobalContext";
import classNames from "classnames";
import Link from "next/link";
import { FC, memo, useMemo } from "react";
import CustomIcon from "../Common/CustomIcon";
import { LogoNoText } from "../Common/Logo";
import classes from './Footer.module.scss';

const currentYear = (new Date()).getFullYear();

const linkPrefixesMap = {
  phone: 'tel:',
  email: 'mailto:'
};

const Footer: FC = () => {
  const { headData: { footerData } } = useGlobalContext();

  const linkEls = footerData.menus.map((link) => {
    return (
      <li key={link.id} aria-label={link.title} className="link text--upc">
        <Link href={link.url} title={link.title}>
          {link.title}
        </Link>
      </li>
    );
  });

  const socialLinksEls = useMemo(() => {
    const { company_info } = footerData || {};
    if (!company_info) return null;
    const linksMap = {
      facebook: {
        labeled: false,
        value: company_info.facebook_link
      },
      instagram: {
        labeled: false,
        value: company_info.instagram_link
      },
      telegram: {
        labeled: false,
        value: company_info.telegram_link
      },
      email: {
        labeled: true,
        value: company_info.email
      },
      phone: {
        labeled: true,
        value: company_info.phone_number
      },
    };
    return Object.keys(linksMap).map((key, index) => {
      const link = linksMap[key as keyof typeof linksMap];
      return (
        <li
          className={classNames(
            classes.socialLink, 
            'link',
            { [classes.labeled]: link.labeled }
          )}
          aria-label={link.value || 'Social Media Link'}
          key={index}
        >
          <a
            href={
              key in linkPrefixesMap 
                ? `${linkPrefixesMap[key as keyof typeof linkPrefixesMap]}${link.value}` 
                : link.value
            }
            target="_blank"
            rel="noopener;noreferrer"
            title={link.value || 'Social Media link'}
          >
            <div className={classes.icon}>
              <CustomIcon name={key} />
            </div>
            {link.labeled && (
              <span>{link.value}</span>
            )}
          </a>
        </li>
      );
    });
  }, [footerData]);

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
            {/* <div className={classes.designer}>
              <span className="text--sub text text--sm">
                Designed by:
              </span>
              <img
                src={designerImage.src}
                alt="Designer sign"
                width={designerImage.width}
                height={designerImage.height}
              />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);