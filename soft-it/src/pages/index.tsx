import AboutSection from "@/components/AboutSection/AboutSection";
import Layout from "@/components/Common/Layout";
import CtaGroup from "@/components/CtaGroup/CtaGroup";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Layout>
        <Hero />
        <CtaGroup />
        <AboutSection />
      </Layout>
    </main>
  )
}
