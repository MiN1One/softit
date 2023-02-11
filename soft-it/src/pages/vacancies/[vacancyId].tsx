import Layout from "@/components/Common/Layout";
import SingleVacancy from "@/components/SingleVacancy/SingleVacancy";
import { IVacancy } from "@/interfaces/vacancies.interface";
import { fetchData, fetchMainData } from "@/utils/fetch.utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface SingleVacancyPageProps {
  vacancy: IVacancy;
}

const SingleVacancyPage: NextPage<SingleVacancyPageProps> = (props) => (
  <Layout>
    <main>
      <SingleVacancy vacancy={props.vacancy} />
    </main>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async ({ locales = [] }) => {
  const promises = locales.map(async locale => {
    const vacancies = await fetchData<IVacancy[]>(
      '/vacancies/available_vacancies/', 
      locale
    );
    return vacancies.map(vacancy => ({
      params: {
        vacancyId: vacancy.id.toString()
      },
      locale
    }));
  });
  const paths = (await Promise.all(promises!)).flat();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || 'uz';
  const [translations, headData, vacancy] = await Promise.all([
    serverSideTranslations(locale),
    fetchMainData(locale),
    fetchData<IVacancy>('/vacancies/' + ctx.params?.vacancyId, locale)
  ]);

  return {
    props: {
      ...translations,
      headData,
      vacancy,
      meta: {
        title: vacancy.title,
        description: vacancy.title
      }
    },
    revalidate: 200,
  };
};

export default SingleVacancyPage;