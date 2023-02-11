import AboutSection from "@/components/AboutSection/AboutSection";
import BannerHiring from "@/components/BannerHiring/BannerHiring";
import Layout from "@/components/Common/Layout";
import Contact from "@/components/Contact/Contact";
import CtaGroup from "@/components/CtaGroup/CtaGroup";
import Hero from "@/components/Hero/Hero";
import PartnersSection from "@/components/PartnersSection/PartnersSection";
import Portfolio from "@/components/Portfolio/Portfolio";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import { HomeContextProvider } from "@/contexts/HomeContext";
import { IHomeData } from "@/interfaces/home.interface";
import { fetchData, fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface HomePageProps {
  indexData: IHomeData;
}

export default function Home({ indexData }: HomePageProps) {
  return (
    <Layout>
      <HomeContextProvider indexData={indexData}>
        <main>
          <Hero />
          <CtaGroup />
          <AboutSection />
          <Portfolio asSection />
          <ServicesSection />
          <PartnersSection />
          <Contact />
          <BannerHiring />
        </main>
      </HomeContextProvider>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (context) => {
  const locale = context.locale || context.defaultLocale || 'uz';
  const translations = await serverSideTranslations(locale);
  const headData = await fetchMainData(locale);
  const indexData = await fetchData('/index', locale);
  return {
    props: {
      ...translations,
      indexData,
      headData
    }
  };
};