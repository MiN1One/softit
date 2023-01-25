import AboutSection from "@/components/AboutSection/AboutSection";
import Layout from "@/components/Common/Layout";
import CtaGroup from "@/components/CtaGroup/CtaGroup";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <main>
      <Layout>
        <Hero />
        <CtaGroup />
        <AboutSection />
        <Portfolio />
      </Layout>
    </main>
  )
}
