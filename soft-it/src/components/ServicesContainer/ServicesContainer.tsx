import classNames from "classnames";
import { FC, FormEvent, memo, useCallback, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import classes from './ServicesContainer.module.scss';


const ServiceCards = [
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId',
  },
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId',
  },
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId',
  },
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId',
  },
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId',
  },
  {
    title: 'Frontend Development',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".',
    url: '/services/:serviceId',
  }
];
  
const ServicesContainer: FC = () => {
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
    <section className={classNames(classes.services, 'page-section')}>
      <div className="container">
        <div className="page-section__head">
          <h1 className="heading heading--1">
            Our services
          </h1>
        </div>
        <div className="page-section__body">
          <p className="text text--sub">
            Do you have a project?
          </p>
          <h2 className={classNames(classes.heading, "heading heading--3")}>
            We have a solution for you.
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