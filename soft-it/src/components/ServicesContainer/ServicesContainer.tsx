import { IService } from "@/interfaces/service.interface";
import classNames from "classnames";
import { FC, memo } from "react";
import { useTranslation } from "next-i18next";
import ServiceCard from "../ServiceCard/ServiceCard";
import classes from './ServicesContainer.module.scss';
  
interface ServicesContainerProps {
  data: IService[];
}

const ServicesContainer: FC<ServicesContainerProps> = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  const serviceEls = data.map((item) => {
    return (
      <ServiceCard
        url={`/services/${item.id}`}
        key={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });

  return (
    <section className={classNames(classes.services, 'page-section')}>
      <div className="container">
        <div className="page-section__head">
          <h1 className="heading heading--1">
            {t('ourServices')}
          </h1>
        </div>
        <div className="page-section__body">
          <p className="text text--sub">
            {t('contactTitle')}
          </p>
          <h2 className={classNames(classes.heading, "heading heading--3")}>
            {t('contactSubtitle')}
          </h2>
          <div className={classes.cards}>
            {serviceEls}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesContainer);