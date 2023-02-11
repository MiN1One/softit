import { IVacancy } from "@/interfaces/vacancies.interface";
import classNames from "classnames";
import { FC, memo } from "react";
import { useTranslation } from "next-i18next";
import VacancyCard from "../VacancyCard/VacancyCard";
import classes from './VacanciesContainer.module.scss';

interface VacanciesContainerProps {
  vacancies: IVacancy[];
}

const VacanciesContainer: FC<VacanciesContainerProps> = (props) => {
  const { vacancies } = props;
  const { t } = useTranslation();

  const vacancyCardEls = vacancies.map((vacancy, index) => {
    return (
      <VacancyCard key={index} vacancy={vacancy} />
    );
  });
  
  return (
    <section className={classNames("page-section", classes.vacancies)}>
      <div className="container">
        <div className="page-section__head">
          <h1 className="heading heading--xlg">
            {t('vacancies')}
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