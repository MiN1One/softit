import Layout from "@/components/Common/Layout";
import SingleService from "@/components/SingleService/SingleService";
import { IService } from "@/interfaces/service.interface";
import { fetchData, fetchMainData } from "@/utils/fetch.utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface ServicePageProps {
  serviceId: string;
}

const ServicePage: NextPage<ServicePageProps> = ({ serviceId }) => (
  <Layout>
    <main>
      <SingleService serviceId={serviceId} />
    </main>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const promises = ctx.locales!.map(async locale => {
    const services = await fetchData<IService[]>('/services', ctx.defaultLocale);
    const paths = services.map(({ id }) => ({
      params: { serviceId: id.toString() },
      locale
    }));
    return paths
  });
  const paths = (await Promise.all(promises)).flat();

  return { paths, fallback: false, };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || 'uz';
  const [translations, headData] = await Promise.all([
    serverSideTranslations(locale),
    fetchMainData(locale),
  ]);

  return {
    props: {
      ...translations,
      headData,
      serviceId: ctx?.params?.serviceId as string,
      meta: 'service'
    },
    revalidate: 200,
  };
};

export default ServicePage;