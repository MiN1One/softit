import AboutSection from "@/components/AboutSection/AboutSection";
import BannerHiring from "@/components/BannerHiring/BannerHiring";
import Layout from "@/components/Common/Layout";
import Contact from "@/components/Contact/Contact";
import CtaGroup from "@/components/CtaGroup/CtaGroup";
import Hero from "@/components/Hero/Hero";
import PartnersSection from "@/components/PartnersSection/PartnersSection";
import Portfolio from "@/components/Portfolio/Portfolio";
import ServicesSection from "@/components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  )
}
