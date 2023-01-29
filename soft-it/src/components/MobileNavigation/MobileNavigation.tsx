import { useGlobalContext } from "@/contexts/GlobalContext";
import useHideScrollbar from "@/hooks/useHideScrollbar";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, memo, useEffect } from "react";
import CustomIcon from "../Common/CustomIcon";
import Logo from "../Common/Logo";
import Dropdown from "../Dropdown/Dropdown";
import classes from './MobileNavigation.module.scss';

const data = {
  phone_number: {
    label: '+99899 <span class="text--highlight">999 99 99</span>',
    value: '+9989999999'
  },
  languages: [
    {
      label: 'English',
      value: 'en'
    }
  ],
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

const languages = [
  { label: 'English', value: 'en' }
];

const MobileNavigation: FC = () => {
  const {
    showMobileNav,
    setShowMobileNav,
    activeLang,
    setActiveLang,
  } = useGlobalContext();
  const { pathname } = useRouter();

  useHideScrollbar(showMobileNav);

  useEffect(() => {
    setShowMobileNav(false);
  }, [pathname]);

  const navLinkEls = data.navigation_items.map(item => {
    return (
      <Link href={item.url} title={item.label} key={item.value}>
        <li 
          aria-label={`Navigation link ${item.label}`} 
          className={classNames(
            classes.item, 
            { [classes.active]: pathname.includes(item.url) }
          )}
        >
          {item.label}
        </li>
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <div 
        aria-hidden={!showMobileNav} 
        role="dialog" 
        className={classes.drawer}
      >
        <button 
          title="Close menu" 
          className={classes.btnClose}
          onClick={() => setShowMobileNav(false)}
        >
          <CustomIcon name="close" />
        </button>
        <ul role="menu" className={classes.list}>
          {navLinkEls}
        </ul>
      </div>
      <nav role="navigation">
        <div className="container">
          <div className={classes.content}>
            <button 
              title="Open Menu" 
              onClick={() => setShowMobileNav(true)}
              className="btn btn--outline"
            >
              <CustomIcon name="burger" />
            </button>
            <Link className={classes.logo} href="/" title="home">
              <Logo />
            </Link>
            <Dropdown
              label={(
                <React.Fragment>
                  <CustomIcon name="global" />
                  {activeLang.toUpperCase()}
                </React.Fragment>
              )}
              items={languages}
              onClickItem={setActiveLang}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(MobileNavigation);