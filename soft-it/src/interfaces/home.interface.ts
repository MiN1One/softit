import { IProject } from "./project.interface";
import { IPartner } from './partner.interface';
import { IService } from "./service.interface";
import { IVacancy } from "./vacancies.interface";

export interface IAboutSection {
  short_description: string;
  images: IImage[];
}

export interface IImage {
  image_url: string;
  id: number;
  title: string;
  url?: string;
}

export interface IHomeData {
  about: IAboutSection;
  portfolio: IProject[];
  partners: IPartner[];
  services: IService[];
  hot_vacancies: IVacancy[];
}