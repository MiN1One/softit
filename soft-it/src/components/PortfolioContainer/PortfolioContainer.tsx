import classNames from "classnames";
import { FC, memo, useState } from "react";
import Portfolio from "../Portfolio/Portfolio";
import Tags from "../Tags/Tags";
import classes from './PortfolioContainer.module.scss';

const tagItems = ['all', 'Mobile App', 'CRM', 'Webstite'];

const PortfolioContainer: FC = () => {
  const [activeTag, setActiveTag] = useState('all');

  return (
    <section className={classNames("page-section", classes.portfolio)}>
      <div className="page-section__head">
        <h1 className="heading heading--xlg">
          Portfolio
        </h1>
      </div>
      <div className="page-section__body">
        <div className="container">
          <Tags
            items={tagItems}
            onClickTag={setActiveTag}
            activeTag={activeTag}
          />
        </div>
        <Portfolio />
      </div>
    </section>
  );
};

export default memo(PortfolioContainer);