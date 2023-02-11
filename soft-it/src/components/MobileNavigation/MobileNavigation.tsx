import { useGlobalContext } from "@/contexts/GlobalContext";
import useHideScrollbar from "@/hooks/useHideScrollbar";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, memo, useEffect, useTransition } from "react";
import CustomIcon from "../Common/CustomIcon";
import Logo from "../Common/Logo";
import Dropdown from "../Dropdown/Dropdown";
import languages from "@/config/languages";
import classes from './MobileNavigation.module.scss';

const MobileNavigation: FC = () => {
  const {
    showMobileNav,
    setShowMobileNav,
    changeLanguage,
    activeLang,
    headData: { headerData }
  } = useGlobalContext();
  const { pathname } = useRouter();

  useHideScrollbar(showMobileNav);

  useEffect(() => {
    setShowMobileNav(false);
  }, [pathname]);

  const navLinkEls = headerData.menus.map(item => {
    return (
      <Link href={item.url} title={item.title} key={item.id}>
        <li 
          aria-label={item.title}
          className={classNames(
            classes.item, 
            { [classes.active]: pathname.includes(item.url) }
          )}
        >
          {item.title}
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
              onClickItem={changeLanguage}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(MobileNavigation);