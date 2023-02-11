import Layout from "@/components/Common/Layout";
import VacanciesContainer from "@/components/VacanciesContainer/VacanciesContainer";
import { IVacancy } from "@/interfaces/vacancies.interface";
import { fetchData, fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface VacanciesPageProps {
  vacancies: IVacancy[];
}

const VacanciesPage: NextPage<VacanciesPageProps> = (props) => (
  <Layout>
    <main>
      <VacanciesContainer vacancies={props.vacancies} />
    </main>
  </Layout>
);

export const getStaticProps: GetStaticProps<VacanciesPageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || 'uz';
  const [translations, headData, vacancies] = await Promise.all([
    serverSideTranslations(locale),
    fetchMainData(locale),
    fetchData('/vacancies', locale)
  ]);

  return {
    props: {
      ...translations,
      vacancies,
      headData,
      meta: 'vacancies'
    },
    revalidate: 100
  };
};

export default VacanciesPage;