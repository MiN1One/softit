export interface IAboutPageData {
  id: number;
  title: string;
  description: string;
  images: IAboutImage[];
}

export interface IAboutImage {
  id: number;
  content: string;
  image_url: string;
}