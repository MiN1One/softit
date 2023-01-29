export interface IVacancy {
  title: string;
  id: string;
  salaryRange: {
    from: number;
    to: number;
  };
  time: {
    from: string;
    to: string;
  };
  days: 'Monday - Saturday' | '5/7' | '6/7' | '7/7';
  requirements: string[];
  tasks: string[];
  conditions: string[];
}