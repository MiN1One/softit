import { useGlobalContext } from "@/contexts/GlobalContext";
import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";
import CustomIcon from "../Common/CustomIcon";
import Logo from "../Common/Logo";
import Dropdown from "../Dropdown/Dropdown";
import classes from './Navigation.module.scss';

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

const Navigation: FC = () => {
  const { setActiveLang } = useGlobalContext();

  const navigationItemEls = data.navigation_items.map(item => {
    return (
      <li
        aria-label={item.label}
        className={classes.item}
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
          <Logo className={classes.logo} />
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
                  Eng
                </span>
              )}
              items={data.languages}
              onClickItem={setActiveLang}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;