export interface IBlog {
  id: number;
  title: string;
  cover_image_url: string;
  published_date: string;
  banner_image_url: string;
  short_description: string;
  views: number;
  blog_category_title: string;
  description: string;
}

export interface ISingleBlog {
  blog: IBlog;
  recommended: IBlog[];
}

export interface IBlogCategory {
  id: number;
  title: string;
}