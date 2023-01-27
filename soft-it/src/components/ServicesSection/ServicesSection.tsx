import { FC, memo } from "react";
import ServiceItem from "../ServiceItem/ServiceItem";
import classes from './ServicesSection.module.scss';

const serviceItems = [
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".'
  }
];

const ServicesSection: FC = () => {

  const serviceEls = [
    ...serviceItems, 
    ...serviceItems,
    ...serviceItems,
    ...serviceItems,
    ...serviceItems,
    ...serviceItems,
  ].map((item, index) => {
    return (
      <ServiceItem 
        value={index.toString()}
        key={index}
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