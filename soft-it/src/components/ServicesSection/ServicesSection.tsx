import { useHomeContext } from "@/contexts/HomeContext";
import { FC, memo } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import classes from './ServicesSection.module.scss';

const ServicesSection: FC = () => {
  const { data } = useHomeContext();
 
  const serviceEls = data?.services?.map((item) => {
    return (
      <ServiceCard 
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
          Services
        </h3>
        <div className={classes.cards}>
          {serviceEls}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);