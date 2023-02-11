import { IVacancy } from "@/interfaces/vacancies.interface";
import classNames from "classnames";
import Link from "next/link";
import { FC, memo } from "react";
import CustomIcon from "../Common/CustomIcon";
import classes from './VacancyCard.module.scss';

interface VacancyCardProps {
  vacancy: IVacancy;
}

const VacancyCard: FC<VacancyCardProps> = (props) => {
  const { vacancy } = props;

  return (
    <Link href={`/vacancies/${vacancy.id}`} title={vacancy.title}>
      <div 
        tabIndex={0}
        role="contentinfo" 
        aria-label={vacancy.title} 
        className={classes.vacancy}
      >
        <span className={classNames(
          classes.title, 
          'text text--lg text--light'
        )}>
          {vacancy.title}
        </span>
        <div className={classes.body}>
          <span className={classes.infoGroup}>
            <CustomIcon name="calendar" />
            {vacancy.working_days}
          </span>
          <span className={classes.infoGroup}>
            <CustomIcon name="clock" />
            {vacancy.working_hours}
          </span>
        </div>
        <div className={classes.footer}>
          <span className={classNames(classes.salary, classes.infoGroup)}>
            <CustomIcon name="coin" />
            {vacancy.salary}
          </span>
          <CustomIcon className={classes.arrow} name="arrow" />
        </div> 
      </div>
    </Link>
  );
};

export default memo(VacancyCard);