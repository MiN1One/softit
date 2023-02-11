import Layout from "@/components/Common/Layout";
import ServicesContainer from "@/components/ServicesContainer/ServicesContainer";
import { fetchData, fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IService } from '@/interfaces/service.interface';

interface ServicesPageProps {
  services: IService[];
}

const ServicesPage: NextPage<ServicesPageProps> = ({ services }) => (
  <Layout>
    <main>
      <ServicesContainer data={services} />
    </main>
  </Layout>
);

export const getStaticProps: GetStaticProps<ServicesPageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || 'uz';
  
  const [services, translations, headData] = await Promise.all([
    fetchData('/services', locale),
    serverSideTranslations(locale),
    fetchMainData(locale),
  ]);

  return {
    props: {
      ...translations,
      headData,
      services,
    },
    revalidate: 200,
  };
};

export default ServicesPage