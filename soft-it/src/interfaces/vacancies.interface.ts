export interface IVacancyInfoItem {
  content: string;
}

export interface IVacancy {
  id: number;
  title: string;
  working_days: string;
  working_hours: string;
  salary: string;
  conditions: IVacancyInfoItem[];
  tasks: IVacancyInfoItem[];
  requirements: IVacancyInfoItem[];
}