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

const Navigation: FC = () => {
  const { changeLanguage, activeLang, headData } = useGlobalContext();
  const router = useRouter();

  const { headerData } = headData;

  const navigationItemEls = headerData.menus.map(item => {
    return (
      <li
        aria-label={item.title}
        className={classNames(
          classes.item,
          { [classes.active]: router.pathname.includes(item.url) }
        )}
        key={item.id}
      >
        <Link href={item.url} title={item.title}>
          {item.title}
        </Link>
      </li>
     );
  });

  return (
    <header className={classes.nav}>
      <div className="container">
        <nav className={classes.content}>
          <Link href="/" title={headerData.company_info.logo_title}>
            <Logo className={classes.logo} />
          </Link>
          <div className={classes.group}>
            <ul className={classes.list}>
              {navigationItemEls}
            </ul>
            <a
              href={`tel:${headerData.company_info.phone_number}`}
              title="Our Phone Number" 
              className={classes.phone}
              dangerouslySetInnerHTML={{ __html: headerData.company_info.phone_number }}
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