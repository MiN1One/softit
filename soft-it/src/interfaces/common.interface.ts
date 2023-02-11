export interface ICommonItem {
  label: string;
  value: string;
  url?: string;
}

export interface IFooterItem {
  id: number;
  title: string;
  url: string;
}

export interface IHeaderItem {
  id: number;
  title: string;
  url: string;
  order: number;
  is_footer: boolean;
}

export interface ICompanyInfo {
  id: number;
  logo_title: string;
  logo_description: string;
  logo_url: string;
  phone_number: string;
}

export interface IFooterCompanyInfo extends ICompanyInfo {
  telegram_link: string;
  facebook_link: string;
  instagram_link: string;
  email: string;
}

export interface IHeadData {
  headerData: {
    company_info: ICompanyInfo;
    menus: IHeaderItem[];
  };
  footerData: {
    company_info: IFooterCompanyInfo;
    menus: IFooterItem[];
  };
}