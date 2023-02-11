import Layout from "@/components/Common/Layout";
import PageHead from "@/components/Common/PageHead";
import PortfolioContainer from "@/components/PortfolioContainer/PortfolioContainer";
import { HeadProps } from "@/interfaces/common.interface";
import { IProject, IProjectType } from "@/interfaces/project.interface";
import { fetchData, fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface PortfolioPageProps extends HeadProps {
  projects: IProject[];
  projectCategories: IProjectType[];
}

const PortfolioPage: NextPage<PortfolioPageProps> = (props) => (
  <Layout>
    <main>
      <PortfolioContainer
        projects={props.projects}
        projectCategories={props.projectCategories}
      />
    </main>
  </Layout>
);

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || 'uz';
  const [
    translations, 
    headData,
    projectCategories, 
    projects
  ] = await Promise.all([
    serverSideTranslations(locale),
    fetchMainData(locale),
    fetchData('/project-categories', locale),
    fetchData('/projects', locale)
  ]);

  return {
    props: {
      ...translations,
      projects,
      projectCategories,
      headData,
      meta: 'portfolio'
    },
    revalidate: 100,
  };
};

export default PortfolioPage;