import { useHomeContext } from "@/contexts/HomeContext";
import { FC, memo } from "react";
import { useTranslation } from "next-i18next";
import ServiceCard from "../ServiceCard/ServiceCard";
import classes from './ServicesSection.module.scss';

const ServicesSection: FC = () => {
  const { t } = useTranslation();
  const { data } = useHomeContext();
 
  const serviceEls = data?.services?.map((item) => {
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
    <section className={classes.services}>
      <div className="container">
        <h3 className="heading heading--3">
          {t('services')}
        </h3>
        <div className={classes.cards}>
          {serviceEls}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);