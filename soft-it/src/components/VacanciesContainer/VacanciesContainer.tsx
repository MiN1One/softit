import { IVacancy } from "@/interfaces/vacancies.interface";
import classNames from "classnames";
import { FC, memo } from "react";
import VacancyCard from "../VacancyCard/VacancyCard";
import classes from './VacanciesContainer.module.scss';

const vacancyItems: IVacancy[] = [
  {
    title: 'Frontend Developer',
    time: {
      from: '9',
      to: '18'
    },
    salaryRange: {
      from: 8_000_000,
      to: 12_000_000
    },
    id: '1',
    tasks: [],
    requirements: [],
    days: 'Monday - Saturday',
    conditions: []
  },
  {
    title: 'Frontend Developer',
    time: {
      from: '9',
      to: '18'
    },
    salaryRange: {
      from: 8_000_000,
      to: 12_000_000
    },
    id: '1',
    tasks: [],
    requirements: [],
    days: 'Monday - Saturday',
    conditions: []
  },
  {
    title: 'Frontend Developer',
    time: {
      from: '9',
      to: '18'
    },
    salaryRange: {
      from: 8_000_000,
      to: 12_000_000
    },
    id: '1',
    tasks: [],
    requirements: [],
    days: 'Monday - Saturday',
    conditions: []
  },
  {
    title: 'Frontend Developer',
    time: {
      from: '9',
      to: '18'
    },
    salaryRange: {
      from: 8_000_000,
      to: 12_000_000
    },
    id: '1',
    tasks: [],
    requirements: [],
    days: 'Monday - Saturday',
    conditions: []
  },
  {
    title: 'Frontend Developer',
    time: {
      from: '9',
      to: '18'
    },
    salaryRange: {
      from: 8_000_000,
      to: 12_000_000
    },
    id: '1',
    tasks: [],
    requirements: [],
    days: 'Monday - Saturday',
    conditions: []
  },
  {
    title: 'Frontend Developer',
    time: {
      from: '9',
      to: '18'
    },
    salaryRange: {
      from: 8_000_000,
      to: 12_000_000
    },
    id: '1',
    tasks: [],
    requirements: [],
    days: 'Monday - Saturday',
    conditions: []
  },
  {
    title: 'Frontend Developer',
    time: {
      from: '9',
      to: '18'
    },
    salaryRange: {
      from: 8_000_000,
      to: 12_000_000
    },
    id: '1',
    tasks: [],
    requirements: [],
    days: 'Monday - Saturday',
    conditions: []
  },
  {
    title: 'Frontend Developer',
    time: {
      from: '9',
      to: '18'
    },
    salaryRange: {
      from: 8_000_000,
      to: 12_000_000
    },
    id: '1',
    tasks: [],
    requirements: [],
    days: 'Monday - Saturday',
    conditions: []
  },
  {
    title: 'Frontend Developer',
    time: {
      from: '9',
      to: '18'
    },
    salaryRange: {
      from: 8_000_000,
      to: 12_000_000
    },
    id: '1',
    tasks: [],
    requirements: [],
    days: 'Monday - Saturday',
    conditions: []
  },
];

const VacanciesContainer: FC = () => {
  const vacancyCardEls = vacancyItems.map((vacancy, index) => {
    return (
      <VacancyCard key={index} vacancy={vacancy} />
    );
  });
  
  return (
    <section className={classNames("page-section", classes.vacancies)}>
      <div className="container">
        <div className="page-section__head">
          <h1 className="heading heading--xlg">
            Vacancies
          </h1>
        </div>
        <div className={classNames(
          classes.cards, 
          "page-section__body"
        )}>
          {vacancyCardEls}
        </div>
      </div>
    </section>
  );
};

export default memo(VacanciesContainer)