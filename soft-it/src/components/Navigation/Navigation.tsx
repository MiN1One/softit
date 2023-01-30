import { useGlobalContext } from "@/contexts/GlobalContext";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import CustomIcon from "../Common/CustomIcon";
import Logo from "../Common/Logo";
import Dropdown from "../Dropdown/Dropdown";
import classes from './Navigation.module.scss';
import languages from "@/config/languages";
import { useTranslation } from "react-i18next";

const data = {
  phone_number: {
    label: '+99899 <span class="text--highlight">999 99 99</span>',
    value: '+9989999999'
  },
  navigation_items: [
    {
      label: 'About Us',
      value: 'about-us',
      url: '/about',
    },
    {
      label: 'Services',
      value: 'services',
      url: '/services',
    },
    {
      label: 'Portfolio',
      value: 'portfolio',
      url: '/portfolio',
    },
    {
      label: 'Vacancies',
      value: 'vacancies',
      url: '/vacancies',
    },
    {
      label: 'Blog',
      value: 'blog',
      url: '/blog',
    },
  ],
};

const Navigation: FC = () => {
  const { changeLanguage, activeLang, } = useGlobalContext();
  const router = useRouter();

  const navigationItemEls = data.navigation_items.map(item => {
    return (
      <li
        aria-label={item.label}
        className={classNames(
          classes.item,
          { [classes.active]: router.pathname.includes(item.url) }
        )}
        key={item.value}
      >
        <Link href={item.url} title={item.label}>
          {item.label}
        </Link>
      </li>
     );
  });

  return (
    <header className={classes.nav}>
      <div className="container">
        <nav className={classes.content}>
          <Link href="/" title="Home">
            <Logo className={classes.logo} />
          </Link>
          <div className={classes.group}>
            <ul className={classes.list}>
              {navigationItemEls}
            </ul>
            <a
              href={`tel:${data.phone_number.value}`}
              title="Our Phone Number" 
              className={classes.phone}
              dangerouslySetInnerHTML={{ __html: data.phone_number.label }}
            />
            <Dropdown
              label={(
                <span className={classNames(classes.language, "text--upc")}>
                  <CustomIcon name="global" />
                  {activeLang.toUpperCase()}
                </span>
              )}
              items={languages}
              onClickItem={changeLanguage}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;