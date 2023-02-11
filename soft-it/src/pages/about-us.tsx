import AboutContainer from "@/components/AboutContainer/AboutContainer";
import Layout from "@/components/Common/Layout";
import { IAboutPageData } from "@/interfaces/about.interface";
import { fetchData, fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface AboutPageProps {
  about: IAboutPageData;
}

const About: NextPage<AboutPageProps> = (props) => (
  <Layout>
    <main>
      <AboutContainer data={props.about} />
    </main>
  </Layout>
);

export const getStaticProps: GetStaticProps<AboutPageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || 'uz';
  
  const [about, translations, headData] = await Promise.all([
    fetchData('/about', locale),
    serverSideTranslations(locale),
    fetchMainData(locale),
  ]);

  return {
    props: {
      ...translations,
      headData,
      about: about?.[0],
    },
    revalidate: 200,
  };
};

export default About;