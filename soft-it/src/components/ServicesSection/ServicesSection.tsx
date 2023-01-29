import { FC, memo } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import classes from './ServicesSection.module.scss';

const ServiceCards = [
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId'
  },
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId'
  },
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId'
  },
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId'
  },
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId'
  },
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId'
  },
];

const ServicesSection: FC = () => {

  const serviceEls = ServiceCards.map((item, index) => {
    return (
      <ServiceCard 
        url={item.url}
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